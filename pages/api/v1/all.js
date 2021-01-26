async function All(req, res){
  var base = Math.floor( 0x100000000 * Math.random())

  res.json({
    "hex": '#' + ('00000'   + base.toString(16)).slice(-6).toUpperCase(),
    "hexa": '#' + ('0000000' + base.toString(16)).slice(-8).toUpperCase(),
    "rgb": 'rgb('  + (base >> 16 & 255) + ',' + (base >> 8 & 255) + ',' + (base & 255) + ')',
    "rgba": 'rgba(' + (base >> 16 & 255) + ',' + (base >> 8 & 255) + ',' + (base & 255) + ',' + ((base >> 24 & 255)/255).toFixed(1) + ')'
  })
}
export default All