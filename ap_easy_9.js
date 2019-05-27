<script>
var a_1, d, n;

var min_a_1, max_a_1;
var min_d, max_d;
var min_n, max_n;


function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generate_equation() {
    a_1 = 0, d = 0, n = 0;

    min_a_1 = -20, max_a_1 = 20;
    min_d = 10, max_d = 50;
    min_n = 50, max_n = 100;
    a_1 = getRandomInRange(min_a_1, max_a_1);
    d = getRandomInRange(min_d, max_d);
    n = getRandomInRange(min_n, max_n);
    
    var text = create_equation(a_1, d, n);
    
    print_in_div("equation", text);
}


function show_answer() {
    var a_n = a_1 + (n - 1) * d;
    
    var s_n = (a_1 + a_n) * n / 2;
    
    text = "$a_1 = "+a_1+"$";
    print_in_div("answer", text);
}

function create_equation(a_1, d, n) {
    var a_n = a_1 + (n - 1) * d;
    
    var s_n = (a_1 + a_n) * n / 2;
    return "Арифметическая прогрессия задана разностью $d = "+d+"$ и суммой первых $"+n+"$ элементов $s_n = "+s_n+"$. Найдите первый элемент арифметической прогрессии.";
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