import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import sctb_user from 'App/Models/sctb_user'
const ActiveDirectory = require("activedirectory");
import Env from '@ioc:Adonis/Core/Env'
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



    public async loginAd({ auth, request, response }: HttpContextContract) {
        const username = request.input('username')
        const password = request.input('password')
        var config = {
            url: "ldap://" + Env.get("ADL_DOMAIN_URL", "stb.la"),
            baseDN: Env.get("ADL_BASE_DNS", "dc=stb,dc=la"),
            username:
                Env.get("ADL_USERNAME", "root") + "@" + Env.get("ADL_DOMAIN", "stb.la"),
            password: Env.get("ADL_PASSOWRD", "password"),
        };
        var ad = new ActiveDirectory(config);
        /*
        | varidation
        |
        */
        const bodyReq = schema.create({
            username: schema.string({ trim: true }),
            password: schema.string({ escape: true })
        })
        const payload = await request.validate({ schema: bodyReq })

        return new Promise((resolve, reject) => {
            ad.authenticate(payload.username + "@stb.la", payload.password, function (err, autht) {
                if (err) {
                    resolve(response.status(401).json({ error: true, code: '401', message: 'AUTH_FAIL' }))
                }
                if (autht) {
                    ad.findUser(payload.username, async function (err, user) {
                        if (err) {
                            resolve(response.status(201).json({error: true, status: 201, message: 'USER_NOT_FOUND' }))
                        }
                        const searchPayload = { email: user.mail, username: user.sAMAccountName }
                        const data_json = {
                            email: user.mail,
                            username: user.sAMAccountName,
                            fullname: user.displayName,
                            staff_id: user.employeeID,
                            password: payload.password,
                            description: user.description,
                        }
                        if (user) {
                            await sctb_user.updateOrCreate(searchPayload, data_json)
                            const token = await auth.use('api').attempt(payload.username, payload.password)
                            resolve(token)
                        }

                    })
                }
            })


        })
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
            return response.json({ user: result })
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
