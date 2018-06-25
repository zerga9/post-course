class TaskRenderer {

  constructor(tasksRepository, tasksElement) {
    this.tasksRepository = tasksRepository;
    this.tasksElement = tasksElement;
  }

  renderTasks() {
    var self = this;
    this.tasksRepository.getTasks(function (tasks) {
      tasks.forEach((task) => self.tasksElement.append(`<span>${task.name}</span>`));
    });
  }
}