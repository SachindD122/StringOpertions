let input = document.querySelector("#i1");
let go = document.querySelector("#sub");
let len = document.querySelector('#i2');
let up = document.querySelector('#i3');
let lr = document.querySelector('#i4');
let mdC = document.querySelector('#i5');
let tot = document.querySelector('#i6');
let vowel = document.querySelector("#i7");
let consonnet = document.querySelector("#i8");
let upper = document.querySelector("#i9");
go.addEventListener('click', () => {
 len.innerHTML = `Length is: ${input.value.length}`;
 up.innerHTML = `Upper Case: ${input.value.toUpperCase()}`;
 lr.innerHTML = `Lower Case: ${input.value.toLowerCase()}`;

})
go.addEventListener('click', () => {
 let middle = input.value.length;
 if (middle % 2 == 0) {
  mdC.innerHTML = "Middle Char:" + input.value.slice((middle / 2) - 1, (middle / 2) + 1);
 } else {
  mdC.innerHTML = "Middle Char:" + input.value.charAt(Math.floor(middle / 2));
 }
})
go.addEventListener('click', () => {
 let totC = input.value;
 let count = 0;
 let i;
 for (i = 0; i < totC.length; i++) {

  if (totC[i] == " ") {
   count++;
  }
 }
 tot.innerHTML = "Words count" + count;
})
go.addEventListener('click', () => {
 let letters = input.value;
 let vow = 0;
 let con = 0;
 let i;
 for (i = 0; i < letters.length; i++) {
  if (letters[i] == 'a' || letters[i] == 'e' || letters[i] == 'i' || letters[i] == 'o' || letters[i] == 'u' ||
   letters[i] == 'A' || letters[i] == 'E' || letters[i] == 'I' || letters[i] == 'O' || letters[i] == 'U'
  ) {
   vow++;
  }
  else {
   con++;
  }
 }

 vowel.innerHTML = "vowel Count: " + vow;
 consonnet.innerHTML = "consonent Count: " + con;
})
go.addEventListener('click', () => {
 const str = input.value;
 debugger;
 const upperStr = str.toLowerCase()                 // Convert entire string to lowercase
  .split(' ')                    // Split string into words by space
  .map((word, index) =>
   index == 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)  // Capitalize first letter of each word except first
  )
  .join('');
 upper.innerHTML = "camel Case: " + upperStr;

})