var oldId = "";
function showBtn(btnId) {
  if (oldId != "") {
      var oldRow = document.getElementById(oldId);
      oldRow.style.display = 'none';
  }
  oldId = btnId;
  var row = document.getElementById(btnId);
  row.style.display = 'flex';
}