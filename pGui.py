#pGui.py

import PySimpleGUI as sg
import subprocess

def spoof_window():
    layout = [[sg.Text("Spoofer", key="new")],[sg.Button("Start")] [sg.Button("Exit")]]
    window = sg.Window("Third Window", layout, no_titlebar = True)
    choice = None
    while True:

        event, values = window.read()
        if event == "Start":
            #Change the inside of this .call method to the path of the attack script
            subprocess.call("../ptest/scrpt.sh")
            
        if event == "Exit" or event == sg.WIN_CLOSED:
            break

    window.close()

def hijack_window():
    layout = [[sg.Text("Hijacker", key="new")], [sg.Button("Start")], [sg.Button("Exit")]]
    window = sg.Window("First Window", layout, no_titlebar = True)
    choice = None
    while True:

        event, values = window.read()
        
        if event == "Start":
            #Change the inside of this .call method to the path of the attack script
            subprocess.call("../ptest/scrpt.sh")
        
        if event == "Exit" or event == sg.WIN_CLOSED:
            break

    window.close()
def deauth_window():
    layout = [[sg.Text("Deauthenticator", key="new")],[sg.Button("Start")], [sg.Button("Exit")]]
    window = sg.Window("Second Window", layout, no_titlebar = True)
    choice = None
    while True:

        event, values = window.read()
        if event == "Start":
            #Change the inside of this .call method to the path of the attack script
            subprocess.call("../ptest/scrpt.sh")
        
        if event == "Exit" or event == sg.WIN_CLOSED:
            break

    window.close()
    
def main():
    layout = [[sg.Text("COUNTER DRONE")], [sg.Button("Hijack")], [sg.Button("Deauthentication")], [sg.Button("Telnet")], [sg.Button("Exit")]]
    window = sg.Window("Main Window", layout, size = (600,400), element_justification='c')
    while True:
        event, values = window.read()
        if event == "Exit" or event == sg.WIN_CLOSED:
            break
        if event == "Telnet":
            spoof_window()
        if event == "Hijack":
            hijack_window()
        if event == "Deauthentication":
            deauth_window()

    window.close()

if __name__ == "__main__":
    main()
