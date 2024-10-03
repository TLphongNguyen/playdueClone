const express = require('express');
const serviceRouters = express.Router();
const {
	createStories,
	getStory,
	incrementStoryView,
	incrementStoryLike,
	decrementStoryLike,
	checkliked,
	createComment,
	getCommentStory,
} = require('../App/controller/story');
module.exports = serviceRouters;

serviceRouters.post('/createstories', createStories);
serviceRouters.get('/getstory', getStory);
serviceRouters.post('/updateViewCount', incrementStoryView);
serviceRouters.post('/likeStory', incrementStoryLike);
serviceRouters.post('/unlikeStory', decrementStoryLike);
serviceRouters.post('/checkLikeStatus', checkliked);
serviceRouters.post('/createComment', createComment);
serviceRouters.get('/getdataComment/:storyId', getCommentStory);
