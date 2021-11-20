//
// psd2css.js
//
//   This is where all the javascript required by your design is written.
//
//   Originally generated at http://psd2cssonline.com 
//   June 13, 2011, 4:33 pm with psd2css Online version 1.95

$(document).ready(function(){

  // This is required for the PNG fix to work.
  if (window.DD_belatedPNG)
    DD_belatedPNG.fix('.pngimg');

  // This is some javascript to stop IE from displaying the img alt attributes
  // when you mouse over imagess.  If you would like IE to display the alt attributes,
  // just comment out the following 4 lines.  Don't worry, if you leave this in 
  // place, your ALT attributes are still readable by the search engines.
  var tmpalt;
  $("img").hover( 
    function(){ tmpalt = $(this).attr( "alt" ); $(this).attr( "alt", "" ); },
    function(){ $(this).attr( "alt", tmpalt ); });

  // This is code to handle all of the _linkover events.  It works by
  // creating a special Wrap class, adding it to the link and linkover
  // divs of each link and linkover pair, and assigning a hover event to
  // that.
  $("#Layer-6").addClass("Wrap-5-6").hide();
  $("#Layer-5").addClass("Wrap-5-6");
  $(".Wrap-5-6").hover(
    function(){ $("#Layer-6").show(); $("#Layer-5").hide(); },
    function(){ $("#Layer-5").show(); $("#Layer-6").hide(); });
  $("#Layer-8").addClass("Wrap-7-8").hide();
  $("#Layer-7").addClass("Wrap-7-8");
  $(".Wrap-7-8").hover(
    function(){ $("#Layer-8").show(); $("#Layer-7").hide(); },
    function(){ $("#Layer-7").show(); $("#Layer-8").hide(); });
  $("#Layer-10").addClass("Wrap-9-10").hide();
  $("#Layer-9").addClass("Wrap-9-10");
  $(".Wrap-9-10").hover(
    function(){ $("#Layer-10").show(); $("#Layer-9").hide(); },
    function(){ $("#Layer-9").show(); $("#Layer-10").hide(); });
  $("#Layer-12").addClass("Wrap-11-12").hide();
  $("#Layer-11").addClass("Wrap-11-12");
  $(".Wrap-11-12").hover(
    function(){ $("#Layer-12").show(); $("#Layer-11").hide(); },
    function(){ $("#Layer-11").show(); $("#Layer-12").hide(); });
  $("#Layer-14").addClass("Wrap-13-14").hide();
  $("#Layer-13").addClass("Wrap-13-14");
  $(".Wrap-13-14").hover(
    function(){ $("#Layer-14").show(); $("#Layer-13").hide(); },
    function(){ $("#Layer-13").show(); $("#Layer-14").hide(); });
  $("#Layer-16").addClass("Wrap-15-16").hide();
  $("#Layer-15").addClass("Wrap-15-16");
  $(".Wrap-15-16").hover(
    function(){ $("#Layer-16").show(); $("#Layer-15").hide(); },
    function(){ $("#Layer-15").show(); $("#Layer-16").hide(); });
  $("#Layer-18").addClass("Wrap-17-18").hide();
  $("#Layer-17").addClass("Wrap-17-18");
  $(".Wrap-17-18").hover(
    function(){ $("#Layer-18").show(); $("#Layer-17").hide(); },
    function(){ $("#Layer-17").show(); $("#Layer-18").hide(); });
  $("#Layer-20").addClass("Wrap-19-20").hide();
  $("#Layer-19").addClass("Wrap-19-20");
  $(".Wrap-19-20").hover(
    function(){ $("#Layer-20").show(); $("#Layer-19").hide(); },
    function(){ $("#Layer-19").show(); $("#Layer-20").hide(); });
  $("#Layer-22").addClass("Wrap-21-22").hide();
  $("#Layer-21").addClass("Wrap-21-22");
  $(".Wrap-21-22").hover(
    function(){ $("#Layer-22").show(); $("#Layer-21").hide(); },
    function(){ $("#Layer-21").show(); $("#Layer-22").hide(); });
  $("#Layer-24").addClass("Wrap-23-24").hide();
  $("#Layer-23").addClass("Wrap-23-24");
  $(".Wrap-23-24").hover(
    function(){ $("#Layer-24").show(); $("#Layer-23").hide(); },
    function(){ $("#Layer-23").show(); $("#Layer-24").hide(); });
  $("#Layer-26").addClass("Wrap-25-26").hide();
  $("#Layer-25").addClass("Wrap-25-26");
  $(".Wrap-25-26").hover(
    function(){ $("#Layer-26").show(); $("#Layer-25").hide(); },
    function(){ $("#Layer-25").show(); $("#Layer-26").hide(); });
  $("#Layer-41").addClass("Wrap-40-41").hide();
  $("#Layer-40").addClass("Wrap-40-41");
  $(".Wrap-40-41").hover(
    function(){ $("#Layer-41").show(); $("#Layer-40").hide(); },
    function(){ $("#Layer-40").show(); $("#Layer-41").hide(); });
  $("#Layer-45").addClass("Wrap-44-45").hide();
  $("#Layer-44").addClass("Wrap-44-45");
  $(".Wrap-44-45").hover(
    function(){ $("#Layer-45").show(); $("#Layer-44").hide(); },
    function(){ $("#Layer-44").show(); $("#Layer-45").hide(); });

  // Here is the javascript that connects your lbthumb layers to
  // your jpeg images for lightbox.  There are a number of options
  // here you can modify.  Check their website for documentation.
  $('a.lightbox').lightBox({
    imageBtnClose: 'close.gif',
    imageBtnNext: 'next.gif',
    imageBtnPrev: 'prev.gif',
    imageLoading: 'loading.gif',
    containerResizeSpeed: 500,
    overlayBgColor: '#000' 
    /* 
    txtOf: 'de'  
    overlayOpacity: 0.6,
    txtImage: 'Imagem',
    */
  });














































});
