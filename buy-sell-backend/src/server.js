import Hapi from '@hapi/hapi';
import * as admin from 'firebase-admin';
import routes from './routes';
import { db } from './database';
import credentials from '../cred.json';

admin.initializeApp({
    credential: admin.credential.cert(credentials)
});

let server;

const start = async () => {
     server = Hapi.server({
        port: 8000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'], 
                headers: ['Accept', 'Content-Type'],
                additionalHeaders: ['X-Requested-With']
            }
        }
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