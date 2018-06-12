describe("Javascript arrays", function() {

  var mammals, reptiles, birds;

  beforeEach(function() {

    mammals = [
     { species: 'Monkey', name: 'Martin', gender: 'male', age: 12 },
     { species: 'Monkey', name: 'Cheryl', gender: 'female', age: 6 },
     { species: 'Marmot', name: 'Alice', gender: 'female', age: 10 },
     { species: 'Mouse', name: 'Harry', gender: 'male', age: 9 }
    ];

    reptiles = [
      { species: 'Gecko', name: 'Ginnie', gender: 'female', age: 4 },
      { species: 'Snake', name: 'Severus', gender: 'male', age: 7 },
    ];

    birds = [
      { species: 'Condor', name: 'Alfie', gender: 'male', age: 23 },
      { species: 'Owl', name: 'Lupa', gender: 'female', age: 17 },
    ];

  })

  describe("getByGenderAndMinimumAge", function() {

    it ("Returns all females who are at least 8 years old", function() {
      var females = getByGenderAndMinimumAge(mammals, 'female', 8);

      expect(females).toEqual([
        { species: 'Marmot', name: 'Alice', gender: 'female', age: 10 },
      ]);
    });
  });

  describe("countByGenderAndMinimumAge", function() {

    it ("Count all females who are at least 9 years old", function() {
      var count = countByGenderAndMinimumAge(mammals, 'female', 9);

      expect(count).toEqual(1);
    });
  });


  describe("deleteByGenderAndMinimumAge", function() {

    it ("Delete all females who are at least 6 years old", function() {
      deleteByGenderAndMinimumAge(mammals, 'female', 6);

      expect(mammals).toEqual([
        { species: 'Monkey', name: 'Martin', gender: 'male', age: 12 },
        { species: 'Mouse', name: 'Harry', gender: 'male', age: 9 }
      ]);
    });
  });


  describe("getListOfNamesInArray", function() {

    it ("Gets a list of names as an array", function() {
      var animals = getListOfNamesInArray(mammals);

      expect(animals).toEqual([ 'Martin', 'Cheryl', 'Alice', 'Harry' ]);
    });
  });


  describe("getListOfNamesInCommaDelimitedString", function() {

    it ("Gets a list of names as a comma delimited list", function() {
      var animals = getListOfNamesInCommaDelimitedString(mammals);

      expect(animals).toEqual('Martin, Cheryl, Alice, Harry');
    });
  });

  describe("getListOfNamesForSubCategories", function() {

    it ("Gets a list of all animals in a single array", function() {
      var animals = getListOfNamesInAlphabeticalOrder([mammals, reptiles, birds]);

      expect(animals).toEqual(['Alfie', 'Alice', 'Cheryl', 'Ginnie', 'Harry', 'Lupa', 'Martin', 'Severus']);
    });
  });
})
