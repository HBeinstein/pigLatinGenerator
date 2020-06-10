function pigLatin(array) {
  if (array[0] === "a" || array[0] === "e" || array[0] === "i" || array[0] === "o" || array[0] === "u") {
    return array.concat('a','y');
  } else if (array[0] + array[1] === "qu") {
    return array.slice(2).concat("q", "u", "a", "y");
  } else {
    let tempArray = [];

    for(let x=0; x<array.length; x++){

      if(array[x] ==='a' || array[x] =='e' || array[x] ==='i' || array[x] ==='o' || array[x] ==='u'){
        // let newWord = tempArray.slice(x)
        // newWord = newWord.join("")+newString+'ay'
        // return newWord
   
      } 

      array[x] += tempArray;
}
}
}

function convertToArray(string) {
  return string.split("");
}

function handleErrors(sentence) {
  const regex = /^[A-Za-z ]+$/
  const isValid = regex.test(sentence);
  if (!isValid) {
      alert("Please only enter letters!");
  }
  return sentence.toLowerCase();
}

$( document ).ready(function() {
  $("form").submit(function() {
    event.preventDefault();
    const formInput = $("#userPhrase").val();
    const noErrors = handleErrors(formInput);   
    const inputArrayValue = convertToArray(noErrors);
    const pigLatinTranslated = pigLatin(inputArrayValue);

  });
});
