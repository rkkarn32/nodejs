// const name = 'Ramesh'
// const myAge = 30
//
// const user = {
//   name,
//   myAge,
//   location: 'Orlando'
// }
// console.log(user)

//Object distructuring

const product = {
  name:'My Product',
  // price:30,
  stock:23,
  rating:5
}

const {name, price:prodPrice=3,rating=4} = product
product.name='Your Producct'
console.log(product)
console.log(name)
console.log(rating)
console.log(prodPrice)
