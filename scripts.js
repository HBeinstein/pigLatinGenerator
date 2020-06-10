function handleErrors(sentence) {
  const regex = /^[A-Za-z]+$/
  const isValid = regex.test(sentence);
  if (!isValid) {
      alert("Only Alphabet allowed.");
  }
  return isValid;
}

// function handleErrors(sentence) {
//   if (sentence.includes('#') || sentence.includes("!")) {
//     console.log("Please enter a valid word!");
//   } 
// }


$( document ).ready(function() {
  $("form").submit(function() {
    event.preventDefault();
    const formInput = $("#userPhrase").val();

    handleErrors(formInput);




  });
});

// .search(/[\|&;\$%@"?'-<>\(\)\+,/]/g,"")