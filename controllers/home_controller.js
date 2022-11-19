const Schema = require('../models/task_schema');

module.exports.home = function (req, res) {
    Schema.find({}, function (err, allTasks) {
        if (err) {
            console.log("error in finding the tasks");
            return;
        }

        return res.render('home', {
            task_list: allTasks,
        })
    });
}

module.exports.task = function (req, res) {
    Schema.create(req.body, function (err, newTask) {
        if (err) {
            console.log("error in creating a task", err);
            return;
        }

        console.log(newTask);
        return res.redirect('back');
    })
}

module.exports.delete = function (req, res){
    let id = req.params.id;
    // find the contact using id and delete the contact
    Schema.findByIdAndDelete(id, function (err){
        if(err){
            console.log("error in deleting the task",err);
            return res.redirect('/');
        }
        return res.redirect('/');
    })
}