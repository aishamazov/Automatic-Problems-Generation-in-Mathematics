<script>
var b_1, q, n;

var min_b_1, max_b_1;
var min_q, max_q;
var min_n, max_n;

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generate_equation() {
  b_1 = 0, q = 0, n = 0;

  min_b_1 = 1, max_b_1 = 6;
  min_q = 3, max_q = 6;
  min_n = 5, max_n = 10;
    b_1 = getRandomInRange(min_b_1, max_b_1);
    q = getRandomInRange(min_q, max_q);
    n = getRandomInRange(min_n, max_n);
    
    var text = create_equation(b_1, q, n);
    
    print_in_div("equation", text);
}


function show_answer() {
  
    var b_n = b_1 * Math.pow(q, n-1);
    
    
    text = "$b_1 = "+b_1+"$";
    print_in_div("answer", text);
}

function create_equation(b_1, q, n) {
    var b_n = b_1 * Math.pow(q, n-1);
    
    
    return "Геометрическая прогрессия задана знаменателем $q = "+q+"$ и числом $b_n = "+b_n+",$ стоящем на месте $n = "+n+"$. Найдите первый элемент геометрической прогрессии.";
}

function print_in_div(divID, print_text) {
  var div = document.getElementById(divID);
  div.innerHTML = print_text;
  MathJax.Hub.Queue(['Typeset',MathJax.Hub,'result']);
}
</script>

<!DOCTYPE html>
<html lang="rus">
  <head>
    <meta charset="utf-8">
    <script type="text/x-mathjax-config">
    MathJax.Hub.Config({
        tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}
    });
    </script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML' async></script>
  </head>
  <body>
    <div ID="equation">Тут будет уравнение</div><br>
    <div ID="answer">Тут будет ответ</div><br>
    Введите код для генерации (4-x значное число): <input type="password" id="input_key">
    <input type="button" value ="Генерировать уравнение" onclick="generate_equation()">
    <input type="button" value ="Показать ответ" onclick="show_answer()">
  </body>
</html>