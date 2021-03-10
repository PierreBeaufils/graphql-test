// a priori, c'est le serveur (surcouche Express)
const {
    GraphQLServer
} = require('graphql-yoga');

// ma source de données
const Post = require('./Post');

// notre schema
const typeDefs = `
  type Query {
    post(id: Int): Post
    posts: [Post]
  }
  type Post {
      id: Int!
      title: String!
      excerpt: String
      author: Author
  }
  type Author {
      name: String!
      writings: [Post]
  }
`;

// les fameux resolvers (= nouveaux controllers)
const resolvers = {
    Query: {
        post: async (_, {
            id
        }) => Post.findOne(id),
        posts: async _ => Post.findAll()
    },
    Author: {
        writings: async parent => Post.findByAuthor(parent.name)
    }
};

// 2 lignes pour tout lancer, c'est cool
const server = new GraphQLServer({
    typeDefs,
    resolvers
});
server.start({
    port: 3500
}, () => console.log('Server is running on localhost:3500'));