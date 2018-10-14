const app = require('./src/server');
require('dotenv').config()

let host, port;
if (process.env.IS_PROD === "true") {
	host = '';
	port = 7000;
} else {
	host = ' localhost';
	port = 4000;
}

app.listen(port, () => {
  console.log(`Running on${host}: ${port}`);
});
