module.exports.dummyMessage = (req, res, next) => {
    res.status(200);
    res.json({message: 'Dummy api endpoint.'});
};