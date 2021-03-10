// Imports
const {
    GraphQLServer
} = require('graphql-yoga');

const Set = require('./models/Set');
const Theme = require('./models/Theme');

//Schema
const typeDefs = `
    type Query {
        set(set_num: String): Set!
        sets: [Set]
        theme(id: Int): Theme!
        themes: [Theme]
    }
    type Set {
        set_num: String!
        name: String!
        year: String!
        num_parts: Int!
        theme: Theme!
    }
    type Theme {
        id: Int!
        name: String
        parent: Theme
        children: [Theme]
        sets: [Set]
    }
`;

// Resolvers
const resolvers = {
    Query: {
        set: async (_, {
            set_num
        }) => Set.findOne(set_num),
        sets: async _ => Set.findAll(),
        theme: async (_, {
            id
        }) => Theme.findOne(id),
        themes: async _ => Theme.findAll()
    },
    Set: {
        theme: ({
            theme_id
        }) => Theme.findOne(theme_id)
    },
    Theme: {
        parent: ({
            parent_id
        }) => Theme.findOne(parent_id),
        children: ({
            id
        }) => Theme.findByParent(id),
        sets: ({
            themeId
        }) => Set.findByTheme(themeId)
    }
};

// Server Start
const server = new GraphQLServer({
    typeDefs,
    resolvers
});
server.start({
    port: 3500
}, () => console.log('Server is running on localhost:3500'));