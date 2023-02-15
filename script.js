//funcoes de auxilio
const cs = (element) => document.querySelectorAll(element);
const c = (element) => document.querySelector(element);

//evento de clique na tela
document.body.addEventListener(`keyup`, (event) => {
  playSound(event.code.toLowerCase());
});

const playSound = (sound) => {
  let audioElement = document.querySelector(`#s_${sound}`);
  let keyElement = c(`div[data-key="${sound}"]`);
  //pegando a div que esta sendo adicionada ao evento

  if (audioElement) {
    audioElement.currentTime = 0; //bug de so comecar a tocar quando terminar o outro
    audioElement.play(); //play funcao da tag audio para tocar o som
  }

  if (keyElement) {
    keyElement.classList.add(`active`);
    setTimeout(() => {
      keyElement.classList.remove(`active`);
    }, 200);
  }
};

//pegando o click dos botoes
const botoes = cs(`.key`);
botoes.forEach((botao) => {
  botao.addEventListener(`click`, (el) => {
    playSound(el.currentTarget.getAttribute(`data-key`));
  });
});

//pegando click do botao tocar
const tocar = document.querySelector(`button`).addEventListener(`click`, () => {
  const comp = document.querySelector(`#input`).value;
  if (comp != ``) {
    let compArray = comp.split(``);
    playComposition(compArray);
  }
});

const playComposition = (compArray) => {
  let wait = 0;
  //wait aumenta pra fazer o som sair com um tempo entre eles
  for (let compItem of compArray) {
    setTimeout(() => {
      playSound(`key${compItem}`);
    }, wait);
    wait += 250;
  }
};
