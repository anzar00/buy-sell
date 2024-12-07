import {fakeListings} from './fakeData';


export const getAllListingsRoute = {
    method: 'GET',
    path: '/api/listings',
    handler : (request, h) => {
        return fakeListings;
    }
};