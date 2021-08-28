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
       ag.value="";
       ref.value = "";
       bol.value = "";
       doc.value = "";
       salg.value = "";
   });
   document.querySelector("#igual").addEventListener('click', function(){
      let agua = 200; 
      let bolo = 100; 
      let doces = 3;
      let salgado = 10;
      let refri = 600;

      let r = valor * refri;
      if(r > 1000){
        r = r / 1000;
        ref.value = r+"l";
      }
      else{
        ref.value = r+"ml";
      }

      let a = valor * agua;
      if(a > 1000)
      {
        a = a / 1000;
        ag.value= a+"l";
      }
      else{
        ag.value = a+"ml";
      }      
      let b = valor * bolo;
      if(b > 1000){
        b = b/1000;
        bol.value = b+"kg";
      }
      else{
        bol.value = b+"g";
      }

      let d = valor * doces;
      doc.value = d;

      let s = valor * salgado;
      salg.value = s;
   });
}


