const container = document.querySelector('#pixel-board');
const sizeEl = document.querySelector('.size');

const Palett = document.getElementsByClassName('color')[0];
const Palett1 = document.getElementsByClassName('color')[1];
const Palett2 = document.getElementsByClassName('color')[2];
const Palett3 = document.getElementsByClassName('color')[3];
const GerarBoard = document.querySelector('#generate-board');
const ResetColors = document.querySelector('#ResetColors');

const cores = document.getElementById('NewColor');
let size = sizeEl.value;
let color = document.querySelector('.selected').style.backgroundColor;
const reset = document.querySelector('#clear-board');

let desenhar = false;

function mudarFundoColor() {
  Palett1.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  Palett2.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  Palett3.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function preencher(sz) {
  if (sizeEl.value < 5) {
    sz = 5;
  }
  container.style.setProperty('--size', sz);
  for (let i = 0; i < sz * sz; i += 1) {
    const div = document.createElement('div');
    div.classList.add('pixel');
    div.addEventListener('mouseover', () => {
      if (!desenhar) return;
      div.style.backgroundColor = color;
    });
    div.addEventListener('mousedown', () => {
      div.style.backgroundColor = color;
    });
    container.appendChild(div);
  }
}
window.addEventListener('mouseup', () => {
  desenhar = false;
});
window.addEventListener('mousedown', () => {
  desenhar = true;
});

function limpar() {
  container.innerHTML = '';
  preencher(size);
}

reset.addEventListener('click', limpar);

GerarBoard.addEventListener('click', () => {
  if (sizeEl.value < 5 && sizeEl.value !== '') {
    size = 5;
  } else if (sizeEl.value > 50) {
    size = 50;
  } else if (sizeEl.value === '') {
    alert('Board inválido!');
  } else {
    size = sizeEl.value;
  }
  limpar();
});

function RemoveSelected() {
  if (Palett.classList.contains('selected')) {
    Palett.classList.remove('selected');
  } else if (Palett1.classList.contains('selected')) {
    Palett1.classList.remove('selected');
  } else if (Palett2.classList.contains('selected')) {
    Palett2.classList.remove('selected');
  } else if (Palett3.classList.contains('selected')) {
    Palett3.classList.remove('selected');
  }
}
function AlterarTamanho() {
  if (Palett.style.width !== '80px') {
    Palett.style.width = '80px';
    Palett.style.height = '80px';
  } if (Palett1.style.width !== '80px') {
    Palett1.style.width = '80px';
    Palett1.style.height = '80px';
  }
  if (Palett2.style.width !== '80px') {
    Palett2.style.width = '80px';
    Palett2.style.height = '80px';
  }
  if (Palett3.style.width !== '80px') {
    Palett3.style.width = '80px';
    Palett3.style.height = '80px';
  }
}

Palett.addEventListener('click', () => {
  RemoveSelected();
  AlterarTamanho();
  cores.classList.remove('selected');
  Palett.classList.add('selected');
  color = document.querySelector('.selected').style.backgroundColor;
  Palett.style.width = '70px';
  Palett.style.height = '70px';
});
Palett1.addEventListener('click', () => {
  RemoveSelected();
  AlterarTamanho();
  cores.classList.remove('selected');
  Palett1.classList.add('selected');
  color = document.querySelector('.selected').style.backgroundColor;
  Palett1.style.width = '70px';
  Palett1.style.height = '70px';
});
Palett2.addEventListener('click', () => {
  RemoveSelected();
  AlterarTamanho();
  cores.classList.remove('selected');
  Palett2.classList.add('selected');
  color = document.querySelector('.selected').style.backgroundColor;
  Palett2.style.width = '70px';
  Palett2.style.height = '70px';
});
Palett3.addEventListener('click', () => {
  RemoveSelected();
  AlterarTamanho();
  cores.classList.remove('selected');
  Palett3.classList.add('selected');
  color = document.querySelector('.selected').style.backgroundColor;
  Palett3.style.width = '70px';
  Palett3.style.height = '70px';
});
cores.addEventListener('click', () => {
  RemoveSelected();
  AlterarTamanho();
  cores.classList.add('selected');
  color = document.querySelector('#NewColor').value;
});
cores.addEventListener('change', () => {
  color = document.querySelector('#NewColor').value;
});
ResetColors.addEventListener('click', () => {
  mudarFundoColor();
});
mudarFundoColor();
preencher(size);
