module.exports = decorate;

function decorate({ slice, start = 0 }, positions) {
  let decorated = '';
  let from = 0;
  for ( let pos of positions ) {
    let s = pos[0] - start;
    if (s < 0) {
      continue;
    }
    if (s > slice.length) {
      break;
    }
    let e = s + pos[1];
    decorated += slice.slice(from, s) + `<mark>` + slice.slice(s, e) + '</mark>';
    from = e;
  }
  decorated += slice.slice(from);
  return decorated;
}
