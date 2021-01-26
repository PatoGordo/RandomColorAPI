async function LinearGradientHEX(req, res){
  var base = Math.floor( 0x100000000 * Math.random())
  var base2 = Math.floor( 0x100000000 * Math.random())
  
  res.json({
    "linear-gradient": `linear-gradient(${'#' + ('00000'   + base.toString(16)).slice(-6).toUpperCase()}, ${'#' + ('00000'   + base2.toString(16)).slice(-6).toUpperCase()})`
  })
}
export default LinearGradientHEX
