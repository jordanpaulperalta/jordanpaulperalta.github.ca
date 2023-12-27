const textInput = document.getElementById('textInput');
const clearBtn = document.getElementById('clearBtn');
const generateBtn = document.getElementById('generateBtn');
const qr = document.getElementById('qr');

generateBtn.addEventListener('click', function () {
  clearUI();
  new QRCode(document.getElementById('qr'), `${textInput.value}`);
});

clearBtn.addEventListener('click', function () {
  textInput.value = '';
  qr.textContent = '';
});

function clearUI() {
  qr.innerHTML = '';
}
