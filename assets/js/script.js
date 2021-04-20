$(function(){

  // var arrowRight = $('.arrow-right');
  // var activeImage = ('.container-images img.active');
  $('.arrow-right').click(nextImage);
  console.log($('.arrow-right'));
  $('.arrow-left').click(prevImage);
  console.log($('.arrow-left'));
  
  function nextImage(){
    //creo le mie referenze all'immagine attiva
    var activeImage = $('.container-images img.active');
    console.log(activeImage);
    var activeCircle = $('.nav a i.active');

    //rimuovo la classe active nell'elemento attivo
    activeImage.removeClass('active');
    activeCircle.removeClass('active');

    //se l'elemento successivo ha length 0 vuol dire che non esiste
    //quindi aggiungo active al primo elemento
    if(activeImage.next('img').length === 0){
      $('.container-images img').first().addClass('active');
      $('.nav a i').first().addClass('.active');
    }else{
      activeImage.next('img').addClass('active');
      activeCircle.next('a i').addClass('active');
    }
   
  }

  function prevImage(){
        //creo le mie referenze all'immagine attiva
        var activeImage = $('.container-images img.active');
        var activeCircle = $('.nav a i.active');
    
        //rimuovo la classe active nell'elemento attivo
        activeImage.removeClass('active');
        activeCircle.removeClass('active');
    
        //se l'elemento precedente ha length 0 vuol dire che non esiste
        //quindi aggiungo active all'ultimo elemento
        if(activeImage.prev('img').length === 0){
          $('.container-images img').last().addClass('active');
          $('.nav a i').last().addClass('active');
        }else{
          activeImage.prev('img').addClass('active');
          activeCircle.prev('i').addClass('active');
        }
       
  }
});