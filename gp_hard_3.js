<script>

var t, p;

var min_p, max_p;

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generate_equation() {
    
    t = 99;
    p = 0;
    min_p = 10;
    max_p = 98;

    p = getRandomInRange(min_p, max_p);

    
    var text = create_equation(p, t);
    
    print_in_div("equation", text);
}


function show_answer() {
    
    if (p % 11 == 0) {
        p = p / 11;
        t = t / 11;
    }
    if (p % 9 == 0) {
        p = p / 9;
        t = t / 9;
    } else if (p % 3 == 0) {
        p = p / 3;
        t = t / 3;
    }
    
    text = "$\\frac{"+p+"}{"+t+"}$";
    print_in_div("answer", text);
}

function create_equation(p, t) {
  
    return "Представьте число $0,("+p+")$ в виде несократимой дроби.";
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