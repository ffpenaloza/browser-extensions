function main() {
  const htmlEl = document.body.parentNode;  
  const mCols = document.getElementById('mCols');
  const mBody = document.getElementsByClassName('mBody')[0];
  const tHead = document.getElementById('tHead');
  const tBody = document.getElementById('t_body');
  const tranCmds = document.getElementById('tranCmds');
  const tExplain = document.getElementById('tExplain');

  htmlEl.style.setProperty('--main-max-width', '100%');
  mCols.style.setProperty('justify-content', 'center');
  mBody.style.setProperty('max-width', '1000px');
  if (tHead) tHead.style.setProperty('width', '100%');
  if (tBody) tBody.style.columnCount = 2;
  if (tranCmds) tranCmds.style.setProperty('margin', '23px 0 0 1000px');
  if (tExplain) tExplain.style.setProperty('margin', '19px 0 0 780px');
}

// Ejecutar la función al cargar la página
main();
