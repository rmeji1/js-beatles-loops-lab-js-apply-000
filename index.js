// add solution here
function theBeatlesPlay(musicians, instruments){
  var sentences = Array()
  
  for (var k = 0; k < musicians.length; k++){
    sentences.push(`${musicians[k]} plays ${instruments[k]}`)
    console.log(sentences)
  }
}