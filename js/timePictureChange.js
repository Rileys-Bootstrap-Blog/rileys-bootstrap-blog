/* This script and many more are available free online at
The JavaScript Source!! http://www.javascriptsource.com
Created by: Anonymous | http://musikimiz.googlepages.comLicensed under: Creative Commons License
 */

function pixTimeChange() {
  var t=new Date();
  var h = t.getHours();
  var r1="/img/73B545D0-0250-4E24-989B-F6C034D99230.png";
  var r2="/img/59FB95C5-0135-4DD0-ADB4-0F23556E21DF.jpeg";
  var el=document.getElementById('myimage');

  // See the time below. Note: The time is in 24 hour format.
  // In the example here, "7" = 7 AM; "17" =5PM.
  el.src = (h>=6 && h<18) ? r1 : r2;
}

// Multiple onload function created by: Simon Willison
// http://simonwillison.net/2004/May/26/addLoadEvent/
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

addLoadEvent(function() {
  pixTimeChange();
});
