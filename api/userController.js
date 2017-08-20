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

    list: function(req, res) {
        pool.query(getListQuery(), function(error, results, fields) {
            if (error) {
                console.log(error);
                return res.json({ 'status': 1000, 'message': error.code });
            }

            return res.json({ 'status': 200, 'message': results });
        });
    },

    single:function(req, res){
        pool.query(getCustomerQuery(req.params.id), function(error, results, fields) {
            if (error) {
                console.log(error);
                return res.json({ 'status': 1000, 'message': error.code });
            }

            return res.json({ 'status': 200, 'message': results });
        });
    },

    delete: function(req, res) {
        pool.query(deleteuserQuery(req.params.id), function(error, results, fields) {
            if (error) {
                console.log(error);
                return res.json({ 'status': 1000, 'message': error.code });
            }

            return res.json({ 'status': 200, 'message': results });
        });
    },

    update:function(req,res){
        pool.query(updateuserQuery(req.body, req.params.id), function(error, results, fields) {
            if (error) {
                console.log(error);
                return res.json({ 'status': 1000, 'message': error.code });
            }

            return res.json({ 'status': 200, 'message': results });
        });
    }

}



