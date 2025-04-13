import { verifyToken } from "../utils/token.js";

function isLoggedInSession(req,res,next){
    const user  = req.session.user;
    if(!user){
        return res.redirect("/login?error=You+are+not+logged+in")
    }
    next();
}
function isLoggedInAPI(req,res,next){
    const authorization  = req.headers.authorization;
    console.log("authorization",authorization);
    if(!authorization){
        res.status(401).json({error:"Kai does not allow you to pass"});
    }
    let token = authorization.split(" "); 
    token = token.pop();
    const result = verifyToken(token);
    console.log("token verified",result);
    if(result){
        req.user = {
            user_id: result.user_id,
            role: result.role
        }
        next();
    }else{
        res.status(401).json({error:"Kai does not allow you to pass"});
    }
}


export {
    isLoggedInSession,
    isLoggedInAPI
}