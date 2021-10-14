const { usuarios, perfis } = require("../data/db");

module.exports = {
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
  numerosMegaSena() {
    const crescente = (a, b) => a - b;
    return Array(6)
      .fill(0)
      .map((n) => parseInt(Math.random() * 60 + 1))
      .sort(crescente);
  },
  usuarios() {
    return usuarios;
  },
  usuario(_, args) {
    const sels = usuarios.filter((u) => u.id === args.id);
    return sels ? sels[0] : null;
  },
  perfis() {
    return perfis;
  },
  perfil(_, { id }) {
    const sels = perfis.filter((p) => p.id === id);
    return sels ? sels[0] : null;
  },
};
