
function reverseAString(str) {
  if (!str || str.length < 2 || typeof str !== "string") return;

  
  let newStr = "";
  for (let i = str.length -1; i >= 0; i--) {
    newStr = newStr.concat(str.charAt(i));
  }
  return newStr;
}

const result = reverseAString("This is what I was trying to tell you");
console.log(result);