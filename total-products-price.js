

/* let cartTotal = 0;
for (const product of ShoppingCart){
     const productTotal=product.price * product.quantity;
     cartTotal+=productTotal
     console.log(cartTotal)
} */

function totalShopping(cart){
    let cartTotal=0;
    for(const product of cart){
        const productTotal=product.price+product.quantity;
        cartTotal+=productTotal;
    }
    return cartTotal;
}
var shoppingCart =[
    {name:"laptop",price:60000,quantity:2},
    {name:"iphone",price: 50000,quantity:1},
    {name:"apple watch",price:40000,quantity:1},
    {name:"airpods pro",price:2000,quantity:2},
    {name:"Nike Air max",price:1000,quantity:10}

]
let myShoppingCart=totalShopping(shoppingCart)
console.log("Your total bill is :", myShoppingCart)


