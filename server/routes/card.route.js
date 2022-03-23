import express from 'express';
import cardController from '../controllers/card.controller';


const router = express.Router();

router.get('/list_Vcard',
    cardController.list_Vcard);

router.post('/create_Vcard',
// You can do some validations here
    cardController.create_Vcard);

router.post('/fund_Vcard',
// You can do some validations here
    cardController.fund_Vcard);

router.post('/pay',
// You can do some validations here
    cardController.pay_Vcard);


export default router;
