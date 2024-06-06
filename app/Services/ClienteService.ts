import Cliente from "App/Models/Cliente";

export default class ClienteService {
  /**
   * Cria um usuário no banco de dados
   */
  public static async store(cliente: Cliente) {
    return await Cliente.create(cliente);
  }
}
