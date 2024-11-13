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
const { CreateNotification, getNotification } = require('../App/controller/notification');
const { createGames, getGames, updateGames } = require('../App/controller/games');
const { GetPlayer, GetPlayerById, checkFollower, followers } = require('../App/controller/profile');
module.exports = serviceRouters;

serviceRouters.post('/createstories', createStories);
serviceRouters.get('/getstory', getStory);
serviceRouters.post('/updateViewCount', incrementStoryView);
serviceRouters.post('/likeStory', incrementStoryLike);
serviceRouters.post('/unlikeStory', decrementStoryLike);
serviceRouters.post('/checkLikeStatus', checkliked);
serviceRouters.post('/createComment', createComment);
serviceRouters.get('/getdataComment/:storyId', getCommentStory);

//notifications
serviceRouters.post('/createNotification', CreateNotification);
serviceRouters.get('/getNotification/:ownerId/:typeId', getNotification);

//games
serviceRouters.post('/creategame', createGames);
serviceRouters.get('/getGames', getGames);
serviceRouters.put('/updateGame', updateGames);

// profiles
serviceRouters.get('/getallplayer', GetPlayer);
serviceRouters.get('/getplayerbyId/:id', GetPlayerById);
serviceRouters.post('/checkfollow', checkFollower);
serviceRouters.post('/handlefollow', followers);
