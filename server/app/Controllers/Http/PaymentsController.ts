import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Ulity from "App/Middleware/Ulity";
const ulity = new Ulity();
export default class PaymentsController {
    public async payment({ auth, request, response }: HttpContextContract) {
        const { code, instid, billno, amount, ccy, acno, remark } = request.all();
        const key = await ulity.refrrn(code);
        const bodyReq = schema.create({
            code: schema.string({ trim: true }),
            instid: schema.string({ escape: true }),
            billno: schema.string({ escape: true }),
            amount: schema.string({ escape: true }),
            ccy: schema.string({ escape: true }),
            acno: schema.string({ escape: true }),
            // remark: schema.string({}, [
            //     rules.alpha({
            //         allow: ['']
            //     }),
            // ]),
        })
        
        const payload = await request.validate({ schema: bodyReq })


        return key

    }
}
