async function Rgb(req, res){
  var base = Math.floor( 0x100000000 * Math.random())

  res.json({
    "rgb": 'rgb('  + (base >> 16 & 255) + ',' + (base >> 8 & 255) + ',' + (base & 255) + ')'
  })
}
export default Rgb