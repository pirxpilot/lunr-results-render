const decorate = require('./decorate');
const padSlice = require('./pad-slice');

module.exports = lunrResultsRender;

function lunrResultsRender(
  results,
  store,
  { parent = '#search-results', template = '#search-result' } = {}
) {
  const templateNode = document.querySelector(template);
  const parentNode = document.querySelector(parent);

  function resultToNode(result) {
    const resultNode = document.importNode(templateNode.content, true);
    const a = resultNode.querySelector('a');
    const resultItem = store[result.ref];
    a.href = result.ref;
    a.innerHTML = resultItem.title;
    const body = resultNode.querySelector('.search-result-body');
    body.innerHTML = buildResultsBody(
      result.matchData.metadata,
      'body',
      resultItem
    );
    return resultNode;
  }

  results.map(resultToNode).forEach(node => parentNode.appendChild(node));
}

function mergePositions(key, metadata) {
  const all = [];
  Object.values(metadata)
    .map(result => result[key])
    .filter(Boolean)
    .forEach(result => all.push(...result.position));

  return all.sort((a, b) => a[0] - b[0]);
}

function buildResultsBody(metadata, key, item) {
  const all = mergePositions(key, metadata);
  if (!all.length) {
    return '';
  }
  const slice = padSlice(item[key], all[0]);
  const decorated = decorate(slice, all);
  return `<p>${decorated}</p>`;
}
