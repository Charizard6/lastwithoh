/* eslint-disable linebreak-style */
const nameH1Element = document.querySelector('h1.inline');
const localName = localStorage.getItem('name');
nameH1Element.textContent = localName;

nameH1Element.onClick = () => {
  const inputName = prompt('이름을 입력해주세요.');
  localStorage.setItem('name', inputName);
  nameH1Element.textContent = inputName;
};
