import {
  colors,
  refs,
  randomIntegerFromInterval
} from './source';

class Switch_color {
  constructor(intervalId) {
    this.intervalId = intervalId;
  }
  _changeColor() {
    const index = randomIntegerFromInterval(0, colors.length - 1);
    refs.body.style.backgroundColor = colors[index];
  }
  start() {
    refs.stop.removeAttribute('disabled');
    refs.start.setAttribute('disabled', '');
    this.intervalId = setInterval(this._changeColor, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
    refs.start.removeAttribute('disabled');
    refs.stop.setAttribute('disabled', '');
    this.intervalId = null;
    refs.body.removeAttribute('style');
  }
}

const changeColorBody = new Switch_color();

const clickStart = () => changeColorBody.start()
const clickStop = () => changeColorBody.stop()

refs.start.addEventListener('click', clickStart);

refs.stop.addEventListener('click', clickStop);
