import express from 'express';

import { v4 as uuidv4 } from 'uuid';

let albums = [];

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

    const { id } = req.params;

    const foundAlbum = albums.find((album) => album.id === id);

    console.log(foundAlbum);

    res.send(foundAlbum);
});

router.delete('/:id', (req, res) => {

    const { id } = req.params;

    albums = albums.filter((album) => album.id !== id);

    res.send(`Album with the id ${id} deleted from the database.`)

})

router.patch('/:id', (req, res) => {
    const { id } = req.params;

    const { nameSong, artistSong, rankList } = req.body;

    const album = albums.find((album) => album.id === id);

    if(nameSong){
        album.nameSong = nameSong;
    }

    if(artistSong) {
        album.artistSong = artistSong;
    }

    if(rankList) {
        album.rankList = rankList;
    }
})

export default router;