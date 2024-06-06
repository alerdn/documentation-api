import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import ClienteService from "App/Services/ClienteService";

export default class ClientesController {
  /**
   * @swagger
   * /clientes:  
   *    post:
   *     description: Cadastra um usuário
   */
  public async store({ request }: HttpContextContract) {
    try {
      const { cliente } = request.all();
      return ClienteService.store(cliente);
    } catch (error) {
      throw error;
    }
  }
}
