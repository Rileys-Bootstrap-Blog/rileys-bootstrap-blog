/* This script and many more are available free online at
The JavaScript Source!! http://www.javascriptsource.com
Created by: Anonymous | http://musikimiz.googlepages.comLicensed under: Creative Commons License
 */

function pixTimeChange() {
  var t=new Date();
  var h = t.getHours();
  var r1="/img/CE9A9821-D952-426F-A34F-7D6CBBE0EDC4.jpeg";
  var r2="/img/DD5C6A36-5C3D-41EE-ADBF-A2748A24CA5F.jpeg";
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
