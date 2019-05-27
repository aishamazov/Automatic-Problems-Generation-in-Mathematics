<script>
var b_1, k, t;

var min_t, max_t;
var min_k, max_k;

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generate_equation() {
  b_1 = 0, k = 0, t = 0;

  min_t = 5, max_t = 10;
  min_k = 6, max_k = 20;
    t = getRandomInRange(min_t, max_t);
    k = getRandomInRange(min_k, max_k);
    
    b_1 = t * (k - 1);
    
    var text = create_equation(b_1, k);
    
    print_in_div("equation", text);
}


function show_answer() {
  
    var s_n = b_1 * k / (k - 1);
    
    text = "$s_n = "+s_n+"$";
    print_in_div("answer", text);
}

function create_equation(b_1, k) {

    return "Геометрическая прогрессия задана первым числом $b_1 = "+b_1+"$, знаменателем $q = \\frac{1}{"+k+"}$. Найдите сумму элементов геометрической прогрессии.";
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