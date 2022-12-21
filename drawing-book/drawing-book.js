function pageCount(n, p) {
  let pageFlips = 0;
  if (p - 1 < n - p) {
    for (let i = 1; i <= p; i += 2) {
      if (p > i) {
        pageFlips++;
      }
    }
  } else {
    if (n % 2 === 0 && n - p === 1) pageFlips = 1;
    for (let i = n; i >= p; i -= 2) {
      if (p < i - 1) {
        pageFlips++;
      }
    }
  }
  return pageFlips;
}
