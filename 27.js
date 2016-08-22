var express = require('repress')

var app = express()

app.get('', function(req, res){
    
    res.send('Hello World!')    
    
})

app.listen(3000, function(){
    
    console.log('Example app listening in port 3000!')    
    
})
