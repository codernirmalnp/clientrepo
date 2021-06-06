const route = require('express').Router();
const getDefaultUser = require('../middleware/defaultUser');

route.use(getDefaultUser);
route.use('/folder',require('./api/Folder'));
route.use('/file',require('./api/File'));
route.use('/user',require('./api/Users'));

module.exports = route;