<script>
var b_1, p, t, q, k;

var min_t, max_t;
var min_q, max_q;
var min_p, max_p;
var min_b_1, max_b_1 ;
var min_k, max_k;

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generate_equation() {
    b_1 = 0, p = 0, t = 0, q = 0, k = 0;

    min_t = 5, max_t = 7;
    min_q = 2, max_q = 5;
    min_p = 2, max_p = 4;
    min_b_1 = 2, max_b_1 = 10;
    min_k = 4, max_k = 6;
    t = getRandomInRange(min_t, max_t);
    q = getRandomInRange(min_q, max_q);
    p = getRandomInRange(min_p, max_p);
    b_1 = getRandomInRange(min_b_1, max_b_1);
    k = getRandomInRange(min_k, max_k);
    
    var text = create_equation(t,q,p,b_1,k);
    
    print_in_div("equation", text);
}


function show_answer() {
    
    var s_n = b_1 * (1 - Math.pow(q, k)) / (1 - q);
    
    text = "$s_n = "+s_n+"$";
    print_in_div("answer", text);
}

function create_equation(t,q,p,b_1,k) {
    var s_1 = b_1 * Math.pow(q, t-1) * (1 - Math.pow(q, k+1)) / (1-q);
    
    var s_2 = b_1 * Math.pow(q, p-1) * (1 - Math.pow(q, k+1)) / (1-q);
    
    return "Есть геометрическая прогрессия. Сумма элементов с $"+t+"$ по $"+(t+k)+"$ равна $"+s_1+"$, а сумма элементов с $"+p+"$ по $"+(p+k)+"$ равна $"+s_2+"$. Найдите сумму первых $"+k+"$  элементов прогрессии.";
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