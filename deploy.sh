echo "Building app..."
npm run build
echo "Deploy files to server..."
scp -r -i C:\\Users\\84944\\Desktop\\KampGo.vn build/* root@167.99.70.213:/var/www/html/
echo "Done!"