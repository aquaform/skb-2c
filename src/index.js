import express from 'express';
import fetch from 'isomorphic-fetch';
import Promise from 'bluebird';
import _ from 'lodash';

const app = express();

function canonize(url) {
	const re = new RegExp ('@?(https?)?(\/\/)?((telegram|vk|twitter|vkontakte)(\.(.w+)\/))?(/w*)', 'i');
	const username = url.match(re);
	
	return username;	
};
app.get('/task2c', (req, res) => {	
	
	const username = canonize(req.url);

	res.json ({
		'username': username,		
	});
});
app.listen(3000, () => {
  console.log('Запущен сервер. Для остановки нажмите Ctrl + C.');
});
