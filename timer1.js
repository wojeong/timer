
const timers = process.argv.slice(2);
const beep = function () {
  process.stdout.write('\x07');
};
const simpleTimer = function (seconds) {
  if (seconds === NaN || seconds < 0) {
    
  }
  return seconds.forEach((second) =>
    setTimeout(() => {
      beep();
    }, second * 1000)
  );
};
simpleTimer(timers); 