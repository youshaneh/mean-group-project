const mongoose = require('mongoose');
const Task = mongoose.model('Task');

const getTaskList = async (req, res) => {
  const tasks = await Task.find();
  res
    .status(200)
    .json(tasks);
}
const getTask = (req, res) => {
  if (req.params && req.params.taskid) {
    Task
      .findById(req.params.taskid)
      .exec((err, task) => {
        if (!task) {
          res	
            .status(404) 
            .json({	
              "message": "taskid not found"
            });	 
          return;
        } else if (err) {
          res	
            .status(404) 
            .json(err); 
          return; 	
        }
        res		
          .status(200)
          .json(task);
      });
  } else {		
    res		
      .status(404) 	
      .json({	
        "message": "No taskid in request"
      });		
  }
}

const createTask = (req, res) => {
  Task.create({
    name: req.body.name,
    description: req.body.description,
    createdDate: req.body.createdDate,
    dueDate: req.body.dueDate,
    priority: req.body.priority,
    done: req.body.done
  }, (err, task) => {
    if (err) {
      res
        .status(400)
        .json(err);
    } else {
      res
        .status(201)
        .json(task);
    }
  });
}
const updateTask = (req, res) => {  
  if (!req.params.taskid) {
    res
      .status(404)
      .json({
        "message": "Not found, taskid is required"
      });
    return;
  }
  Task
    .findById(req.params.taskid)
    .select('-reviews -rating')
    .exec((err, task) => {
      if (!task) {
        res
          .json(404)
          .status({
            "message": "taskid not found"
          });
        return;
      } else if (err) {
        res
          .status(400)
          .json(err);
        return;
      }      
      task.name= req.body.name,
      task.description= req.body.description,
      task.createdDate= req.body.createdDate,
      task.dueDate= req.body.dueDate,
      task.priority= req.body.priority,
      task.done= req.body.done
      task.save((err, task) => {
        if (err) {
          res
            .status(404)
            .json(err);
        } else {
          res
            .status(200)
            .json(task);
        }
      });
    }
  );
}
const deleteTask = (req, res) => {
  const taskid = req.params.taskid;
  if (taskid) {
    Task
      .findByIdAndRemove(taskid) 
      .exec((err, task) => {
          if (err) {
            res
              .status(404)
              .json(err);
            return;
          }
          res
            .status(204)
            .json(null);
        }
    );
  } else {
    res
      .status(404)
      .json({
        "message": "No taskid"
      });
  }
}

module.exports = {
  getTaskList,
  getTask,
  createTask,
  updateTask,
  deleteTask
};
