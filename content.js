// content.js
//alert("Hello!")
const events = ["keydown", "keypress", "keyup", "change", "input"];
 
const handler = event => {
    event.stopPropagation();
    event.preventDefault();
    return false;
};
 
const disableAllUserEvents = () => {
    for (let i = 0, l = events.length; i < l; i++) {
        document.addEventListener(events[i], handler, true);
    }
};
 
const enableAllUserEvents = () => {
    for (let i = 0, l = events.length; i < l; i++) {
        document.removeEventListener(events[i], handler, true);
    }
};
 
function typeInTextarea(newText, el = document.activeElement) {
  const start = el.selectionStart
  const end = el.selectionEnd
  const text = el.value
  const before = text.substring(0, start)
  const after  = text.substring(end, text.length)
  el.value = (before + newText + after)
  el.selectionStart = el.selectionEnd = start + newText.length
  el.focus()
}
 
document.onkeydown = function(event) {
    console.log(event.key);
 
    if (event.key != '(' && event.key != '{' && event.key != '[') return true;
 
    disableAllUserEvents();
    typeInTextarea(event.key);
    enableAllUserEvents();
 
    event.stopPropagation();
    event.preventDefault();
    return true;
}