const btnCheck = document.querySelector('.btn--check');
const inputField = document.querySelector('.input--field');
const vowelList = document.querySelector('.vowel--list');
const numberOfVowels = document.querySelector('.number--of--vowels');
const showList = document.querySelector('.show--list');
const btnHidden = document.querySelector('.btn--hidden');
const showModal = document.querySelector('.show--modal');
const overlay = document.querySelector('.overlay');
const modalBodyText = document.querySelector('.modal--body--text');

const vowel = {
  characters: [],
  numberOfVowels: 0,
};
let s;
btnCheck.addEventListener('click', function () {
  const inputValue = inputField.value;
  let totalNumberOfVowels = 0;
  //   console.log(inputValue);
  for (let s = 0; s < inputValue.length; s++) {
    const character = inputValue.charAt(s);
    if (
      character === 'A' ||
      character === 'E' ||
      character === 'I' ||
      character === 'O' ||
      character === 'U' ||
      character === 'a' ||
      character === 'e' ||
      character === 'i' ||
      character === 'o' ||
      character === 'u'
    ) {
      vowel.characters.push(character);
      totalNumberOfVowels++;
    }
  }
  vowel.numberOfVowels = totalNumberOfVowels;
  //   console.log(vowel);
  s = vowel.characters.toString();
  console.log(s.substring(0, 10));
  if (vowel.numberOfVowels > 10) {
    vowelList.textContent = s.substring(0, 10) + '...';
    numberOfVowels.textContent = vowel.numberOfVowels;
    btnHidden.style.display = 'block';
    showList.style.display = 'block';
    vowel.characters = [];
    vowel.numberOfVowels = 0;
  } else {
    vowelList.textContent = s;
    numberOfVowels.textContent = vowel.numberOfVowels;
    btnHidden.style.display = 'none';
    showList.style.display = 'block';
  }
});
btnHidden.addEventListener('click', function () {
  modalBodyText.textContent = s;
});
