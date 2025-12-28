let arrNames = ['AbodA','Esraa','Ahmed', 'Mohamed', 'Sayed', 'Gamal', 'Ayman'];
let arrGrades = [55, 75, 85, 95, 65, 45, 35];
let avgGrade = 0;
let maxGrade = Math.max(...arrGrades);


document.getElementById("allGrades").onclick = function(){
let n="";
for(let i = 0; i < arrNames.length; i++){
   n += (`Student Name: ${arrNames[i]} - Grade: ${arrGrades[i]}`);
    n += (`<br>`);
    avgGrade += arrGrades[i];
}   

avgGrade = avgGrade / arrGrades.length;
n += (`Average Grade is: ${avgGrade}`);
n += (`<br>`);
n += (`Max Grade is: ${maxGrade}`);
n += (`<br>`);

document.getElementById("result").innerHTML = n;
}
// let inputName = prompt("Enter Student Name:");
// let index = arrNames.indexOf(inputName);
// if(index !== -1){
//     console.log(`${inputName} with Grade: ${arrGrades[index]}`);
//     if(arrGrades[index] >= 50){
//         console.log("Status: Passed");
//     }else{
//         console.log("Status: Failed");
//     }
// }
// else{

//     console.log("Student Not Found");
// }

document.getElementById("Btn").onclick = function(){

    let name = document.getElementById("name").value;
   let index = arrNames.indexOf(name);

if(index !== -1){
    document.writeln(`${name}  -->  Grade: ${arrGrades[index]}`);
    if(arrGrades[index] >= 50){
        document.writeln("Status --> Passed");
    }else{
       document.writeln("Status: Failed");
    }
}
else{

    document.writeln("Student Not Found");
}
}
