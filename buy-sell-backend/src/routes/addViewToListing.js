import { db } from "../database";


export const addViewToListingRoute = {
    method: 'POST',
    path : '/api/listings/{id}/add-view',
    handler : async (request, h) => {
        const id = request.params.id;
        await db.query('UPDATE listings SET views = views + 1 WHERE id = ?', [id]);
        const {results} = await db.query('SELECT * FROM listings WHERE id = ?', [id]);
        const updatedListing = results[0];
        if (!updatedListing) throw Boom.notFound(`Listing with id - ${id} does not exist.`);
        return updatedListing;
    }
};