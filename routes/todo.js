const express = require('express');
import { create, get, removeTodo } from ('../controller/index.js');
const router = express.Router();

router.post('/todo/create', create);
router.get('/todos', get);
router.delete('/todo/:id', removeTodo);

module.exports = router;
