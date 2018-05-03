import DummyService, { Dummy } from '../services/dummy.service';
import { Response, Request } from 'express';

const getDummy = (req: Request, res: Response, next: any) => {

    // DI is not set up for controllers since using GraphQL and will likely depricate this.
    const dummyService = new DummyService();

    const dummy: Dummy = dummyService.findDummy();

    if(!dummy){
        res.status(500);
        res.json({ message: "error" });
    }

    res.status(200);
    res.json(dummy);
};

export default getDummy;