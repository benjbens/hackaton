let formDetail = document.forms[0];
let details = []
function retrieveInfo(evt){
  evt.preventDefault();
  let firstInput = evt.target.elements[0].value
  let secondInput = evt.target.elements[1].value
  let mail = evt.target.elements[2].value
  let passWord = evt.target.elements[3].value
  let date = evt.target.elements[4].value
  let david = {
    firstInput, secondInput, mail, passWord, date
  }
  details.push(david)
  console.log(details)
  let paragraph = document.querySelector("#hello")
  paragraph.textContent = `Hello ${firstInput} ${secondInput}`;

}
formDetail.addEventListener("submit", retrieveInfo)