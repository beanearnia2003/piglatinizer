$( "document" ).ready(function() {
    $("#button").click(function(){
        $(".output").text("boo");
        let output = $(".input").val()
        let piglatinWord = pigLatinizer(output);
    });
});
function pigLatinizer(word) {
    //
}
function checkVowel(str){
  var firstLetterAy=str[0];
  var vowels = ["a","e","i","o","u"];

  if(vowels.includes(firstLetterAy)){
    return true;
  }
  else {
      return false;
  }
}

