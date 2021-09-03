import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
const https = require("https");
var parser = require("fast-xml-parser");
var he = require("he");
const moment = require("moment");
const axios = require('axios')
var options = {
  attributeNamePrefix: "@_",
  attrNodeName: "attr", //default is 'false'
  textNodeName: "#text",
  ignoreAttributes: true,
  ignoreNameSpace: false,
  allowBooleanAttributes: false,
  parseNodeValue: true,
  parseAttributeValue: false,
  trimValues: true,
  cdataTagName: "__cdata", //default is 'false'
  cdataPositionChar: "\\c",
  parseTrueNumberOnly: true,
  arrayMode: false, //"strict"
  attrValueProcessor: (val, attrName) =>
    he.decode(val, { isAttributeValue: true }), //default is a=>a
  tagValueProcessor: (val, tagName) => he.decode(val), //default is a=>a
  stopNodes: ["parse-me-as-string"],
};
export default class Upayment {
  public async handle(key, product, payments, account) {
    const STR_REQ = `<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
        <soap:Body>\
        <ns1:CREATEUPTRANSACTION_FSFS_REQ xmlns:ns1="http://fcubs.ofss.com/service/FCUBSUPService">\
        <ns1:FCUBS_HEADER>\
        <ns1:SOURCE>GWDEXSYS</ns1:SOURCE>\
        <ns1:UBSCOMP>FCUBS</ns1:UBSCOMP>\
        <ns1:USERID>GWSYSTEM02</ns1:USERID>\
        <ns1:ENTITY>ENTITY_ID1</ns1:ENTITY>\
        <ns1:BRANCH>001</ns1:BRANCH>\
        <ns1:SERVICE>FCUBSUPService</ns1:SERVICE>\
        <ns1:OPERATION>CreateUPTransaction</ns1:OPERATION>\
        </ns1:FCUBS_HEADER>\
        <ns1:FCUBS_BODY>\
        <ns1:Transaction-Details>\
        <ns1:XREF>${key}</ns1:XREF>\
        <ns1:PRD>${product.code}</ns1:PRD>\
        <ns1:INSTID>${product.instid}</ns1:INSTID>\
        <ns1:BILLNO>${payments.billno}</ns1:BILLNO>\
        <ns1:BILLDT>${moment(new Date()).format("YYYY-MM-DD")}</ns1:BILLDT>\
        <ns1:BAMT>${payments.amount}</ns1:BAMT>\
        <ns1:BCCY>${payments.ccy}</ns1:BCCY>\
        <ns1:CUSTACNO>${account.acno}</ns1:CUSTACNO>\
        <ns1:ACCCY>${account.ccy}</ns1:ACCCY>\
        <ns1:CONSNO>${account.custno}</ns1:CONSNO>\
        <ns1:TXNCCY>${payments.ccy}</ns1:TXNCCY>\
        <ns1:TXNDATE>${moment(new Date()).format("YYYY-MM-DD")}</ns1:TXNDATE>\
        <ns1:TXNBRN></ns1:TXNBRN>\
        <ns1:CUSTBRN>${account.branch}</ns1:CUSTBRN>\
        <ns1:NARRATIVE>${payments.billno} | ${payments.cliname
      } | Bill Payment</ns1:NARRATIVE>\
        <ns1:CHCKDT></ns1:CHCKDT>\
        </ns1:Transaction-Details>\
        </ns1:FCUBS_BODY>\
        </ns1:CREATEUPTRANSACTION_FSFS_REQ>\
        </soap:Body>\
        </soap:Envelope>`;
    const messdata = [];
    try {
      await axios.post(
        Env.get("API_URL_FEXC") + "FCUBSAccService/FCUBSAccService",
        STR_REQ,
        {
          headers: { "Content-Type": "text/xml" },
          httpsAgent: new https.Agent({ rejectUnauthorized: false }),
        }
      )
        .then((res) => {
          var jsonObj = parser.parse(res.data, options, true);
          messdata.push({
            status: jsonObj['S:Envelope']['S:Body']['QUERYCUSTACCBALANCE_IOFS_RES']['FCUBS_BODY']['FCUBS_ERROR_RESP'] ? '201' : '200',
            data: jsonObj['S:Envelope']['S:Body']['QUERYCUSTACCBALANCE_IOFS_RES']['FCUBS_BODY'],
          });
        })
        .catch((err) => {
          messdata.push({
            status: "500",
            param1: STR_REQ,
            data: err,
          });
        });
    } catch (e) {
      messdata.push({
        status: "500",
        param1: STR_REQ,
        data: e,
      });
    }
    return messdata;
  }

}
