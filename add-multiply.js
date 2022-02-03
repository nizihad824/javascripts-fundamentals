 
 /* chairWood =3cft/chair
 table=10cft
 bed=50cft */
 
 function woodCalculator(chairQuantity,tableQuantity,bedQuantity){

    const perChairWood =3;
    const perTableWood =10;
    const perBedWood =50;
    // wood calculation
    const chairWoodQuantity = chairQuantity *perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;

   //adding all wood quantity  

   const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
   return totalWood;


 } 

 const firstOption =woodCalculator(1,0,0)
 console.log("Total wood will be:",firstOption)