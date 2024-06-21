const express= require('express');
const app = express();
const {addTrek,getTrek,deleteTrek} = require('../controller/trekController');
const checkAuth = require('../middleware/checkauth');

const router = express.Router();

router.post('/',addTrek);
router.get('/',checkAuth,getTrek);
router.delete('/:id',deleteTrek)

module.exports = router;