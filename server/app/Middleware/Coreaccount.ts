import Env from '@ioc:Adonis/Core/Env'
const https = require("https");
var parser = require("fast-xml-parser");
var he = require("he");

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
export default class Coreaccount {
  public async handle(data) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    const STR_REQ = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:fcub="http://fcubs.ofss.com/service/FCUBSAccService">\
                            <soapenv:Header/>\
                            <soapenv:Body>\
                            <fcub:QUERYCUSTACCBALANCE_IOFS_REQ>\
                                <fcub:FCUBS_HEADER>\
                                    <fcub:SOURCE>GWDEXSYS</fcub:SOURCE>\
                                    <fcub:UBSCOMP>FCUBS</fcub:UBSCOMP>\
                                    <fcub:USERID>GWSYSTEM01</fcub:USERID>\
                                    <fcub:BRANCH>${data.branch}</fcub:BRANCH>\
                                    <fcub:SERVICE>FCUBSAccService</fcub:SERVICE>\
                                    <fcub:OPERATION>QueryCustAccBalance</fcub:OPERATION>\
                                    <fcub:SOURCE_OPERATION>QueryCustAccBalance</fcub:SOURCE_OPERATION>\
                                    <fcub:MSGSTAT>SUCCESS</fcub:MSGSTAT>\
                                    <fcub:ADDL>\
                                        <fcub:PARAM>\
                                        <fcub:NAME>?</fcub:NAME>\
                                        <fcub:VALUE>?</fcub:VALUE>\
                                        </fcub:PARAM>\
                                    </fcub:ADDL>\
                                </fcub:FCUBS_HEADER>\
                                <fcub:FCUBS_BODY>\
                                    <fcub:Acvws-Acdcbird-Cust-Account-IO>\
                                        <fcub:CUSTACNO>${data.accno}</fcub:CUSTACNO>\
                                    </fcub:Acvws-Acdcbird-Cust-Account-IO>\
                                </fcub:FCUBS_BODY>\
                            </fcub:QUERYCUSTACCBALANCE_IOFS_REQ>\
                            </soapenv:Body>\
                        </soapenv:Envelope>`;
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
