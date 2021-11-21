const { Router } = require('express');
const router = Router();

const { renderIndex, sendForm } = require('./../controllers/index.controllers.js');

router.get('/', renderIndex);

router.post('/', sendForm);

module.exports = router;
