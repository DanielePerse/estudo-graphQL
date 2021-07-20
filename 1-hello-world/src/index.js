const { ApolloServer, gql } = require('apollo-server');
const { argsToArgsConfig } = require('graphql/type/definition');

const typeDefs = gql`
# ! atributo obrigatório
# ID -> chave primária
    type User {
        _id: ID!
        name: String!
        email: String!
        active: Boolean!
    }

# conseguimos aninhar
    type Post {
        _id: ID!
        title: String!
        content: String!
        author: Boolean!
    }

    type Query {
        hello: String
        users: [User!]! # ! pode retornar um array vazio, mas não null
        getUserByEmail(email: String!): User!
    }

    type Mutation {
        createUser(name: String!, email: String!): User!
    }
`;

const users = [
    { _id: 1, name: "Dany1", email: "dani1@gmail.com", active: true },
    { _id: 2, name: "Dany2", email: "dani2@gmail.com", active: false },
    { _id: 3, name: "Dany3", email: "dani3@gmail.com", active: true },
];

const resolvers = {
    Query: {
        hello: () => 'Hello World',
        users: () => users,
        getUserByEmail: (_, args) => {
            return users.find((user) => user.email === args.email);
        },
    },

    Mutation: {
        createUser: (_, args) => {
            const newUser = {
                _id: String(Math.random()),
                name: args.name,
                email: args.email,
                active: true,
            };

            users.push(newUser);
            return newUser;
        }
    },
};
// video - 11min - https://www.youtube.com/watch?v=iUYabIGhJYk

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`Server is started at ${url}`));

// Describe your data - Ask what you want - Get predictable results
// definir schemas no graphQL (ele é tipado)
// precisamos dizer para ele os recursos (ações) e quais retornos essas ações vão ter

// TODA request é POST
// TODA request tem o mesmo endpoint (/graphql)

// Query -> obter informação (tipo o get)
// Mutation -> manipular dados (tipo o POST/PUT/PATCH/DELETE) 
// são apenas strings que a gente envia no body da nossa requisição numa request POST

// Scalar Types -> são tipos primitivos: String, Int, Boolean, Float e ID

/**
 * aninhar:
 * query {
 *  posts {
 *     title
 *     author {
 *         name
 *         email
 *         active
 * }}}   
**/
