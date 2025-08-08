"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _appjs = require('./app.js'); var _appjs2 = _interopRequireDefault(_appjs);

const PORT = process.env.PORT || 3000;

_appjs2.default.listen(PORT, () => {
  console.log(`Servidor rodando no ip: http://localhost:${PORT}`);
});
