import rave from '../config/flutterwave_init';

class CardController {
   
    static async create_Vcard(req, res) {
        try {
            const response = await rave.VirtualCards.create(req.body);
            return res.status(201).json({
                status: 201,
                data: {
                    ...response
                },
            });
        } catch (error) {
            // handle error here
            console.log(error)
        }
    }

    static async fund_Vcard(req, res) {
        try {
            const response = await rave.VirtualCards.fund(req.body);
            
            return res.status(200).json({
                status: 200,
                data: {
                    ...response
                },
            });
        } catch (error) {
             // handle error here
            console.log(error)
        }
    }

    static async list_Vcard(req, res) {
        try {
            const payload = {
                page:1
            };
            const response = await rave.VirtualCards.list(payload);
		
            return res.status(200).json({
                status: 200,
                data: {
                    ...response
                },
            });
        } catch (error) {
             // handle error here
            console.log(error)
        }
    }

    static async pay_Vcard(req, res) {
        try {
            const resp = await rave.Card.charge(req.body)
            const response = await rave.Card.validate({
                "transaction_reference":resp.body.data.flwRef,
                "otp":12345 // your otp code
            })
            
            return res.status(200).json({
                status: 200,
                data: {
                    ...response.body
                },
            });
        } catch (error) {
             // handle error here
            console.log(error)
        }
    }
}

export default CardController;
