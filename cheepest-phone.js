// find out the cheapest phone in the market
function cheapestPhone(cphones){
     
  let cheapest = phones[0]

    for(const phone of phones){
        // console.log(phone)
        //comparing with price
        if(cheapest.price>phone.price){
            cheapest=phone;
        }
        }
    return cheapest;
}
const phones =[ 
    {name:'samsung s5',price:45000, camera:10,storage:32},
    {name:'walton m32',price:15000, camera:8, storage:8},
    {name:'mi M3',    price:10000, camera:6,storage:8},
    {name:'nokia n95', price:8000,camera:6,storage:7}
];

const myCheepestPhone =cheapestPhone(phones)
console.log('The cheepest phone is', myCheepestPhone)

    