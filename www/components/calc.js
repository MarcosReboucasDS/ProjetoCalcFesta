window.onload = function(){
    const display = document.querySelector("#display");
    const ag = document.querySelector("#pagua");
    const ref = document.querySelector("#prefri");
    const bol = document.querySelector("#pbolo");
    const doc = document.querySelector("#pdoce");
    const salg = document.querySelector("#psalg");
   const numerico = document.querySelectorAll('.numerico');
    let valor;
    let botoes = Array.prototype.filter.call(numerico, function(botao){
       botao.addEventListener('click', function(){
         valor = display.value;
         valor += this.value;
         display.value = valor;
       });
    });
       document.querySelector("#apagar").addEventListener('click', function(){
       display.value = "";
   });
   document.querySelector("#igual").addEventListener('click', function(){
      let agua = 200; 
      let bolo = 100; 
      let doces = 3;
      let salgado = 10;
      let refri = 600;
      let a = valor * agua;
      ag.value = a+"ml";
   });
}


