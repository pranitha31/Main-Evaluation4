const rateLimite ={};
const WINDOW = 60000;
const LIMIT = 3;

const rateLimiter = (req, res, next) => {
    const ip = req.ip;
    const current = Date.now();

    if (!rateLimite[ip]) rateLimite[ip] =[];
    rateLimite[ip]=rateLimite[ip].filter(ts =>now - ts < WINDOW);
    if (rateLimite[ip].length >= LIMIT){
        return res.status(429).json({error : 'To many requests. Try later'});

    }
    rateLimite[ip].push(current);
    next();

};
module.exports = rateLimiter;