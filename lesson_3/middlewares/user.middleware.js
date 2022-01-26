const chechUserValidity = (req, res, next) => {
    try{
        const user = req.body
        if (!user.email || !user.password) throw new Error('User is not valid');
        next()
    } catch (e) {
        res.json(e.message);
    }

};

module.exports = {
    chechUserValidity
}