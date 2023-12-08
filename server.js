const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const uploads = require('./middleware/multer')
const cloudinary = require('./config/cloudinaryConfig')

const { Story_Image } = require('./models');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 300000,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public'));
});

app.post('/api/photo', uploads.single('file'), async (req, res) => {

  try {
    const cloudImgData = await cloudinary.uploader.upload('./uploads/' + req.file.filename, {
      upload_preset: 'My Preset Here'
    })

    // create Story_Image
    await Story_Image.create({
      story_id: req.body.story_id,
      attachment_url: cloudImgData.url
    })

    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

// app.post('/upload', multerUploads, (req, res) => {
//   console.log('req.file :', req.file);
//   });

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
