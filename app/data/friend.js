var friends = [
    {
    "name": "Ahmed",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
    "scores": [
    "5",
    "1",
    "4",
    "4",
    "5",
    "1",
    "2",
    "5",
    "4",
    "1"
    ]
    },
    {
    "name": "Jacob Deming",
    "photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
    "scores": [
    "4",
    "2",
    "5",
    "1",
    "3",
    "2",
    "2",
    "1",
    "3",
    "2"
    ]
    },
    {
    "name": "Jeremiah Scanlon",
    "photo": "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
    "scores": [
    "5",
    "2",
    "2",
    "2",
    "4",
    "1",
    "3",
    "2",
    "5",
    "5"
    ]
    },
    {
    "name": "Louis T. Delia",
    "photo": "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
    "scores": [
    "3",
    "3",
    "4",
    "2",
    "2",
    "1",
    "3",
    "2",
    "2",
    "3"
    ]
    },
    {
    "name": "Lou Ritter",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkDAAAAJDhhZTI5NTk2LWQzZjUtNDJjZi1hMTM2LTQ3ZjNmYjE0YmY2NA.jpg",
    "scores": [
    "4",
    "3",
    "4",
    "1",
    "5",
    "2",
    "5",
    "3",
    "1",
    "4"
    ]
    },
    {
    "name": "Jordan Biason",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg",
    "scores": [
    "4",
    "4",
    "2",
    "3",
    "2",
    "2",
    "3",
    "2",
    "4",
    "5"
    ]
    },
    {
    "name": "abc",
    "photo": "https://cdn.pixabay.com/photo/2018/04/19/20/03/people-3334127_1280.jpg",
    "scores": [
    "2",
    "2",
    "3",
    "4",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2"
    ]
    },
    {
    "name": "abc",
    "photo": "https://cdn.pixabay.com/photo/2018/04/19/20/03/people-3334127_1280.jpg",
    "scores": [
    "2",
    "2",
    "3",
    "4",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2"
    ]
    },
    {
    "name": "bob",
    "photo": "image.html",
    "scores": [
    "2",
    "3",
    "3",
    "3",
    "3",
    "3",
    "2",
    "4",
    "3",
    "3"
    ]
    },
    {
    "name": "Karen",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Durian.jpg/1200px-Durian.jpg",
    "scores": [
    "4",
    "4",
    "3",
    "1",
    "4",
    "1",
    "3",
    "2",
    "4",
    "4"
    ]
    },
    {
    "name": "Karen",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Durian.jpg/1200px-Durian.jpg",
    "scores": [
    "4",
    "4",
    "3",
    "1",
    "4",
    "1",
    "3",
    "2",
    "4",
    "1"
    ]
    },
    {
    "name": "Ruffus",
    "photo": "data:image/jpeg;base64,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",
    "scores": [
    "2",
    "3",
    "2",
    "2",
    "2",
    "3",
    "5",
    "4",
    "3",
    "4"
    ]
    },
    {
    "name": "dude",
    "photo": "link",
    "scores": [
    "5",
    "2",
    "2",
    "1",
    "4",
    "4",
    "3",
    "4",
    "3",
    "3"
    ]
    },
    {
    "name": "Scott",
    "photo": "Google.com",
    "scores": [
    "5",
    "3",
    "1",
    "3",
    "4",
    "1",
    "5",
    "1",
    "1",
    "2"
    ]
    },
    {
    "name": "john",
    "photo": "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fpeopledotcom.files.wordpress.com%2F2017%2F04%2Fbrad-pitt-1.jpg%3Fw%3D450&w=700&q=85",
    "scores": [
    "3",
    "3",
    "2",
    "4",
    "3",
    "2",
    "3",
    "4",
    "3",
    "2"
    ]
    },
    {
    "name": "Button ",
    "photo": "\"https://www.petmd.com/sites/default/files/what-does-it-mean-when-cat-wags-tail.jpg\"",
    "scores": [
    "3",
    "5",
    "4",
    "2",
    "5",
    "5",
    "4",
    "2",
    "3",
    "2"
    ]
    },
    {
    "name": "Yes",
    "photo": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png/revision/latest?cb=20171231005834",
    "scores": [
    "3",
    "3",
    "4",
    "4",
    "5",
    "4",
    "2",
    "3",
    "2",
    "4"
    ]
    },
    {
    "name": "Yes",
    "photo": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png/revision/latest?cb=20171231005834",
    "scores": [
    "3",
    "3",
    "4",
    "4",
    "5",
    "4",
    "2",
    "3",
    "2",
    "4"
    ]
    },
    {
    "name": "Yes",
    "photo": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png/revision/latest?cb=20171231005834",
    "scores": [
    "3",
    "3",
    "4",
    "4",
    "2",
    "4",
    "2",
    "3",
    "2",
    "4"
    ]
    },
    {
    "name": "Yes",
    "photo": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png/revision/latest?cb=20171231005834",
    "scores": [
    "1",
    "5",
    "5",
    "5",
    "5",
    "5",
    "2",
    "3",
    "2",
    "4"
    ]
    },
    {
    "name": "Yes",
    "photo": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png/revision/latest?cb=20171231005834",
    "scores": [
    "1",
    "5",
    "5",
    "2",
    "3",
    "5",
    "2",
    "5",
    "2",
    "1"
    ]
    },
    {
    "name": "bla",
    "photo": "www.bla.bla",
    "scores": [
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1"
    ]
    },
    {
    "name": "dsfasf",
    "photo": "https://media.giphy.com/media/UE17fgOCvcFW0/giphy.gif",
    "scores": [
    "3",
    "1",
    "1",
    "2",
    "5",
    "2",
    "3",
    "2",
    "3",
    "3"
    ]
    },
    {
    "name": "Stan",
    "photo": "https://image.com",
    "scores": [
    "4",
    "4",
    "3",
    "3",
    "2",
    "2",
    "3",
    "4",
    "3",
    "4"
    ]
    },
    {
    "name": "abc",
    "photo": "ksdjf",
    "scores": [
    "1",
    "1",
    "3",
    "2",
    "1",
    "4",
    "3",
    "1",
    "3",
    "2"
    ]
    },
    {
    "name": "abc",
    "photo": "ksdjf",
    "scores": [
    "1",
    "1",
    "3",
    "2",
    "1",
    "4",
    "3",
    "1",
    "3",
    "2"
    ]
    },
    {
    "name": "hello world",
    "photo": "https://www.google.com/search?tbm=isch&q=Ryan%20Reynolds#imgrc=KT6As0YfJynJuM:",
    "scores": [
    "3",
    "4",
    "4",
    "4",
    "2",
    "3",
    "4",
    "2",
    "3",
    "3"
    ]
    }
    ]

    module.exports = friends;