function staircase(n) {
  for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = 0; j < n; j++) {
      if (i + j >= n - 1) {
        line += "#";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}
