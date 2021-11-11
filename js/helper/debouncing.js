export default function Debouncing(callBack, delay) {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callBack(...args);
      timer = null;
    }, delay);
  };
}
