import { dummyMessage } from '../services/dummy.service.js';

class Dummy {
    message: string
}

const dummy = (req: any, res: any, next: any) => {
    const dummy: Dummy = new Dummy();
    dummy.message = dummyMessage().message;

    res.status(200);
    res.json({ message: dummy.message });
};

export default dummy;