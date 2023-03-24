

var popup = document.getElementById('fileExplorer');
var fileExplorer = document.getElementById('fileExplorer');

function minimize() {
    popup.style.scale = '0.1';
    popup.style.marginTop = 450 + 'px';
    popup.style.visibility = 'hidden';
};
function close() {
    fileExplorer.style.display = 'none';
    fileExplorer.style.visibility = 'hidden';
};