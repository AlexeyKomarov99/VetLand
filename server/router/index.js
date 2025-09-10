const {Router} = require('express');
const router = new Router;

const userAuth = require('./userAuth');
const client = require('./client');
const staff = require('./staff');
const doctor = require('./doctor');
const volunteer = require('./volunteer');
const transaction = require('./transaction');
const public = require('./public');

router.use('/auth', userAuth);
router.use('/client', client);
router.use('/staff', staff);
router.use('/doctor', doctor);
router.use('/volunteer', volunteer);
router.use('/transaction', transaction);
router.use('/public', public);

module.exports = router;