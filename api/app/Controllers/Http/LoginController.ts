// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '../../Models/User';

export default class LoginController {
  public async login({ auth, request, response }) {
    let data = request.all()
    const info = (await User.findBy('email', data.email))
    if (!info) {
      response.status(404).send('Not found')
    } else {
      const token = await auth.use('api').attempt(info.email, data.password)
      response.send({
        info,
        token
      })
    }
  }
}
