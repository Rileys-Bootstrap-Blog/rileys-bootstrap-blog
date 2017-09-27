/* This script and many more are available free online at
The JavaScript Source!! http://www.javascriptsource.com
Created by: Anonymous | http://musikimiz.googlepages.comLicensed under: Creative Commons License
 */

function pixTimeChange() {
  var t=new Date();
  var h = t.getHours();
  var r1="/img/630084ED-89E6-4B0A-AFA7-8D1B86BE526B.jpeg";
  var r2="/img/868E452B-E577-40A2-9BC2-120B831CFC03.gif";
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
