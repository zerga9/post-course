function getByGenderAndMinimumAge(animals, gender, age) {
  var result = animals.filter(animal => animal.gender == 'female' && animal.age >= 8);
  return result
}

function countByGenderAndMinimumAge(animals, gender, age) {
  var result = animals.filter(animal => animal.gender == 'female' && animal.age >= 9);
  return result.length
}

function deleteByGenderAndMinimumAge(animals, gender, age) {

}

function getListOfNamesInArray(animals) {

}

function getListOfNamesInCommaDelimitedString(animals) {

}

function getListOfNamesInAlphabeticalOrder(animals) {

}
