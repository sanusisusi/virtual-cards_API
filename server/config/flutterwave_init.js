import Ravepay from "flutterwave-node";
import dotenv from 'dotenv';

//using flutterwave-node package to get our public key & secret key

dotenv.config();

const rave = new Ravepay(process.env.PUBLICK_KEY, process.env.SECRET_KEY, false);

export default rave;
