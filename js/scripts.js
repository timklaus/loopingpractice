$(document).ready(function() {
 // $("form#test").submit(function() {
  // var inputs = ["input1","input2","input3","input4"];
   // var userInput = $("input#" + input).val();
  //inputs.forEach(function(input) {
     //var userInput = $("input#" + input).val();
     //$("." + input).text(userInput);
     ////debugger
     //console.log(userInput)
     //("#thangs").append(userInput);
   //});
  //});
  $("form#iceCreamm").submit(function() {
    var kinds = ["iceCream1","iceCream2","iceCream3"];
    kinds.forEach(function(kind) {
      console.log(kinds)
      var kind = $("input#" + kind).val();
      // var general = $("input#iceCream" + kind).val();
      console.log(kind)
      debugger
      //$("." + "#input").text(general);
      //("#flavor").append(general);
      event.preventDefault();

    })
  })
});