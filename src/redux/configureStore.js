/**
 * configureStore 是生成 Redux Store 的关键文件.
 * 根据 process.env.NODE_ENV 判断调用的Store.
 */

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}
