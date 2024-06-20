const express= require('express');
const app = express();
const {addTrek,getTrek,deleteTrek} = require('../controller/trekController');

const router = express.Router();

router.post('/',addTrek);
router.get('/',getTrek);
router.delete('/:id',deleteTrek)

module.exports = router;