// Un nuevo Set con los nombres de tu familia
const family = new Set([
  "Yhonatan",
  "Olga",
  "Enrique",
  "Marino",
  "Aladino",
  "Yakairy",
]);
console.log(family);

// Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
family.add("Yhonatan");
console.log(family);

// Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
family.add("Javascript");
console.log(family);
