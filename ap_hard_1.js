<script>
var a_1, n;

var min_a_1, max_a_1;
var min_n, max_n;

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generate_equation() {
  a_1 = 0, n = 0;

  min_a_1 = 5, max_a_1 = 15;
  min_n = 15, max_n = 50;
    a_1 = getRandomInRange(min_a_1, max_a_1);
    n = getRandomInRange(min_n, max_n);
    
    n = 2 * n - 1;
    
    var text = create_equation(a_1, n);
    
    print_in_div("equation", text);
}


function show_answer() {
    
    var s_n = (2 * a_1 + n - 1) * n / 2;
    
    text = "$n = "+n+"$";
    print_in_div("answer", text);
}

function create_equation(a_1, n) {
    var s_n = (2 * a_1 + n - 1) * n / 2;
    
    return "У мальчика было $"+s_n+"$ конфет. Он хочет съесть все конфеты за n дней, причем так, чтобы каждый из этих дней (кроме первого, но включая последний) съедать на одну конфету больше, чем в предыдущий. Для какого наибольшего числа n это возможно?";
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