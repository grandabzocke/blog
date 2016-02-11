function myFunction(){
div = document.getElementById("head1");
percentage = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

number = Math.floor(255*percentage);
number2 = Math.floor(-255*percentage+255);
div.innerHTML = number + " & " + number2;
document.body.style.background = "rgb(" + number + ","+ number +","+ number +")";
document.body.style.color = "rgb(" + number2 + ","+ number2 +","+ number2 +")";
}
