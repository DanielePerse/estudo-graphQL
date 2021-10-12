const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  # como o graphQl tem apenas alguns tipos báscicos, podemos add algum tipo que precismoas. Ex. Date
  scalar Date

  # criando um tipo personalizado
  type Usuario {
    id: ID
    nome: String!
    email: String!
    idade: Int
    salario: Float
    vip: Boolean
  }

  type Produto {
    nome: String!
    preco: Float!
    desconto: Float
    precoComDesconto: Float
  }

  #Pontos de entrada da api
  type Query {
    ola: String!
    horaAtual: String!
    horaAtualAddNewScalar: Date
    usuarioLogado: Usuario
    produtoEmDestaque: Produto
  }
`;

const resolvers = {
  // personalizando um resolver (ex. campo salrio com nome diferente no BD);
  Usuario: {
    salario(usuario) {
      return usuario.salario_real;
    },
  },
  Produto: {
    precoComDesconto(produto) {
      if (produto.desconto) {
        return produto.preco * (1 - produto.desconto);
      } else {
        produto.preco;
      }
    },
  },
  Query: {
    ola() {
      return "string qualquer";
    },
    horaAtual() {
      return `${new Date()}`;
    },
    horaAtualAddNewScalar() {
      return new Date();
    },
    usuarioLogado() {
      return {
        id: 1,
        nome: "Daniele",
        email: "dani@gmail.com",
        idade: 36,
        salario_real: 1000.7,
        vip: true,
      };
    },
    produtoEmDestaque() {
      return {
        nome: "agua micelar",
        preco: 19.99,
        desconto: 0.15,
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`);
});
