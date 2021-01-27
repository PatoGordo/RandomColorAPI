import cors from '../../../lib/cors'

async function Hex(req, res){

  await cors(req, res)

  var base = Math.floor( 0x100000000 * Math.random())

  res.json({
    "hex": '#' + ('00000'   + base.toString(16)).slice(-6).toUpperCase()
  })
}
export default Hex