function calcularArqueo1() {
  var monedas1c = parseInt(document.getElementById('monedas1c').value) || 0;
  var monedas5c = parseInt(document.getElementById('monedas5c').value) || 0;
  var monedas10c = parseInt(document.getElementById('monedas10c').value) || 0;
  var monedas25c = parseInt(document.getElementById('monedas25c').value) || 0;
  var monedas50c = parseInt(document.getElementById('monedas50c').value) || 0;
  var monedas1 = parseInt(document.getElementById('monedas1').value) || 0;
  var billetes5 = parseInt(document.getElementById('billetes5').value) || 0;
  var billetes10 = parseInt(document.getElementById('billetes10').value) || 0;
  var billetes20 = parseInt(document.getElementById('billetes20').value) || 0;

  var total = monedas1c * 0.01 +
              monedas5c * 0.05 +
              monedas10c * 0.10 +
              monedas25c * 0.25 +
              monedas50c * 0.50 +
              monedas1 +
              billetes5 * 5 +
              billetes10 * 10 +
              billetes20 * 20;

  document.getElementById('total1').textContent = total.toFixed(2);
}


function calcularArqueo2() {
  var monedas1c = parseInt(document.getElementById('monedas1c_2').value) || 0;
  var monedas5c = parseInt(document.getElementById('monedas5c_2').value) || 0;
  var monedas10c = parseInt(document.getElementById('monedas10c_2').value) || 0;
  var monedas25c = parseInt(document.getElementById('monedas25c_2').value) || 0;
  var monedas50c = parseInt(document.getElementById('monedas50c_2').value) || 0;
  var monedas1 = parseInt(document.getElementById('monedas1_2').value) || 0;
  var billetes5 = parseInt(document.getElementById('billetes5_2').value) || 0;
  var billetes10 = parseInt(document.getElementById('billetes10_2').value) || 0;
  var billetes20 = parseInt(document.getElementById('billetes20_2').value) || 0;

  var total = monedas1c * 0.01 +
              monedas5c * 0.05 +
              monedas10c * 0.10 +
              monedas25c * 0.25 +
              monedas50c * 0.50 +
              monedas1 +
              billetes5 * 5 +
              billetes10 * 10 +
              billetes20 * 20;

  document.getElementById('total2').textContent = total.toFixed(2);
}

function calcularArqueo3() {
  var monedas1c = parseInt(document.getElementById('monedas1c_3').value) || 0;
  var monedas5c = parseInt(document.getElementById('monedas5c_3').value) || 0;
  var monedas10c = parseInt(document.getElementById('monedas10c_3').value) || 0;
  var monedas25c = parseInt(document.getElementById('monedas25c_3').value) || 0;
  var monedas50c = parseInt(document.getElementById('monedas50c_3').value) || 0;
  var monedas1 = parseInt(document.getElementById('monedas1_3').value) || 0;
  var billetes5 = parseInt(document.getElementById('billetes5_3').value) || 0;
  var billetes10 = parseInt(document.getElementById('billetes10_3').value) || 0;
  var billetes20 = parseInt(document.getElementById('billetes20_3').value) || 0;

  var total = monedas1c * 0.01 +
              monedas5c * 0.05 +
              monedas10c * 0.10 +
              monedas25c * 0.25 +
              monedas50c * 0.50 +
              monedas1 +
              billetes5 * 5 +
              billetes10 * 10 +
              billetes20 * 20;

  document.getElementById('total3').textContent = total.toFixed(2);
}

function calcularArqueo4() {
  var monedas1c = parseInt(document.getElementById('monedas1c_4').value) || 0;
  var monedas5c = parseInt(document.getElementById('monedas5c_4').value) || 0;
  var monedas10c = parseInt(document.getElementById('monedas10c_4').value) || 0;
  var monedas25c = parseInt(document.getElementById('monedas25c_4').value) || 0;
  var monedas50c = parseInt(document.getElementById('monedas50c_4').value) || 0;
  var monedas1 = parseInt(document.getElementById('monedas1_4').value) || 0;
  var billetes5 = parseInt(document.getElementById('billetes5_4').value) || 0;
  var billetes10 = parseInt(document.getElementById('billetes10_4').value) || 0;
  var billetes20 = parseInt(document.getElementById('billetes20_4').value) || 0;

  var total = monedas1c * 0.01 +
              monedas5c * 0.05 +
              monedas10c * 0.10 +
              monedas25c * 0.25 +
              monedas50c * 0.50 +
              monedas1 +
              billetes5 * 5 +
              billetes10 * 10 +
              billetes20 * 20;

  document.getElementById('total4').textContent = total.toFixed(2);
}



