import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    const key = 'id'
    await User.updateOrCreateMany(key, [
      {
        id: 1,
        username: 'Miguel',
        email: 'miguel@adonis.js',
        password: 'admin'
      },
      {
        id: 2,
        username: 'Pedro',
        email: 'pedro@adonis.js',
        password: 'admin'
      }
    ])
  }
}
