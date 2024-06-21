const jwt = require('jsonwebtoken');

function getToken(_id){
    let token = jwt.sign({_id},"SECRETKEY");
    return token;
}

module.exports=getToken;