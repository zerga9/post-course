describe("TasksRepository", () => {

  describe("getTasks", () => {

    var tasksRepository, tasksApi;

    beforeEach(() => {
      tasksApi = jasmine.createSpyObj("tasksApi", ["getTasks"]);
      tasksRepository = new TasksRepository(tasksApi);
    });
  
    it("Passes an array of task models to the callback", (done) => {
      // arrange
      var dummyTasks = {};
      tasksApi.getTasks.and.callFake((cb) => {
        cb(dummyTasks);
      });

      // act
      tasksApi.getTasks(function (taskData) {

        // assert
        expect(taskData).toEqual(dummyTasks);
        done();
      });

    });


  });

});