const path = require('path');
const bestzip = require('bestzip');
const {version} = require('../package.json');

const cwd = path.join(__dirname, '..', 'dist');
const destination = `twine-${version}-web.zip`;

bestzip({
	source: 'web',
	destination,
	cwd
})
	.then(() => {
		console.log(`Created ${path.join(cwd, destination)}`);
	})
	.catch(err => {
		console.error(err);
		process.exitCode = 1;
	});
