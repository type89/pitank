#!bin/bin/sh
cd /opt/mjpg-streamer/
sudo modprobe bcm2835-v4l2
./mjpg_streamer -i "./input_uvc.so -f 30 -r 320x240 -d /dev/video0 -y" -o "./output_http.so -w ./www -p 8080" &

