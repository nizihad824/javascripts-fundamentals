function aniumalCount(miles){
    const animalDensityFirst10miles = 10;
    const animalDensitySecond10miles =50;
    const animalDensityRestmiles  =60;
    if(miles<=10){
        const count =animalDensityFirst10miles*miles
       return count;
    }
    else if(miles<=20){
        const first10miles =miles *animalDensityFirst10miles;
        const restMiles=miles - 10;
        const second10miles = restMiles * animalDensitySecond10miles;
        const totalAnimals =first10miles +second10miles;
        return totalAnimals;
        
    }
    else{
        const first10miles =10 * animalDensityFirst10miles;
        const second10miles=10 * animalDensitySecond10miles;
        const restMiles =miles - 20;
        const restGivenMiles = restMiles * animalDensityRestmiles;
        const totalAnimals =first10miles + second10miles+ restGivenMiles;

        return totalAnimals;


    }
    
}

const myVisitedAnimals=aniumalCount(25)
console.log("You have visited ", myVisitedAnimals, "Animals")
