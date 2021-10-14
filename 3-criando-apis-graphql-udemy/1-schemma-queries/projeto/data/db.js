const usuarios = [
  {
    id: 1,
    nome: "joão das couves",
    email: "joao@email.com",
    idade: 30,
    perfil_id: 1,
    status: "ATIVO",
  },
  {
    id: 2,
    nome: "maria das couves",
    email: "maria@email.com",
    idade: 32,
    perfil_id: 2,
    status: "INATIVO",
  },
  {
    id: 3,
    nome: "antonio das couves",
    email: "antonio@email.com",
    idade: 33,
    perfil_id: 2,
    status: "BLOQUEADO",
  },
];

const perfis = [
  {
    id: 1,
    acesso: "admin",
  },
  {
    id: 2,
    acesso: "comum",
  },
];

module.exports = { usuarios, perfis };
