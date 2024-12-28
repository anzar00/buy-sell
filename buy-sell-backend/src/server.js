import Hapi from '@hapi/hapi';
import routes from './routes';
import { db } from './database';

const start = async () => {
    const server = Hapi.server({
        port: 8000,
        host: 'localhost',
    });
    
    routes.forEach((route) => {
        server.route(route);
    });

    db.connect();
    await server.start();
    console.log('Server running on %s', server.info.uri);
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

process.on('SIGINT', async () => {
    console.log('stopping server');
    await server.stop({timeout: 10000});
    db.end();
    console.log('server stopped');
    process.exit(0);
});


start();