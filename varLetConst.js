for (var i = 0; i < 3; i++) {
  function inner(j) {
    setTimeout(() => {
      console.log(j);
    }, j * 1000);
  }
  inner(i);
}
