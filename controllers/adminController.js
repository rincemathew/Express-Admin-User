const { collection } = require("../models/mongodb")

const admin_login = async(req,res) => {
    res.render('admin-login')
}

module.exports = {admin_login}