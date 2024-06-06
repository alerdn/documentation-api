import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import ClienteService from "App/Services/ClienteService";

export default class ClientesController {
  /**
   * @swagger
   * /clientes:  
   *   get:  
   *     summary: Retorna a lista de clientes
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
