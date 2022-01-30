class Timer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.finalDate = targetDate;
    this.creatingFaceClock();
    this.creatingTitleDate();
  }

  getDataForTimer() {
    const time = this.finalDate - Date.now();
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return {
      time,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  creatingFaceClock() {}

  creatingTitleDate() {}
}
