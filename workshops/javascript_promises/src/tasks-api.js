class TasksApi {

  constructor(networkService) {
    this.networkService = networkService;
  }

  getTasks(callback) {
    this.networkService.sendRequest("GET", "tasks", null, callback);
  }

  getTask(taskId, callback) {
    this.networkService.sendRequest("GET", `tasks/${id}`, null, callback);
  }

  createTask(task, callback) {
    this.networkService.sendRequest("POST", `tasks`, task, callback);
  }

  updateTask(task, callback) {
    this.networkService.sendRequest("UPDATE", `tasks/${id}`, task, callback);
  }

  deleteTask(taskId, callback) {
    this.networkService.sendRequest("DELETE", `tasks/${id}`, null, callback);
  }

}