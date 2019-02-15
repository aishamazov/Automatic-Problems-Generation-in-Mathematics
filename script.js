var min = 0, max = 9;

// квадратное уравнение с корнями x_1 и x_2 имеет вид a(x - x_1)(x - x_2) = 0
// раз корни у нас небольшие, то и на число a поставим ограничение: целое число [1;9]
 
 var min_a = 1, max_a = 9;
 var x_1 = 0, x_2 = 0;

function generate_equation() {
  var key = document.getElementById("input_key").value;
  x_1 = Math.floor(Math.random() * (max - min + 1)) + min;
  x_2 = x_1;
  while (x_2 == x_1) {
    x_2 = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var a = Math.floor(Math.random() * (max_a - min_a + 1)) + min_a;
  var text = create_equation(a, x_1, x_2);
  print_in_div("equation", text);
}


function show_answer() {
  text = "$$x_1 = "+x_1+", \\quad x_2 = "+x_2+"$$";
  print_in_div("answer", text);
}

function create_equation(a,x_1,x_2) {
   // Тогда уравнение будет иметь вид ax^2 - a(x_1 + x_2)x + ax_1x_2 = 0
  var p = x_1 + x_2;
  var q = x_1 * x_2;
  var ap = a * p;
  var aq = a * q;
  if (q != 0) {
    if (a == 1) {
      return "$$x^2 - "+p+" \\cdot x + "+q+" = 0$$";
    } else {
      return "$$"+a+" \\cdot x^2 - "+ap+" \\cdot x + "+aq+" = 0$$";
    }
  } else {
    if (a == 1) {
      if (x_1 == 1 || x_2 == 1) {
        return "$$x^2 - x = 0$$";
      } else {
        return "$$x^2 - "+p+" \\cdot x = 0$$";
      }
    } else {
      return "$$"+a+" \\cdot x^2 - "+ap+" \\cdot x = 0$$";
    }
  }
}

function print_in_div(divID, print_text) {
  var div = document.getElementById(divID);
  div.innerHTML = print_text;
  MathJax.Hub.Queue(['Typeset',MathJax.Hub,'result']);
}