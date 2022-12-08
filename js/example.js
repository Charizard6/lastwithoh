/* eslint-disable linebreak-style */
const nameH1Element = document.querySelector('h1.inline');
const connectNameElement = document.querySelector('span.red');

const setUserName = (name) => {
  nameH1Element.textContent = name;
  connectNameElement.textContent = name;
};

const localName = localStorage.getItem('name');
if (localName) setUserName(localName);


nameH1Element.onclick = () => {
  const inputName = prompt('이름을 입력해주세요.');
  if (inputName) {
    localStorage.setItem('name', inputName);
    setUserName(inputName);
  } else {
    alert('이름이 안입력됨');
  }
};
