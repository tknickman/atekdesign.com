//
// psd2css.js
//
//   This is where all the javascript required by your design is written.
//
//   Originally generated at http://psd2cssonline.com 
//   June 13, 2011, 11:12 pm with psd2css Online version 1.95

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
  $("#Layer-5").addClass("Wrap-4-5").hide();
  $("#Layer-4").addClass("Wrap-4-5");
  $(".Wrap-4-5").hover(
    function(){ $("#Layer-5").show(); $("#Layer-4").hide(); },
    function(){ $("#Layer-4").show(); $("#Layer-5").hide(); });
  $("#Layer-7").addClass("Wrap-6-7").hide();
  $("#Layer-6").addClass("Wrap-6-7");
  $(".Wrap-6-7").hover(
    function(){ $("#Layer-7").show(); $("#Layer-6").hide(); },
    function(){ $("#Layer-6").show(); $("#Layer-7").hide(); });
  $("#Layer-9").addClass("Wrap-8-9").hide();
  $("#Layer-8").addClass("Wrap-8-9");
  $(".Wrap-8-9").hover(
    function(){ $("#Layer-9").show(); $("#Layer-8").hide(); },
    function(){ $("#Layer-8").show(); $("#Layer-9").hide(); });
  $("#Layer-11").addClass("Wrap-10-11").hide();
  $("#Layer-10").addClass("Wrap-10-11");
  $(".Wrap-10-11").hover(
    function(){ $("#Layer-11").show(); $("#Layer-10").hide(); },
    function(){ $("#Layer-10").show(); $("#Layer-11").hide(); });
  $("#Layer-13").addClass("Wrap-12-13").hide();
  $("#Layer-12").addClass("Wrap-12-13");
  $(".Wrap-12-13").hover(
    function(){ $("#Layer-13").show(); $("#Layer-12").hide(); },
    function(){ $("#Layer-12").show(); $("#Layer-13").hide(); });
  $("#Layer-15").addClass("Wrap-14-15").hide();
  $("#Layer-14").addClass("Wrap-14-15");
  $(".Wrap-14-15").hover(
    function(){ $("#Layer-15").show(); $("#Layer-14").hide(); },
    function(){ $("#Layer-14").show(); $("#Layer-15").hide(); });
  $("#Layer-17").addClass("Wrap-16-17").hide();
  $("#Layer-16").addClass("Wrap-16-17");
  $(".Wrap-16-17").hover(
    function(){ $("#Layer-17").show(); $("#Layer-16").hide(); },
    function(){ $("#Layer-16").show(); $("#Layer-17").hide(); });
  $("#Layer-19").addClass("Wrap-18-19").hide();
  $("#Layer-18").addClass("Wrap-18-19");
  $(".Wrap-18-19").hover(
    function(){ $("#Layer-19").show(); $("#Layer-18").hide(); },
    function(){ $("#Layer-18").show(); $("#Layer-19").hide(); });
  $("#Layer-21").addClass("Wrap-20-21").hide();
  $("#Layer-20").addClass("Wrap-20-21");
  $(".Wrap-20-21").hover(
    function(){ $("#Layer-21").show(); $("#Layer-20").hide(); },
    function(){ $("#Layer-20").show(); $("#Layer-21").hide(); });
  $("#Layer-23").addClass("Wrap-22-23").hide();
  $("#Layer-22").addClass("Wrap-22-23");
  $(".Wrap-22-23").hover(
    function(){ $("#Layer-23").show(); $("#Layer-22").hide(); },
    function(){ $("#Layer-22").show(); $("#Layer-23").hide(); });
  $("#Layer-25").addClass("Wrap-24-25").hide();
  $("#Layer-24").addClass("Wrap-24-25");
  $(".Wrap-24-25").hover(
    function(){ $("#Layer-25").show(); $("#Layer-24").hide(); },
    function(){ $("#Layer-24").show(); $("#Layer-25").hide(); });
































});
