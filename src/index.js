import express from 'express';
import fetch from 'isomorphic-fetch';
import Promise from 'bluebird';
import _ from 'lodash';
const app = express();
function calculate(url) {
	const reA = /(a=)((\-)?\d+(\.\d+)?)/;
	try {
		var a = url.match(reA)[2];
	} catch(e) {		
		return 0;
	}		
	const reB = /(b=)((\-)?\d+(\.\d+)?)/;
	console.log(a);
	try {
		var b = (url.match(reB)[2]);
	} catch (e) {
		return a;
	}
	return Number(a) + Number(b);	
};
app.get('/', (req, res) => {
	
	const sum = calculate(req.url);
	res.json ({
		url: sum,
		fg: '112'
	});
});
app.listen(3000, () => {
  console.log('Запущен сервер. Для остановки нажмите Ctrl + C.');
});
