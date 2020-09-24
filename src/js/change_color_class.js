import { colors, refs, randomIntegerFromInterval } from './source';

class Switch_color {
    constructor({
        intervalId,
        isActivBtnStart,
        time,

    }) {

        this.intervalId = intervalId;
        this.isActivBtnStart = isActivBtnStart;
        this.time = time;
    }
    changeColor() {
        const index = randomIntegerFromInterval( 0, colors.length - 1);
        refs.body.style.backgroundColor = colors[index];
    }
    start() {
        this.isActivBtnStart = true;
        refs.start.setAttribute("disabled", "disabled")
        this.intervalId = setInterval(this.changeColor, this.time);

    }
    stop() {
        clearInterval(this.intervalId);
        refs.start.removeAttribute("disabled")
        this.intervalId = null;
        this.isActivBtnStart = false;
        refs.body.style.backgroundColor = '#fff';
    }

}
const changeColorBody = new Switch_color( {
    intervalId: null,
    isActivBtnStart: false,
    time: 1000,
})



refs.start.addEventListener('click', changeColorBody.start.bind(changeColorBody));
refs.stop.addEventListener('click', changeColorBody.stop.bind(changeColorBody));
