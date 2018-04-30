const dummyService = require('../services/dummy.service.js');

const dummyResolver = {
    Query: {
        dummy() {
            const result = dummyService.dummyMessage();
            
            return { message: result.message };
        }
    }
}

module.exports = dummyResolver;