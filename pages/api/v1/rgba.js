async function Rgba(req, res){
  var base = Math.floor( 0x100000000 * Math.random())

  res.json({
    "rgba": 'rgba(' + (base >> 16 & 255) + ',' + (base >> 8 & 255) + ',' + (base & 255) + ',' + ((base >> 24 & 255)/255).toFixed(1) + ')'
  })
}
export default Rgba