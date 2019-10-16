$( "document" ).ready(function() {



    $("#button").click(function(){
        // write code here
        $(".output").text("boo");
        let output=$(".input").val()
    });

});

function checkVowel(str){
  var firstLetterAy=str[0];
  var vowels = ["a","e","i","o","u"];

  if(vowels.includes(firstLetterAy)){
    return "starts with consonant";
  }
}
