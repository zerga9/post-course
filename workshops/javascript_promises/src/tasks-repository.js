class TasksRepository {
  constructor(tasksApi) {
    this.tasksApi = tasksApi;
  }

  getTasks(callback) {
    this.tasksApi.getTasks(function (tasksData) {
      callback(tasksData.map((taskData) => new TaskModel(taskData)));
    });
  }

  getTask(taskId, callback) {
    this.tasksApi.getTasks(taskId, function (taskData) {
      var taskModel = new TaskModel(taskData);
      callback(taskModel);
    });
  }

  createTask(task, callback) {
    var newTaskData = {
      description: task.description
    };
    this.tasksApi.createTask(newTaskData, function (taskData) {
      var taskModel = new TaskModel(taskData);
      callback(taskModel);
    });
  }

}