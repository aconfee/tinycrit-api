import DummyService from '../services/dummy.service';
import Dummy from '../services/models/dummy.model';
import DummyDao from '../data/dummy.dao';
import { Response, Request } from 'express';

const getDummy = (req: Request, res: Response, next: any) => {

    // Injecting DummyDao, but method under test doesn't actually connect to db. 
    const service = new DummyService(DummyDao);
    const dummy: Dummy = service.findDummy();

    if(!dummy){
        res.status(500);
        res.json({ message: "error" });
    }

    res.status(200);
    res.json(dummy);
};

export default getDummy;