const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 5000;
const fs = require('fs');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Привет, мир!');
});


app.post('/updateAPIs', (req, res) => {
  const newData = req.body;

  fs.writeFile('APIs.json', JSON.stringify(newData), (err) => {
      if (err) {
          res.status(500).send('Error updating APIs.json file');
      } else {
          res.status(200).send('APIs.json file updated successfully');
      }
  });
});


// nobitex
app.get('/nobitex/:ticket', async (req, res) => {
  const ticket = req.params.ticket.toUpperCase();

  try {
    const response = await axios.get(`https://api.nobitex.ir/v2/orderbook/${ticket}`);
    
    const bestBid = response.data.bids[0][0];
    const bestAsk = response.data.asks[0][0];

    const asks = response.data.asks.slice(0, 50).map(item => ({ price: item[0], volume: item[1] }));
    const bids = response.data.bids.slice(0, 50).map(item => ({ price: item[0], volume: item[1] }));

    const responseData = {
      bestBid,
      bestAsk,
      asks,
      bids
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Произошла ошибка при получении данных');
  }
});

// kukoin
app.get('/kucoin/:ticket', async (req, res) => {
  const ticket = req.params.ticket.toUpperCase().replace('USDT', '-USDT');

  try {
    const response = await axios.get(`https://api.kucoin.com/api/v1/market/orderbook/level2_100?symbol=${ticket}`);
    const data = response.data.data;

    const asks = data.asks.slice(0, 50).map(item => ({ price: item[0], volume: item[1] }));
    const bids = data.bids.slice(0, 50).map(item => ({ price: item[0], volume: item[1] }));

    const bestAsk = asks[0].price;
    const bestBid = bids[0].price;

    const responseData = {
      bestAsk,
      bestBid,
      asks,
      bids
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching data from the KuCoin API');
  }
});

// okx
app.get('/okx/:ticket', async (req, res) => {
  const ticket = req.params.ticket.toUpperCase().replace('USDT', '-USDT');

  try {
    const response = await axios.get(`https://www.okx.com/api/v5/market/books?sz=50&instId=${ticket}`);
    
    const data = response.data.data[0];
    const asks = data.asks.slice(0, 50).map(item => ({ price: item[0], volume: item[1] }));
    const bids = data.bids.slice(0, 50).map(item => ({ price: item[0], volume: item[1] }));

    const bestAsk = asks[0].price;
    const bestBid = bids[0].price;

    const responseData = {
      bestAsk,
      bestBid,
      asks,
      bids
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Произошла ошибка при получении данных с Okx API');
  }
});

// garantex
app.get('/garantex/:ticket', async (req, res) => {
  const ticket = req.params.ticket; 

  try {
    const response = await axios.get(`https://garantex.org/api/v2/depth?market=${ticket}`);
    const data = response.data;
    
    
    const asks = data.asks.slice(0, 50).map(item => ({ price: (item.amount / item.volume).toFixed(2), volume: item.volume}));
    const bids = data.bids.slice(0, 50).map(item => ({ price: (item.amount / item.volume).toFixed(2), volume: item.volume}));
    const bestAsk = parseFloat(asks[0].price).toFixed(2);
    const bestBid = parseFloat(bids[0].price).toFixed(2);

    const responseData = {
      bestAsk,
      bestBid,
      asks,
      bids
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching data from the Garantex API');
  }
});

// bybit
app.get('/bybit/:ticket', async (req, res) => {
  const ticket = req.params.ticket.toUpperCase();

  try {
    const response = await axios.get(`https://api.bybit.com/spot/v3/public/quote/depth?symbol=${ticket}&limit=50`);
    
    const bestBid = response.data.result.bids[0][0];
    const bestAsk = response.data.result.asks[0][0];

    const asks = response.data.result.asks.slice(0, 50).map(item => ({ price: item[0], volume: item[1] }));
    const bids = response.data.result.bids.slice(0, 50).map(item => ({ price: item[0], volume: item[1] }));

    const responseData = {
      bestBid,
      bestAsk,
      asks,
      bids
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Произошла ошибка при получении данных с Bybit API');
  }
});



app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});

