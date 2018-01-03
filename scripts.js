$(window).on('load',function(){

  $(this).on('scroll',function(){
    let st = $(this).scrollTop();
    if(st > 300){
      $('#searchBox').addClass('reached-top');
    }else {
      $('#searchBox').removeClass('reached-top');
    }

  });

});
