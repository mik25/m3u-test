var env = process.env.NODE_ENV ? 'Render':'local';

var config = {
    addon: 'started',
}

switch (env) {
    //Public server build.
    case 'Render':
		config.port = process.env.PORT
        config.local = "hy.m3u.org"
        break;

    //Local sever build.
    case 'local':
		config.port = 3649
        config.local = "http://127.0.0.1:" + config.port;
        break;
}

module.exports = config;
