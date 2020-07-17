function feetToMile (feet){
  if(feet > 0){
    var mile = feet/5280;
  }  
  else{
      console.log("length can not be negative");
  }
    return mile
}
  






function woodCalculator (chair, table, bed ){
    var chairNumber = chair * 2;
    var tableNumber = table * 4;
    var bedNumber = bed * 7;
    var totalWood = chairNumber + tableNumber + bedNumber;
    return totalWood;  
}






function brickCalculator (buildingStory){
    var feetCount = 15 * 1000;
    if(buildingStory >= 1 && buildingStory <= 10 ){
        var totalBrick = feetCount * buildingStory;
    }

    var firstStory10 = 15000*10;
    var feetCount2 =  (12 * 1000);
    if(buildingStory >= 11 && buildingStory <= 20){   
        var totalBrick = feetCount2 * (buildingStory -10) + firstStory10; 
    }

    var secondStory10 = 12000 * 10;
    var feetCount3 =  10 * 1000;
    if(buildingStory >= 21 && buildingStory <=30){
        var totalBrick = feetCount3 * (buildingStory-20) + secondStory10 + firstStory10;
        }

    
    if(buildingStory > 30){
        console.log("no more than 30 story")

    }

    
     
    
     return totalBrick;   
        
}

  
 





function tinyFriend (uniqueName){
    const nameArray = uniqueName[0].split(' ');
    const stringSorted = nameArray.sort(
        (uniqueNameA, uniqueNameB ) => {
                   return uniqueNameA.length - uniqueNameB.length;

        }
    );
    
    
    return stringSorted[0]
}

var uniqueName =['felix ken tripolez krilia tofer luck'];





