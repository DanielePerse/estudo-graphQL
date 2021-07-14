const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello: () => 'Hello World'
    }
};

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
