import express, { Router } from 'express';
var router: Router = express.Router();
import dummyMessage from '../controllers/dummy.controller';

router.get('/dummy', dummyMessage);

/* GET home page. */
router.get('/', (req, res, next) => {
  res.status(200);
  res.json({message: 'Working!'});
});

export default router;
