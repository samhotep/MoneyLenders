const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const connection = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'samoroot',
	database: 'react'
});

const app = express();
const url_salt = '/44rewreoifhsksne8472AdiaDGBa';
const users_url = url_salt + 'users';

app.get(users_url, function(req, res) {

	connection.getConnection(function (err, connection) {
		connection.query('SELECT * FROM users', function(error, results, fields) {

			if (error) throw error;

			res.send(results)
		});
	});
});

app.listen(3000, () => {
	console.log('Go to http://localhost:3000' + users_url)
})

module.exports = {
	users_url: users_url,
}