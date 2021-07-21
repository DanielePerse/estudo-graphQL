import { ApolloServer } from 'apollo-server';
import { PubSub } from 'graphql-subscriptions';
import mongoose from 'mongoose';
// https://www.apollographql.com/docs/apollo-server/data/subscriptions/

function startServer({ typeDefs, resolvers }) {
    mongoose.connect('mongodb://localhost:27017/graphql', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    // ajuda a criar o 'túnel' de webSocket para conectar o cliente ao canal
    const pubsub = new PubSub();
    const server = new ApolloServer({ typeDefs, resolvers, context: { pubsub } });
    server.listen().then(({ url }) => console.log(`Server started at ${url}`));
}

export default startServer;
