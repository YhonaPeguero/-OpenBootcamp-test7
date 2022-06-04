// La fecha de hoy
const today = new Date();
console.log(today);

// La fecha de tu nacimiento
const birthDate = new Date(1998, 06, 20);
console.log(birthDate);

// Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const isAfter = today > birthDate;
console.log(isAfter);

//Una variable que contenga el día de tu nacimiento
const birthDay = birthDate.getDate();
console.log(birthDay);

//  Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const birthMonth = birthDate.getMonth();
console.log(birthMonth);

// Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const birthYear = birthDate.getFullYear();
console.log(birthYear);
