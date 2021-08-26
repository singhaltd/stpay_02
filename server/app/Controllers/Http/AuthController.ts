import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import sctb_user from 'App/Models/sctb_user'
export default class AuthController {

    public async login({ auth, request, response }: HttpContextContract) {
        const email = request.input('email')
        const password = request.input('password')
        /*
        | varidation
        |
        */
        const bodyReq = schema.create({
            email: schema.string({ trim: true }),
            password: schema.string({ escape: true })
        })
        const payload = await request.validate({ schema: bodyReq })
        try {
            const token = await auth.use('api').attempt(payload.email, payload.password)
            return token
        } catch {
            return response.badRequest('Invalid credentials')
        }
    }



    public async register({ request, response }: HttpContextContract) {
        const { password, email } = request.all()
        /*
        | varidation
        |
        */
        const bodyReq = schema.create({
            // username: schema.string({ trim: true }),
            password: schema.string({ escape: true }),
            email: schema.string({ escape: true })
        })
        const payload = await request.validate({ schema: bodyReq })
        try {
            const token = await sctb_user.create(payload)
            return token
        } catch (e) {
            return response.badRequest(e)
        }
    }
    public async uprofile({ auth, response }: HttpContextContract) {
        try {
            const result = await auth.use('api').authenticate()
            return result
        } catch (e) {
            return response.badRequest(e)
        }
    }
    public async logout({ auth, response }: HttpContextContract) {
        try {
            const result = await auth.use('api').revoke()
            return result
        } catch (e) {
            return response.badRequest(e)
        }
    }
}
