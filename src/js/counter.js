(() => {
  const step = 1;

  function outNum(num, elem) {
    const places = document.querySelector(elem);
    let counter = 1;

    let interval = setInterval(() => {
      counter += step;
      if (counter === num) {
        clearInterval(interval);
      }
      places.innerHTML = counter;
    }, 80);
  }

  outNum(16, '.header__cafes-number');
  outNum(23, '.header__trucks-number');
})();
