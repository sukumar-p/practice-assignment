// var borrowedAmout  =   prompt("Borrowed Amount");
//   var hector =  prompt("How many acers the land have?");
//   var IntrestRate = prompt("Enter the Interest Rate");
//  var finalAmout = (((borrowedAmout*IntrestRate ) / 100) + (borrowedAmout))
//   var prediction = finalAmout/hector;
//   finalAmout = IntrestRate;
//     console.log("Final Amout " +  finalAmout);
//     console.log("Will he be able to repay ? " + (1000>prediction) )



// var season=prompt("enter season");

// switch(season){
//     case 'winter':
//     console.log("wear thick cloths");
//     break;
//     case 'rainy':
//     console.log("take umbrella");
//     break;
//     case 'summer':
//     console.log("wear thin cloths");
//     break;
// }

var codeCamp = ['Praveen','Sravanthi', "Vipin", 50, ["safs","asfasdf","asdfasdf"],"I am new!"];
    var codeCampTrainer = ['Ganesh','Nagesg', "Rohith"];
    for(i=0; i<codeCamp.length; i++){
       
        document.getElementById("trainees").innerHTML += codeCamp[i]+ "<br/>";  
        
    };