async function LinearGradientRGB(req, res){
  var base = Math.floor( 0x100000000 * Math.random())
  var base2 = Math.floor( 0x100000000 * Math.random())

  res.json({
    "linear-gradient": `linear-gradient(${'rgb('  + (base >> 16 & 255) + ',' + (base >> 8 & 255) + ',' + (base & 255) + ')'}, ${'rgb('  + (base2 >> 16 & 255) + ',' + (base2 >> 8 & 255) + ',' + (base2 & 255) + ')'})`
  })
}
export default LinearGradientRGB
