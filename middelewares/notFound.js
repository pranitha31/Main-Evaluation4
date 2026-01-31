module.exports = (req, res)={
    res.status(404).json({error:'This request not found'});

};