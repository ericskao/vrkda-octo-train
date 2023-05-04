export default class Timer {
  constructor(callback, delay) {
    let timerId,
      start,
      remaining = delay;

    this.pause = function () {
      console.log('paused', timerId);
      window.clearTimeout(timerId);
      timerId = null;
      remaining -= Date.now() - start;
    };

    this.resume = function () {
      console.log('resume');
      if (timerId) {
        return;
      }

      start = Date.now();
      timerId = window.setTimeout(callback, remaining);
    };

    this.clear = function () {
      window.clearTimeout(timerId);
    };

    this.resume();
  }
}
