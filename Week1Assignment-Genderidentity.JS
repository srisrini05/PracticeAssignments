var genderType = "female";
function printGender ( ){
let genderColor = "Brown";
if (genderType === "female"){
  //var genderAge = 30;
  let genderAge = 32;
let genderColor = "Pink";
//console.log(genderColor);
console.log(genderAge);
}
console.log(genderColor);
//console.log (genderAge);


}
printGender();
//conclusion - Var is function scoped whereas let and const are blocked scoped. Var can be re-declared and updated whereas let can be updated but not re-declared. Const cannot be updated nor re-declared.