const express = require('express');
const router = express.Router();
const ctrlTask = require('../controllers/task');

router
  .route('/tasks')
  .get(ctrlTask.getTaskList)
  .post(ctrlTask.createTask);

router
  .route('/tasks/:taskid')
  .get(ctrlTask.getTask)
  .put(ctrlTask.updateTask)
  .delete(ctrlTask.deleteTask);

module.exports = router;
