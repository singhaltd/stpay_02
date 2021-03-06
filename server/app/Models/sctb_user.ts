import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import {
  column,
  beforeSave,
  BaseModel,
} from '@ioc:Adonis/Lucid/Orm'

export default class sctb_user extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string
  @column({ serializeAs: null })
  public username: string
  @column()
  public staff_id: string
  @column()
  public fullname: string
  @column()
  public description: string

  @column()
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(sctbUser: sctb_user) {
    if (sctbUser.$dirty.password) {
      sctbUser.password = await Hash.make(sctbUser.password)
    }
  }
}
