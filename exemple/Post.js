const thePosts = [{
        id: 17,
        title: "Vive les navets",
        excerpt: "Lorem ipsum navetum",
        author: {
            name: "Jean"
        }
    },
    {
        id: 22,
        title: "Vive les carottes",
        excerpt: "Lorem ipsum carotum",
        author: {
            name: "Pierre"
        }
    },
    {
        id: 78,
        title: "Vive les poireaux",
        excerpt: "Lorem ipsum poirotum",
        author: {
            name: "Pierre"
        }
    }
];

class Post {
    constructor(data) {
        for (let prop in data) {
            this[prop] = data[prop];
        }
    }

    static async findAll() {
        return new Promise(resolve => resolve(thePosts));
    }

    static async findOne(id) {
        return new Promise((resolve, reject) => {
            const thePost = thePosts.find(p => p.id === id);

            if (thePost) {
                resolve(thePost);
            } else {
                reject("no post with this id");
            }
        });
    }

    static async findByAuthor(name) {
        return new Promise((resolve, reject) => {
            const authorsPosts = thePosts.filter(p => p.author.name === name);

            if (authorsPosts) {
                resolve(authorsPosts);
            } else {
                reject("no posts with this author");
            }
        });
    }
}

module.exports = Post;