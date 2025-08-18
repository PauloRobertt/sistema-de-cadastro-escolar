"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);

var _TokenControllerjs = require('../controllers/TokenController.js'); var _TokenControllerjs2 = _interopRequireDefault(_TokenControllerjs);

const router = _express2.default.Router();

router.post('/', _TokenControllerjs2.default.store);

exports. default = router;
