import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CoreAccount from 'App/Middleware/Coreaccount'
import { schema } from '@ioc:Adonis/Core/Validator'
import Faccount from 'App/Models/Faccount'
export default class AccountsController {
    public async detail({ auth, request, response }: HttpContextContract) {
        const result = null
        const { custacno } = request.all()
        const Coreac = new CoreAccount()
        const bodyReq = schema.create({
            custacno: schema.string({ escape: true })
        })
        const payload = await request.validate({ schema: bodyReq })
        return new Promise(async function (resolve, reject) {
            if (await auth.check()) {
                await Coreac.handle({ branch: '001', accno: payload.custacno }).then(res => {
                    resolve(response.status(res[0].status).send(res[0]))
                })
            }
        })
    }
    public async store({ auth, request }: HttpContextContract) {
        const { custno, custacno, ccy, accountclass, fullname, stat, casatype, payment_link } = request.all()
        const bodyReq = schema.create({
            custacno: schema.string({ escape: true }),
            custno: schema.string({ escape: true }),
            ccy: schema.string({ escape: true }),
            accountclass: schema.string({ escape: true }),
            fullname: schema.string({ escape: true }),
            stat: schema.string({ escape: true }),
            casatype: schema.string({ escape: true }),
            payment_link: schema.string({ escape: true }),
        })
        const payload = await request.validate({ schema: bodyReq })
        return await Faccount.create(payload)
    }
    public async status({ auth, request }: HttpContextContract) {
        const { custacno, stat } = request.all()
        const bodyReq = schema.create({
            custacno: schema.string({ escape: true }),
            stat: schema.string({ escape: true }),
        })
        const payload = await request.validate({ schema: bodyReq })
        return await Faccount.query().where('custacno', payload.custacno).update({ stat: payload.stat })
    }
    public async retries({ auth }: HttpContextContract) {
        return await Faccount.query().paginate(1, 20)
    }
}
