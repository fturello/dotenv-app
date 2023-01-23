const http = require("http");
require("dotenv").config();

const hostname = "127.0.0.1";
const port = 8000;

const requestHandler = (request, response) => {
	console.log("// client request ==", request.url);
	response.end(
		`I am ${process.env.APP_NAME}, wilder in ${process.env.APP_CITY}, and I love ${process.env.APP_LANGUAGE}.`
	);
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
	if (err) {
		console.error(`Something bad happened ${err}`);
		return;
	}
	console.log(`Server is listening on ${port}`);
});
