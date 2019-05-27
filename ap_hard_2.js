<script>
var arr = [], n = 200, p = 0, k = 0;

function getPrime(n) {
    if ((n % 2 == 0) && (n != 2)) {
        return false;
    } else if (n == 2) {
        return true;
    } else if (n == 1) {
        return false;
    } else {
        var k = Math.round(Math.sqrt(n));
        
        for ( var i = 2; i < k + 1; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
        
    }
}

for (var i = 20; i < n; i++) {
    var res = getPrime(i);
    if (res) {
        arr.push(i);
    }
}

function generate_equation() {
    p = arr[Math.floor(Math.random() * arr.length)];
    
    k = p;
    
    while (k == p) {
        k = arr[Math.floor(Math.random() * arr.length)];
    }
    
    var text = create_equation(k, p);
    
    print_in_div("equation", text);
}


function show_answer() {

    var min, max;
    
    if (k < p) {
        min = k;
        max = p;
    } else {
        min = p;
        max = k;
    }
    
    var proc = p * k;
    
    var find = (min + 1) / 2;
    
    text = "$"+max+"$";
    print_in_div("answer", text);
}

function create_equation(k, p) {

    var min, max;
    
    if (k < p) {
        min = k;
        max = p;
    } else {
        min = p;
        max = k;
    }
    
    var proc = p * k;
    
    var find = (min + 1) / 2;
    
    return "Сумма номеров домов на одной стороне квартала равна $"+proc+"$. Какой номер имеет $"+find+"$ дом от угла?";
    
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