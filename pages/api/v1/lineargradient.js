import cors from '../../../lib/cors'

async function LinearGradientRGB(req, res){
  
  await cors(req, res)
  
  var base = Math.floor( 0x100000000 * Math.random())
  var base2 = Math.floor( 0x100000000 * Math.random())

  res.json({
    "linear-gradient-hex": `linear-gradient(${'#' + ('00000'   + base.toString(16)).slice(-6).toUpperCase()}, ${'#' + ('00000'   + base2.toString(16)).slice(-6).toUpperCase()})`,
    "linear-gradient-hexa": `linear-gradient(${'#' + ('0000000' + base.toString(16)).slice(-8).toUpperCase()}, ${'#' + ('0000000' + base2.toString(16)).slice(-8).toUpperCase()})`,
    "linear-gradient-rgb": `linear-gradient(${'rgb('  + (base >> 16 & 255) + ',' + (base >> 8 & 255) + ',' + (base & 255) + ')'}, ${'rgb('  + (base2 >> 16 & 255) + ',' + (base2 >> 8 & 255) + ',' + (base2 & 255) + ')'})`,
    "linear-gradient-rgba": `linear-gradient(${'rgba(' + (base >> 16 & 255) + ',' + (base >> 8 & 255) + ',' + (base & 255) + ',' + ((base >> 24 & 255)/255).toFixed(1) + ')'}, ${'rgba(' + (base2 >> 16 & 255) + ',' + (base2 >> 8 & 255) + ',' + (base2 & 255) + ',' + ((base2 >> 24 & 255)/255).toFixed(1) + ')'})`
  })
}
export default LinearGradientRGB
