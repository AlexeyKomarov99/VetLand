const {Router} = require('express');
const router = new Router;

const userAuth = require('./userAuth');
const client = require('./client');
const manager = require('./manager');
const doctor = require('./doctor');
const admin = require('./admin');

router.use('/auth', userAuth);
router.use('/client', client);
router.use('/manager', manager);
router.use('/doctor', doctor);
router.use('/admin', admin);

module.exports = router;