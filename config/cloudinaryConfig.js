// import { config, uploader } from 'cloudinary';
// const cloudinaryConfig = () => config({
// cloud_name: 'do5imn8is',
// api_key: '387272433512667',
// api_secret: 'QI4JpPRzuYZPg90kzxdeVU0dgs8',
// });
// export { cloudinaryConfig, uploader };
require('dotenv').config();
const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: 'do5imn8is',
    api_key: '387272433512667',
    api_secret: 'QI4JpPRzuYZPg90kzxdeVU0dgs8',
});

module.exports = cloudinary;