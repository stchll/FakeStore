fetch('https://fakestoreapi.com/products')
.then(requie=>requie.json())
.then(data=> {
    console.log(data);
})