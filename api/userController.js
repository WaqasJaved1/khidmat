/**
 * groupController.js
 *
 * @description :: Server-side logic for managing groups.
 */

var pool = require('../../database/pool');
var mysql = require('mysql');



function convertDateTime(data) {
    return data.replace('T', ' ').replace('Z', '');
}

function loginQuery(){
    return "";
}



module.exports = {

    login: function(req, res) {
        pool.query(loginQuery(req.body), function(error, results, fields) {
            if (error) {
                console.log(error);
                return res.json({ 'status': 1000, 'message': error.code });
            }

            return res.json({ 'status': 200, 'message': results });
        });

    },

    logout: function(req, res) {
        pool.query(getListQuery(), function(error, results, fields) {
            if (error) {
                console.log(error);
                return res.json({ 'status': 1000, 'message': error.code });
            }

            return res.json({ 'status': 200, 'message': results });
        });
    },

    projectlist:function(req, res){
        pool.query(getCustomerQuery(req.params.id), function(error, results, fields) {
            if (error) {
                console.log(error);
                return res.json({ 'status': 1000, 'message': error.code });
            }

            return res.json({ 'status': 200, 'message': results });
        });
    },

    volunteerlist: function(req, res) {
        pool.query(deleteuserQuery(req.params.id), function(error, results, fields) {
            if (error) {
                console.log(error);
                return res.json({ 'status': 1000, 'message': error.code });
            }

            return res.json({ 'status': 200, 'message': results });
        });
    },

    companyprofile:function(req,res){
        pool.query(updateuserQuery(req.body, req.params.id), function(error, results, fields) {
            if (error) {
                console.log(error);
                return res.json({ 'status': 1000, 'message': error.code });
            }

            return res.json({ 'status': 200, 'message': results });
        });
    },

    projectprofile:function(req,res){
        pool.query(updateuserQuery(req.body, req.params.id), function(error, results, fields) {
            if (error) {
                console.log(error);
                return res.json({ 'status': 1000, 'message': error.code });
            }

            return res.json({ 'status': 200, 'message': results });
        });
    }
    ,

    volunteerprofile:function(req,res){
        pool.query(updateuserQuery(req.body, req.params.id), function(error, results, fields) {
            if (error) {
                console.log(error);
                return res.json({ 'status': 1000, 'message': error.code });
            }

            return res.json({ 'status': 200, 'message': results });
        });
    }

    ,

    updatevolunteerprofile:function(req,res){
        pool.query(updateuserQuery(req.body, req.params.id), function(error, results, fields) {
            if (error) {
                console.log(error);
                return res.json({ 'status': 1000, 'message': error.code });
            }

            return res.json({ 'status': 200, 'message': results });
        });
    }


    ,

    updatecompanyprofile:function(req,res){
        pool.query(updateuserQuery(req.body, req.params.id), function(error, results, fields) {
            if (error) {
                console.log(error);
                return res.json({ 'status': 1000, 'message': error.code });
            }

            return res.json({ 'status': 200, 'message': results });
        });
    }


    ,

    updateprojectprofile:function(req,res){
        pool.query(updateuserQuery(req.body, req.params.id), function(error, results, fields) {
            if (error) {
                console.log(error);
                return res.json({ 'status': 1000, 'message': error.code });
            }

            return res.json({ 'status': 200, 'message': results });
        });
    },

    requestproject:function(req,res){
        pool.query(updateuserQuery(req.body, req.params.id), function(error, results, fields) {
            if (error) {
                console.log(error);
                return res.json({ 'status': 1000, 'message': error.code });
            }

            return res.json({ 'status': 200, 'message': results });
        });
    },

    assignproject:function(req,res){
        pool.query(updateuserQuery(req.body, req.params.id), function(error, results, fields) {
            if (error) {
                console.log(error);
                return res.json({ 'status': 1000, 'message': error.code });
            }

            return res.json({ 'status': 200, 'message': results });
        });
    },

    unassignproject:function(req,res){
        pool.query(updateuserQuery(req.body, req.params.id), function(error, results, fields) {
            if (error) {
                console.log(error);
                return res.json({ 'status': 1000, 'message': error.code });
            }

            return res.json({ 'status': 200, 'message': results });
        });
    }

    ,

    completeproject:function(req,res){
        pool.query(updateuserQuery(req.body, req.params.id), function(error, results, fields) {
            if (error) {
                console.log(error);
                return res.json({ 'status': 1000, 'message': error.code });
            }

            return res.json({ 'status': 200, 'message': results });
        });
    }

}



