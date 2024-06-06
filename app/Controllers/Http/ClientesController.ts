import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import ClienteService from "App/Services/ClienteService";

export default class ClientesController {
    /**
     * @swagger
     * tags:
     *  name: Clientes
     *  description: Operações relacionadas a clientes
     */
  public async store({ request }: HttpContextContract) {
    return ClienteService.store();
  }
}
