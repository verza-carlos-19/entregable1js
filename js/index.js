//ejercicio 1
console.log("ejercicio 1");
function esPar(num) {
  if (num % 2 === 0) {
    console.log("el numero es par");
  } else {
    console.log("el numero es impar");
  }
}
esPar(5);
esPar(2);

//ejercicio 2
console.log(" ");
console.log(" ");
console.log("ejercicio 2");

function esMayor(a, b) {
  if (a > b) {
    console.log("a es mayor que b");
  } else if (a < b) {
    console.log("b es mayor que a");
  } else {
    console.log("son iguales");
  }
}
esMayor(2, 3);
esMayor(2, 2);
esMayor(3, 2);

//ejercicio 3
console.log("ejercicio 3");
function esMultiplo(num) {
  if (num % 5 === 0) {
    console.log("el numero es multiplo de 5");
  } else {
    console.log("el numero no es multiplo");
  }
}
esMultiplo(5);
esMultiplo(2);
esMultiplo(13);
esMultiplo(15);

//ejercicio 4
console.log("ejercicio 4");
function contador(a) {
  for (let i = 0; i <= a; i++) {
    console.log(i);
  }
}
contador(5);
contador(15);
//ejercicio 5
console.log("ejercicio 5");
function contadorDePalabras(b, a) {
  for (let i = 0; i <= a; i++) {
    console.log(b);
  }
}
contadorDePalabras("hola", 2);
contadorDePalabras("hola mundo", 3);

//ejercicio 6
console.log("ejercicio 6");
function contadorArray(a) {
  for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
  }
}
const frutasYNumeros = ["manzana", "pera", 3, 15, "bananas"];
contadorArray(frutasYNumeros);

//ejercicio 7
console.log("ejercicio 7");
function contadorExcpt(a) {
  for (let i = 0; i < a.length; i++) {
    if (i === 4) {
      continue;
    }
    console.log(a[i]);
  }
}
const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
contadorExcpt(test);

//ejercicio 8
console.log("ejercicio 8");
function multiplicador(a, b) {
  for (let i = 0; i < a.length; i++) {
    console.log(a[i] * b);
  }
}
const testdos = [1, 2, 3, 4, 5];
multiplicador(testdos, 2);
