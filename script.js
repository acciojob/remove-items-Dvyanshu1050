//your JS code here. If required.
// button select karo
let btn = document.querySelector('input[type="button"]');

btn.addEventListener("click", function () {

  let select = document.getElementById("colorSelect");

  // selected index lo
  let index = select.selectedIndex;

  // remove karo
  if (index !== -1) {
    select.remove(index);
  }

});