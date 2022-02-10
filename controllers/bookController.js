const {title} = require('../models')

//view all
module.exports.viewAll= async function (req,res){
    const titles = await title.findAll();
    res.render('book/view_all',{books});
}
//book

//render add form

//add

//render edit form

//update

//delete

