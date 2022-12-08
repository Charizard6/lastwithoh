/* eslint-disable linebreak-style */
const nameH1Element = document.querySelector('h1.inline');
const connectNameElement = document.querySelector('span.red');

const inputModalElement = document.querySelector('#inputModal');
const modalSubmitButton = document.querySelector('button.modalSubmit');

const connectNo = document.querySelector('.studentNo');
const connectEmail = document.querySelector('.email');

const setUserName = (name) => {
  nameH1Element.textContent = name;
  connectNameElement.textContent = name;
  localStorage.setItem('name', name);
};
const setUserNo = (sNo) => {
  connectNo.textContent = sNo;
  localStorage.setItem('studentNo', sNo);
};
const setUserEmail = (eemail) => {
  connectEmail.textContent = eemail;
  localStorage.setItem('email', eemail);
};

const localName = localStorage.getItem('name');
const localStudentNo = localStorage.getItem('studentNo');
const localEmail = localStorage.getItem('email');
if (localName) setUserName(localName);
if (localStudentNo) setUserNo(localStudentNo);
if (localEmail) setUserEmail(localEmail);


nameH1Element.onclick = () => {
  inputModalElement.showModal();
};
/* const inputName = prompt('이름을 입력해주세요.');
  if (inputName) {
    localStorage.setItem('name', inputName);
    setUserName(inputName);
  } else {
    alert('이름이 안입력됨');
  }*/
inputModalElement.onclick = (event) => {
  if (event.target.nodeName === 'DIALOG') inputModalElement.close();
  console.log(event.target.nodeName);
};

modalSubmitButton.onclick = () =>{
  const modalFormElement = document.querySelector('.modalForm');
  const formData = new FormData(modalFormElement);

  for (const [key, value] of formData) {
    localStorage.setItem(key, value);
    if (key === 'userName') setUserName(value);
    if (key === 'studentNo') setUserNo(value);
    if (key === 'email') setUserEmail(value);
  }
  inputModalElement.close();
};
