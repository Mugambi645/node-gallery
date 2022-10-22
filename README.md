# Node image uploader

> 
> Built with react,express and cloudinary API

![SnapShot](./pic.png)
![SnapShot](./pic1.png)
## Build Setup:frontend

``` bash
# navigate to client directory
cd client
# install dependencies
npm install
# create .env file & add url
touch .env & inside env file add ```REACT_APP_API_URL=http://localhost:5000```
# serve with hot reload at localhost:3000
npm run start
# build for production with minification
npm run build
# build for production and view the bundle analyzer report
npm run build --report
```
### Build Setup: backend

```bash
# navigate to server directory
cd server
# install dependancies
npm install
# create .env file & add cloudinary API variables
touch .env & inside 
API_KEY=#########
CLOUD_NAME=#######
API_SECRET=###############
# serve
nodemon index.js
# testing the API with postman
```
![Postman](./postman.png)
## 📝 License

This project is free to use
