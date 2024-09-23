const express = require('express');
const serviceRouters = express.Router();
const { createStories, getStory } = require('../App/controller/story');
module.exports = serviceRouters;

serviceRouters.post('/createstories', createStories);
serviceRouters.get('/getstory', getStory);
