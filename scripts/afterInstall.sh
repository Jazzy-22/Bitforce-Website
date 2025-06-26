curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
. ~/.nvm/nvm.sh
nvm install --lts
node -e "console.log('Running Node.js ' + process.version)"

# npm install pm2 -g # To install pm2 globally so you can manage multiple node processors.
# pm2 delete 0

chmod 777 /home/root/
cd /home/root/

# npm i

npm run build