function dividir(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      return "Ambos parámetros deben ser números";
    } else if (num2 === 0) {
      return "No se puede dividir por cero";
    } else {
      return num1 / num2;
    }
  }
  
  module.exports = dividir;