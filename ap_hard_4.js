<script>
var a_1, n, n_2;

var min_a_1, max_a_1;
var min_n, max_n;

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function generate_equation() {
    a_1 = 0, n = 0, n_2 = 0;

    min_a_1 = 30, max_a_1 = 50;
    min_n = 30, max_n = 80;
    a_1 = getRandomInRange(min_a_1, max_a_1);
    n = getRandomInRange(min_n, max_n);
    n_2 = n * n;
    var text = create_equation(a_1, n_2);
    
    print_in_div("equation", text);
}


function show_answer() {
    
    text = "$"+n+"$";
    print_in_div("answer", text);
}

function create_equation(a_1, n_2) {
    
    if (a_1 % 10 == 1) {
        return "Ребята по кругу ели семечки. Первый взял $"+a_1+"$ семечку, а каждый следующий брал на одну семечку больше. Известно, что на втором круге было взято семечек в сумме на $"+n_2+"$ больше, чем на первом. Сколько человек сидело за столом?";
    } else if (a_1 % 10 == 2 || a_1 % 10 == 3 || a_1 % 10 == 4) {
        return "Ребята по кругу ели семечки. Первый взял $"+a_1+"$ семечки, а каждый следующий брал на одну семечку больше. Известно, что на втором круге было взято семечек в сумме на $"+n_2+"$ больше, чем на первом. Сколько человек сидело за столом?";
    } else {
        return "Ребята по кругу ели семечки. Первый взял $"+a_1+"$ семечек, а каждый следующий брал на одну семечку больше. Известно, что на втором круге было взято семечек в сумме на $"+n_2+"$ больше, чем на первом. Сколько человек сидело за столом?";
    }
    
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