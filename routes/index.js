import express from 'express';
const router = express.Router();
import { registerController, loginController, userController, refreshController, productController } from '../controllers';
import auth from '../middlewares/auth';
import admin from '../middlewares/admin';

router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.get('/me', auth, userController.me);
router.post('/refresh', refreshController.refresh);
router.post('/logout', auth, loginController.logout);


router.post('/products/cart-items', productController.getProducts);

router.post('/products', [auth, admin], productController.store);
router.put('/products/:id', [auth, admin], productController.update);
router.delete('/products/:id', [auth, admin], productController.destroy);
router.get('/products', productController.index);
router.get('/products/:id', productController.show);



export default router;










// _id
// 6524f3317ab2447a0b24e29a
// name
// "neelu"
// email
// "22bca0230@gmail.com"
// password
// "$2b$10$kJNyT.wss5vAlA8MxcBIjOVBuoVPGTSUNXSycRQa6ZnQ4TozWYKoS"
// role
// "admin"
// createdAt
// 2023-10-10T06:46:09.480+00:00
// updatedAt
// 2023-10-10T06:46:09.480+00:00
// __v
// 0