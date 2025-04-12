const express = require('express');
const axios = require('axios');
const app = express();
app.get('/', (req, res) => {
    console.log(res);
  res.send('Hello World!');
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
})
async function getProducts() {
    const API_DOMAIN = 'https://fakestoreapi.com/';
    const response = axios.get(API_DOMAIN +'products');
    return (await response).data;
}

async function getProductswithid(id) {
    const API_DOMAIN = 'https://fakestoreapi.com/';
    const response = axios.get(API_DOMAIN +'products/'+id);
    return (await response).data;
}
app.get('/products', async (req, res) => {
    const products = await getProducts();
    res.send(products);
})
app.get('/products/:id', async (req, res) => {
    console.log(req.params.id);
    const products = await getProductswithid(req.params.id);
    res.send(products);
})