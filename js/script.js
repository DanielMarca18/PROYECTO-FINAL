/* ANIMACIÓN BARRA DE NAVEGACIÓN */
_toggle.onclick = () =>{
    _items.classList.toggle("open")
    _toggle.classList.toggle("close")
  }

  /* CALCULADORA DE IMC */
// Agregamos un listener para escuchar el evento 'load' del DOM

window.addEventListener('load', function() {
  // Obtenemos una referencia a los elementos necesarios
  var heightInput = document.getElementById('height');
  var weightInput = document.getElementById('weight');
  var calculateButton = document.getElementById('calculate');
  var imcOutput = document.getElementById('imc');
  var result = document.querySelector('.result');

  // Agregamos un listener para escuchar el evento 'click' del botón 'Calcular IMC'
  calculateButton.addEventListener('click', function() {
    // Obtenemos los valores de altura y peso
    var height = heightInput.value;
    var weight = weightInput.value;

    // Validamos que se hayan ingresado valores válidos para altura y peso
    if (!height || !weight) {
      imcOutput.innerHTML = '';
      result.style.display = 'none';
      alert('Por favor ingrese un valor válido para altura y peso.');
      return;
    }

    // Convertimos los valores de altura y peso a números
    height = Number(height);
    weight = Number(weight);

    // Calculamos el índice de masa corporal (IMC)
    var bmi = weight / Math.pow(height / 100, 2);

    // Mostramos el resultado del cálculo del IMC
    imcOutput.innerHTML = bmi.toFixed(2);

    // Mostramos el resultado en la sección de resultados
    result.style.display = 'block';
  });
});