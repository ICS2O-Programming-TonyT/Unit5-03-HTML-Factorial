
const form = document.getElementById('converter-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  let sentence = document.getElementById('sentence').value;
  let repeat = parseInt(document.getElementById('repeat').value);
  let string = "";
  function repeating() {
    for (let counting = 0; counting <= repeat; counting++) {
      string = string + sentence + "<br>"
    }
    return string
  }
  resultDiv.innerHTML = `${repeating()}`
});
