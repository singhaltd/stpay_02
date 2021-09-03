import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Refgen extends BaseModel {
  public static table = 'unique_sr'
  @column({ isPrimary: true, columnName: 'rec_sr' })
  public unique_sr: number
  @column({ columnName: 'cod' })
  public cod: String

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
