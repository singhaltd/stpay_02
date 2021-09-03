import Refgen from 'App/Models/Refgen';
const moment = require('moment')
export default class Ulity {
  public async refrrn(prd) {
    var numpad = "000000";
    var rekey = "";
    // const sref = { cod: prd }
    // const refcreate = { cod: prd, rec_sr: rec_sr + 1 }
    try {
      const refincrea = new Refgen()
      refincrea.cod = prd
      refincrea.merge({
        cod: prd, rec_sr: parseInt(0+1)
      })
      // refincrea.rec_sr = parseInt(refincrea.$attributes["rec_sr"]) + 1;
      // await refincrea.save();

      // if (refincrea) {
      //   rekey = refincrea.$attributes["rec_sr"]
      // }
      return refincrea
    } catch (e) {
      // const refincrea = await Refgen.firstOrCreate(
      //   { cod: prd },
      //   { cod: prd, rec_sr: 0 }
      // );
      // refincrea.rec_sr = parseInt(refincrea.$attributes["rec_sr"]) + 1;
      // await refincrea.save();

      // if (refincrea) {
      //   rekey = refincrea.$attributes["rec_sr"]
      // }
    }
    // return (
    //   moment(new Date()).format("YY") +
    //   prd.trim().substring(0, 4) +
    //   numpad.substring(0, numpad.length - rekey.length) +
    //   parseInt(rekey)
    // );
  }
}
