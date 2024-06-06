import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import ClienteService from "App/Services/ClienteService";

export default class ClientesController {
  /**
   * @swagger
   * tags:
   *   name: Users
   *   description: Operações relacionadas a usuários
   */

  /**
   * @swagger
   * /users:
   *   get:
   *     summary: Retorna a lista de usuários
   *     tags: [Users]
   *     responses:
   *       200:
   *         description: Lista de usuários
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/User'
   */

  /**
   * @swagger
   * components:
   *   schemas:
   *     User:
   *       type: object
   *       required:
   *         - id
   *         - name
   *       properties:
   *         id:
   *           type: integer
   *           description: O ID do usuário
   *         name:
   *           type: string
   *           description: O nome do usuário
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
