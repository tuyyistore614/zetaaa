const express = require('express');
const cors = require('cors');
const productsRoute = require('./routes/products');
const ordersRoute = require('./routes/orders');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/products', productsRoute);
app.use('/api/orders', ordersRoute);

app.get('/', (req, res) => res.send('Tuyyi Store Backend API 🚀'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));