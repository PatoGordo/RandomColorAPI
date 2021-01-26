async function Hexa(req, res){
  var base = Math.floor( 0x100000000 * Math.random())

  res.json({  
    "hexa": '#' + ('0000000' + base.toString(16)).slice(-8).toUpperCase()
  })
}
export default Hexa