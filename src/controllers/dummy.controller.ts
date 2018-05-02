import { dummyServiceSingleton } from '../services/dummy.service';

const dummyMessage = (req: any, res: any, next: any) => {
    const obj = dummyServiceSingleton.dummyMessage();

    res.status(200);
    res.json({ message: obj.message });
};

export default dummyMessage;