console.log('your code goes here .....!');

const button = document.querySelector('button')!;

if (button) {
  // work around the exclamation mark
  button.addEventListener('click', () => {
    console.log('Clicked');
  });
}
