/* eslint-disable linebreak-style */
const nameH1Element = document.querySelector('h1.inline');
nameH1Element.onClick = () => {
  const inputName = prompt('이름을 입력해주세요.');
  nameH1Element.textContent = inputName;
};
