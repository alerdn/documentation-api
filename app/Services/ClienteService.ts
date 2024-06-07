import Cliente from "App/Models/Cliente";

export default class ClienteService {
  /**
   * Cria um usuário no banco de dados
   * @param {Cliente} cliente
   * @returns {Promise<Cliente>}
   */
  public static async store(cliente) {
    return await Cliente.create(cliente);
  }
}
