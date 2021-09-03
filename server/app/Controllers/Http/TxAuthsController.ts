import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TxAuth from 'App/Models/TxAuth'

export default class TxAuthsController {
    public async transaction({ auth, request, response }: HttpContextContract) {
        try {
            const result = await TxAuth.query().paginate(1, 20)
            return response.status(200).json(result)
        } catch (e) { }
    }
}
