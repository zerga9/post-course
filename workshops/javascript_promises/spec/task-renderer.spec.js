describe("TasksRenderer", () => {

  describe("render", () => {

    var tasksRenderer, tasksRepository, dummyElement;

    beforeEach(() => {
      dummyElement = jasmine.createSpyObj("element", ["append"]);
      tasksRepository = jasmine.createSpyObj("tasksRepository", ["getTasks"]);
      tasksRenderer = new TaskRenderer(tasksRepository, dummyElement);
    });
  
    it("Appends the task descriptions to the element", (done) => {
      // arrange
      var dummyTasks = [
        { name: "Get a haircut" },
        { name: "Get a job" }
      ];
      tasksRepository.getTasks.and.callFake((cb) => {
        cb(dummyTasks);
      });

      // act
      tasksRenderer.renderTasks();


      setTimeout(function() {
          // assert
        expect(dummyElement.append).toHaveBeenCalledWith("<span>Get a haircut</span>");
        expect(dummyElement.append).toHaveBeenCalledWith("<span>Get a job</span>");
        done();
      }, 0);

    });


  });

});