


function handleErrors(sentence) {
  const regex = /^[A-Za-z]+$/
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
    
    console.log(noErrors);
  });
});

