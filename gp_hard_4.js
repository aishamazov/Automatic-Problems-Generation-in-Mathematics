<script>

var k, n;

var min_k, min_n; 
var max_k, max_n;

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generate_equation() {
    
    min_k = 1;
    max_k = 8;
    min_n = 7;
    max_n = 13;

    k = getRandomInRange(min_k, max_k);
    n = getRandomInRange(min_n, max_n);

    
    var text = create_equation(k, n);
    
    print_in_div("equation", text);
}


function show_answer() {
    
    var s_n = ((Math.pow(10, n) - 1) * 10 / 9) - n;
    var res = s_n * k / 9;
    
    text = "$"+res+"$";
    print_in_div("answer", text);
}

function create_equation(k, n) {
    
    return "Найдите сумму "+k+"+ "+k+""+k+" + "+k+""+k+""+k+"+ "+k+"..."+k+", где последнее число содержит "+n+" цифр.";
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