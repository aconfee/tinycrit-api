// TODO: I'm pretty sure the entire concept of controllers dies with GraphQL. Use resolvers instead.

const dummyService = require('../services/dummy.service.js');

module.exports.dummyMessage = (req, res, next) => {
    const obj = dummyService.dummyMessage();

    res.status(200);
    res.json({ message: obj.message });
};