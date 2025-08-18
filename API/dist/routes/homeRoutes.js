"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);

var _HomeControllerjs = require('../controllers/HomeController.js'); var _HomeControllerjs2 = _interopRequireDefault(_HomeControllerjs);

const router = _express2.default.Router();

router.get('/', _HomeControllerjs2.default.index);

exports. default = router;
