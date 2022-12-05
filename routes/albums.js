import express from 'express';

import { v4 as uuidv4 } from 'uuid';

const albums = [];

const router = express.Router();

router.get('/', ( req, res ) => {

    res.send(albums);

})

router.post('/', ( req, res ) => {
    
    console.log("POST ROUTE REACHED!");

    const album = req.body;

    albums.push({ ...album, id: uuidv4()});

    res.send(`Album with the ${album.nameSong} added to the database! `);
})

router.get('/:id', ( req, res ) => {

    res.send('THE GET ID ROUTE');

})

export default router;