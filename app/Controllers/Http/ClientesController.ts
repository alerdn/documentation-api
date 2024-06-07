import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import ClienteService from "App/Services/ClienteService";

export default class ClientesController {
  /**
   * @swagger
   * /clientes:
   *  post:
   *    description: Cadastrar cliente
   *    parameters:
   *      - name: pracaId
   *        in: query
   *      - name: etapaId
   *        in: query
   *    requestBody:
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *            properties:
   *              nome: 
   *                type: string
   *              email: 
   *                type: string
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
