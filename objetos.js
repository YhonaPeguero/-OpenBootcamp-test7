// Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const person = {
  name: "Yhonatan",
  lastName: "Peguero",
  age: 23,
  height: 1.68,
  developer: true,
};
console.log(person);

//  Una variable que obtenga tu edad a partir del objeto anterior
const age = person.age;
console.log(age);

// Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const friends = [
  person,
  {
    name: "Olga",
    lastName: "Peguero",
    age: 38,
    height: 1.59,
    developer: false,
  },
  {
    name: "Enrique",
    lastName: "Peguero",
    age: 28,
    height: 1.7,
    developer: false,
  },
];
console.log(friends);

// Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const sortedFriends = friends.sort((a, b) => a.age - b.age);
console.log(sortedFriends);
