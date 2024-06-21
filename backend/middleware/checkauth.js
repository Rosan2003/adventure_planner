const jwt = require('jsonwebtoken');

function checkAuth(req,res,next){
    try {
        let {authorization} = req.body;
        if(!authorization){
            return res.status(401).send({error: "token not found" });
        }
        let token = authorization.split(" ")[1];
        let _id = jwt.verify(token, 'SECRETKEY');
        req.user=_id;
        next();
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = checkAuth;