const { perfis } = require("../data/db");

// personalizando um resolver (ex. campo salario com nome diferente no BD);
module.exports = {
  salario(usuario) {
    return usuario.salario_real;
  },
  perfil(usuario) {
    const sels = perfis.filter((p) => p.id === usuario.perfil_id);
    return sels ? sels[0] : null;
  },
};
