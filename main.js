console.log("hello");

function calcular() {
  var resultado = 0;
  var resultado2 = 0;


  for (i = 1; i < 9; i++) {
    i = i.toString();
        if (document.getElementById('inlineRadio'+i+'.1').checked) {
            resultado = resultado + 1;
        }
    }
  for (i = 1; i < 9; i++) {
        if (document.getElementById("inlineRadio"+i+".2").checked) {
            resultado = resultado + 2;
        }
    }
  for (i = 1; i < 9; i++) {
        if (document.getElementById("inlineRadio"+i+".3").checked) {
            resultado = resultado + 3;
        }
    }


  for (i = 1; i < 9; i++) {
      i = i.toString();
          if (document.getElementById('tinlineRadio'+i+'.1').checked) {
              resultado2 = resultado2 + 1;
          }
      }
  for (i = 1; i < 9; i++) {
          if (document.getElementById("tinlineRadio"+i+".2").checked) {
              resultado2 = resultado2 + 2;
          }
      }
  for (i = 1; i < 9; i++) {
          if (document.getElementById("tinlineRadio"+i+".3").checked) {
              resultado2 = resultado2 + 3;
          }
      }


    console.log(resultado);
    console.log(resultado2);
    document.getElementById("puntaje").value = resultado;
    document.getElementById("puntaje2").value = resultado2;

    var trace1 = {
      x: [8,  18],
      y: [18, 8],
      type: 'scatter'
    };
    var trace2 = {
      x: [8, 32],
      y: [8, 32],
      type: 'scatter'
    };
    var trace4 = {
      x: [22, 32],
      y: [32, 22],
      type: 'scatter'
    };
    var trace5 = {
      x: [8, 8, 32, 32, 8],
      y: [8, 32, 32, 8, 8],
      type: 'scatter'
    };
    var trace3 = {
      x: [resultado],
      y: [resultado2],
    };
    var data = [trace1, trace2, trace4, trace5, trace3];
    var layout = {
      xaxis: {
        autotick: false,
        ticks: 'outside',
        tick0: 0,
        dtick: 1,
        ticklen: 8,
        tickwidth: 4,
        tickcolor: '#000'
      },
      yaxis: {
        autotick: false,
        ticks: 'outside',
        tick0: 0,
        dtick: 1,
        ticklen: 8,
        tickwidth: 4,
        tickcolor: '#000'
      }
    };
    Plotly.newPlot('myDiv', data, layout);

    }
