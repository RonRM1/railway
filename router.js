const router = require("express").Router();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

router.use('/', indexRouter);
router.use('/users', usersRouter);

module.exports = router;