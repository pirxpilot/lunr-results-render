module.exports = padSlice;

function padSlice(text, [start, len], { pattern = '. ', pad = 150 } = {}) {
  let sliceStart = text.lastIndexOf(pattern, start);
  if (sliceStart < 0) {
    sliceStart = 0;
  } else {
    sliceStart += pattern.length;
  }
  let sliceEnd = text.indexOf(pattern, start + len + pad);
  if (sliceEnd < 0) {
    sliceEnd = text.length;
  } else {
    sliceEnd += 1;
  }
  return {
    slice: text.slice(sliceStart, sliceEnd),
    start: sliceStart
  };
}
