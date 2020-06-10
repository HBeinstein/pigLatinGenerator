function convertWordsToPigLatin(words){
  let pigLatin = words.map(function(word){
    if(word[0]==='a' || word[0]==='e' || word[0]==='i' || word[0]==='o' || word[0]==='u'){
      return word+='ay'
    } else if (word[0]+word[1] === 'qu'){
      word = word.slice(1)
      return word+='qu'
    } else {
      let tempArray = word.split("")
      let newString = ''

      for(let x=0; x<tempArray.length; x++){

        if(tempArray[x] ==='a' || tempArray[x] =='e' || tempArray[x] ==='i' || tempArray[x] ==='o' || tempArray[x] ==='u'){
          let newWord = tempArray.slice(x)
          newWord = newWord.join("")+newString+'ay'
          return newWord
        } 
        newString += tempArray[x]
      }
    }
  })
  return pigLatin
}

function handleWordsToArrayConversion(words){
  // if (words === undefined) {
  //   alert("please enter a valid word!")
  // } else if (words) {
  //   alert("please enter a positive number!")
  // } else {
    let arrayOfWords = words.split(" ")
    return arrayOfWords
  // }
}



$( document ).ready(function() {
  $("#phraseForm").submit(function() {    
    event.preventDefault()

    const userInput = $("#phrase").val();
    
    // Convert to Array
    const userInputInArray = handleWordsToArrayConversion(userInput)

    // Translate to Pig Latin
    const inputTranslatedToPigLatin = convertWordsToPigLatin(userInputInArray)
    
    

    console.log(inputTranslatedToPigLatin.join(" "));



    // TODO:
    //1.) Convert to array DONE
    //2.) Break sentence apart (by word a.k.a .split(" ") DONE

    //3.) Loop through words  
      //a.) If word begins with vowel, concat "way" to the word
      //b.) If word starts with "qu", remove "qu" and concat "qu"
      //b.) If word begins with consonant or "y", split


    // convertToPL(userInput);
    });
});


//For words beginning with a vowel, add "way" to the end.

// For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".

//If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!

// For words beginning with "y", treat "y" as a consonant.


// to lower case the input******