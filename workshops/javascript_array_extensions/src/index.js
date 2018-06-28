function getByGenderAndMinimumAge(animals, gender, age) {
  var result = animals.filter(animal => animal.gender == 'female' && animal.age >= 8);
  return result
}

function countByGenderAndMinimumAge(animals, gender, age) {
  var result = animals.filter(animal => animal.gender == 'female' && animal.age >= 9);
  return result.length
}

function deleteByGenderAndMinimumAge(animals, gender, age) {
  animals.map(function(animal, index) {
  return (animal.age>= 6 && animal.gender == 'female') ? index : -1;
}).filter(function(index) {
  return index >= 0;
}).reverse().forEach(function(index) {
  animals.splice(index,1);
});
    }


function getListOfNamesInArray(animals) {
  var result = []
  animals.forEach(function(animal){
    result.push(animal.name)
  })
  return result

}

function getListOfNamesInCommaDelimitedString(animals) {
  var result = []
  animals.forEach(function(animal){
    result.push(animal.name)
  })
return result.join(', ')

}

function getListOfNamesInAlphabeticalOrder(animals) {

}
