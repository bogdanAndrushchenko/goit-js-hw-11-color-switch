import { colors, refs, randomIntegerFromInterval } from './source';

const changeColorBody = {
  intervalId: null,
  isActivBtnStart: false,

  start() {
    if (this.isActivBtnStart) {
      refs.start.removeEventListener('click', clickStart());
      return;
    }
    this.isActivBtnStart = true;
    this.intervalId = setInterval(changeColor, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.isActivBtnStart = false;
    refs.body.style.backgroundColor = '#fff';
  },
};

function changeColor() {
  const index = randomIntegerFromInterval(0, colors.length - 1);
  refs.body.style.backgroundColor = colors[index];
  console.log(colors[index]);
}

function clickStart() {
  return changeColorBody.start.bind(changeColorBody);
}

function clickStop() {
  return changeColorBody.stop.bind(changeColorBody);
}

refs.start.addEventListener('click', clickStart());
refs.stop.addEventListener('click', clickStop());
