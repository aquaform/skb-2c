import express from 'express';
import fetch from 'isomorphic-fetch';
import Promise from 'bluebird';
import _ from 'lodash';
import cors from 'cors';

const app = express();

app.use(cors());
app.get('/task2c', (req, res) => {	
	
  const url = req.query.username;
  const re = new RegExp('@?(https?:)?(//)?(([a-z.])[^/]*/)?@?([a-zA-Z0-9._]*)', 'i');
  const username = url.match(re)[5];
  res.send('@'+ username);

});
app.listen(3000, () => {
  console.log('Запущен сервер. Для остановки нажмите Ctrl + C.');
});
