import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class TxAuth extends BaseModel {
  public static table = 'txn_rec_auth'
  @column({ isPrimary: true, columnName: 'REC_REF_NO' })
  public refno: String

  @column({ columnName: 'TXN_MSGID' })
  public msgid: String
  @column({ columnName: 'TXN_REQ_TYPE' })
  public reqtype: String
  @column({ columnName: 'TXN_DESC' })
  public description: String
  @column({ columnName: 'TXN_BILNO' })
  public billno: String
  @column({ columnName: 'TXN_CCY' })
  public ccy: String
  @column({ columnName: 'TXN_BILDESC' })
  public bill_desc: String
  @column({ columnName: 'TXN_BILAMT' })
  public bill_amount: String
  @column({ columnName: 'ACCNO' })
  public custacno: String
  @column({ columnName: 'CUSTNO' })
  public custno: String
  @column({ columnName: 'ACCY' })
  public accy: String
  @column({ columnName: 'TRN_RRN' })
  public rrn: String
  @column({ columnName: 'SOURCE_TXN' })
  public sourctxn: String
  @column({ columnName: 'SOURCE_FN' })
  public sourcfn: String
  @column({ columnName: 'BLDATE' })
  public bildate: String
  @column({ columnName: 'TXN_RESP_COD' })
  public rescode: String
  @column({ columnName: 'TXN_RESP_DESC' })
  public resdesc: String
  @column({ columnName: 'MAKER_ID' })
  public maker: String
  @column({ columnName: 'AUTH_ID' })
  public auth: String
  @column({ columnName: 'TXN_DATE' })
  public txndate: String
  @column({ columnName: 'CUST_BRANCH' })
  public custbranch: String
  @column({ columnName: 'BLCUST_NAME' })
  public fullname: String
  @column({ columnName: 'BILOFSACC' })
  public offsetacc: String
  @column({ columnName: 'BILDESC2' })
  public desc1: String
  @column({ columnName: 'BILDESC3' })
  public desc2: String
  @column({ columnName: 'PRE_AMOUNT' })
  public befamount: String
  @column({ columnName: 'TYPEPAID' })
  public paidtype: String
  @column({ columnName: 'AMT_CCY' })
  public txn_ccy: String
  @column({ columnName: 'RATE_EX' })
  public ratex: String
  @column({ columnName: 'RECID' })
  public recid: String
  @column({ columnName: 'AC_DESC' })
  public acdesc: String

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
