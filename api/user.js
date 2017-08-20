var express = require('express');
var router = express.Router();
var userController = require('./userController.js');

router.post('/login', function(req, res) {
    userController.login(req, res);
});

router.post('/logout', function(req, res) {
    userController.logout(req, res);
});

router.get('/projectlist', function(req, res) {
    userController.projectlist(req, res);
});

router.get('/volunteerlist', function(req, res) {
    userController.volunteerlist(req, res);
});

router.get('/companyprofile', function(req, res) {
    userController.companyprofile(req, res);
});

router.get('/volunteerprofile', function(req, res) {
    userController.volunteerprofile(req, res);
});

router.get('/projectprofile', function(req, res) {
    userController.projectprofile(req, res);
});

router.put('/updateprofile', function(req, res) {
    userController.projectprofile(req, res);
});



module.exports = router;