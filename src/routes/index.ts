import express, { Router, Request, Response } from 'express';
var router: Router = express.Router();
import getDummy from '../controllers/dummy.controller';

router.get('/dummy', getDummy);

/* GET home page. */
router.get('/', (req: Request, res: Response, next) => {
  res.status(200);
  res.json({message: 'Working!'});
});

export default router;
