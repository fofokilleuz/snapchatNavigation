var tabsFn = (function() {

  function init() {
    setHeight();
    setClass();
  }

  function setClass() {
    var windowWidth = $(window).width();
    if(windowWidth > 768){
      $('#resizetab').addClass('nav-justified');
    }
  }

  function setHeight() {
    var $tabPane = $('.tab-pane'),
        tabsHeight = $('.nav-tabs').height();

    $tabPane.css({
      height: tabsHeight
    });
  }

  $(init);
})();

$(window).on('resize', function() {
    if($(window).width() > 768) {
        $('#resizetab').addClass('nav-justified');
    }else{
        $('#resizetab').removeClass('nav-justified');
    }
})
