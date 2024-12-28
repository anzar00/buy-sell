import {v4 as uuid} from 'uuid';
import { db } from '../database';

export const createNewListingRoute = {
    method: 'POST',
    path: '/api/listings',
    handler : async (request, h) => {
        const { name = '', description = '', price = 0 } = request.payload;
        const id = uuid();
        const userId = '12345'; // hardcoded for now 
        const views = 0;
        await db.query(
            `INSERT INTO listings (id, name, description, price, user_id, views) 
                VALUES (?, ?, ?, ?, ?, ?);`,
                [id, name, description, price, userId, views]
        );
        return {id, name, description, price, user_id : userId, views};
    }
};