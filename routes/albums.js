import express from 'express';

const albums = [
    {
        nameSong: "Anti-Hero",
        artistSong: "Taylor Swift",
        rankList: 1
    },
    {
        nameSong: "Unholy",
        artistSong: "Sam Smith & Kim Petras",
        rankList: 2
    },
    {
        nameSong: "Rich Flex",
        artistSong: "Drake & 21 Savage",
        rankList: 3
    },
    {
        nameSong: "I'm Good (Blue)",
        artistSong: "David Guetta & Bebe Rexha",
        rankList: 4
    }
]

const router = express.Router();

router.get('/', (req, res) => {

    console.log(albums);

    res.send(albums);
})

export default router;