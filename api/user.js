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

router.put('/updatevolunteerprofile', function(req, res) {
    userController.updatevolunteerprofile(req, res);
});

router.put('/updatecompanyprofile', function(req, res) {
    userController.updatecompanyprofile(req, res);
});

router.put('/updateprojectprofile', function(req, res) {
    userController.updateprojectprofile(req, res);
});


router.put('/requestproject', function(req, res) {
    userController.requestproject(req, res);
});

router.put('/assignproject', function(req, res) {
    userController.assignproject(req, res);
});

router.put('/unassignproject', function(req, res) {
    userController.unassignproject(req, res);
});

router.put('/completeproject', function(req, res) {
    userController.completeproject(req, res);
});





module.exports = router;