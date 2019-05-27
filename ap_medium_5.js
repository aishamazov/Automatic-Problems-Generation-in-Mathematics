<script>
var k, t;

var min_k, max_k;
var min_t, max_t;

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generate_equation() {
    k = 0, t = 0;

    min_k = 50, max_k = 100;
    min_t = 50, max_t = 100;
    k = getRandomInRange(min_k, max_k);
    t = getRandomInRange(min_t, max_t);    
    var text = create_equation(k, t);
    
    print_in_div("equation", text);
}


function show_answer() {
    var n = 2 * k + 1;
    
    var s_n = t * n;

    text = "$"+t+"$";
    print_in_div("answer", text);
}

function create_equation(k, t) {
    var n = 2 * k + 1;
    
    var s_n = t * n;
    
    var pos = k + 1;

    return "Сумма первых $n = "+n+"$ элементов арифметической прогрессии равна $s_n = "+s_n+"$. Найдите элемент прогрессии, стоящий на месте  $"+pos+"$.";
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