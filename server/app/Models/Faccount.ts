import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Faccount extends BaseModel {
  public static table = 'acc_detail'
  @column({ isPrimary: true, columnName: 'CUSTACNO' })
  public custacno: number
  @column({ columnName: 'CUSTNO' })
  public custno: string
  @column({ columnName: 'CCY' })
  public ccy: string
  @column({ columnName: 'ACC_DESC' })
  public fullname: string
  @column({ columnName: 'STAT' })
  public stat: string
  @column({ columnName: 'ACCOUNTCLASS' })
  public accountclass: string
  @column({ columnName: 'CASATYPE' })
  public casatype: string
  @column({ columnName: 'MAKER_ID' })
  public maker_id: string
  @column({ columnName: 'MOD_UID' })
  public mod_uid: string
  @column({ columnName: 'PAYMENT_LINK' })
  public payment_link: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
