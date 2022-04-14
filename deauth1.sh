#!/bin/bash

ifconfig wlp2s0 down
airmon-ng check kill
iwconfig wlp2s0 mode monitor
ifconfig wlp2s0 up
