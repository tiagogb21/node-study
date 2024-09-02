import UserModel from "../../database/models/User.model.js";

export class UserRepository {
    constructor() {
        this.user = UserModel;
        this.user.sync({ force: true }) // Em produção remover do construtor para evitar recriação da tabela a cada instância.
    }

    async createUser({ data: { name, email } }) {
        return this.user.create({
            name,
            email,
        });
    }

    async getUser(id) {
        return this.user.findOne({ where: { id } }); // Correção na consulta pelo ID
    }

    async update({ id, data: { name, email } }) {
        // O método update retorna o número de linhas afetadas;
        // para obter o registro atualizado, faça uma nova busca ou utilize `returning: true` se o ORM suportar.
        const [updatedRows, [updatedUser]] = await this.user.update(
            { name, email },
            {
                where: { id },
                returning: true, // Retorna o registro atualizado junto com o update, se suportado
                individualHooks: true, // Opcional: garante que hooks individuais (como hooks de atualização) sejam disparados
            }
        );

        // Retornar o usuário atualizado, ou null se nenhuma linha foi atualizada
        return updatedRows ? updatedUser : null;
    }

    async deleteUser(id) {
        return this.user.destroy({ where: { id } });
    }
}
