import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Response {
  public async handle({ request, response }: HttpContextContract) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    console.log(`-> ${request.method()}: ${request.url()}`)
      return response
  }
}
