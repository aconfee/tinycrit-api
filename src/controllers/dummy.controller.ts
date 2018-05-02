const dummyService = require('../services/dummy.service.js');

module.exports.dummyMessage = (req: any, res: any, next: any) => {
    const obj: any = dummyService.dummyMessage();
    const message: string = obj.message;

    res.status(200);
    res.json({ message });
};