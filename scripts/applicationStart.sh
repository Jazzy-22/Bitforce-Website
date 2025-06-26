#!/bin/bash
# curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
# . ~/.nvm/nvm.sh
# nvm install --lts

# npm install pm2 -g # To install pm2 globally so you can manage multiple node processors.
cd /home/root/
#pm2 start npm --name "BitForce-Web" -- run start
rm -rf /var/www/html/*
scp -rf build/* /var/www/html
service nginx restart