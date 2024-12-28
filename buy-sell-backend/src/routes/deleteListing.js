import { db } from '../database';

export const deleteListingRoute = {
    method : 'DELETE',
    path : '/api/listings/{id}',
    handler : async (request, h) => {
        const { id } = request.params;
        const userId = '12345'; // hardcoded for now
        await db.query(
            'DELETE FROM listings WHERE id = ? AND user_id = ?;',
            [id, userId]
        );
        return { message: 'Listing Deleted!' };
    }
};