$(function(){
 
  
    function reloj() {
      
      var x = new Date();
      var hor = x.getHours();
      var min = x.getMinutes();
      var seg = x.getSeconds();
     
      var grados = seg * 6;
      $('#caja-segundo').css('-webkit-transform','rotate('+grados+'deg)');
      
      var gradosm = min * 6;
      $('#caja-minuto').css('-webkit-transform','rotate('+gradosm+'deg)');
      
      var gradosh = ((hor * 5 + min / 12) * 6);
      $('#caja-hora').css('-webkit-transform','rotate('+gradosh+'deg)');

      
    }
    
    setInterval(reloj, 1000);
    
   
  }); 