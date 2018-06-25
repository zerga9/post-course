describe("TasksApi", () => {

  describe("getTasks", () => {

    var networkService, tasksApi;

    beforeEach(() => {
      networkService = jasmine.createSpyObj("networkService", ["sendRequest"]);
      tasksApi = new TasksApi(networkService);
    });
  
    it("Returns a task data array from the API", (done) => {
      // arrange
      var dummyTaskData = {};
      networkService.sendRequest.and.callFake((method, url, body, cb) => {
        cb(dummyTaskData);
      });

      // act
      tasksApi.getTasks(function (taskData) {

        // assert
        expect(networkService.sendRequest).toHaveBeenCalledWith("GET", "tasks", null, jasmine.any(Function));
        expect(taskData).toEqual(dummyTaskData);
        done();
      });

    });


  });

});