const usersService = require('../services/users')

async function verifyUser(req, res, next) {
    const userId = req.headers['userid']
    if (!userId) {
        res.status(401).end();
        return
    }
    const user = await usersService.getUser(userId);

    if (user) {
        req.user = user;
        next();
    } else {
        res.status(401).end();
        return;
    }

}

module.exports = {
    verifyUser
}