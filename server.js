const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 5000;
app.use(cors());

app.get('/', (req, res) => {
  res.send('Привет, мир!');
});

app.get('/nobitex/:ticket', async (req, res) => {
  const ticket = req.params.ticket.toUpperCase(); // Преобразование параметра в верхний регистр

  try {
    const response = await axios.get(`https://api.nobitex.ir/v2/orderbook/${ticket}`);
    
    const bestBid = response.data.bids[0][0];
    const bestAsk = response.data.asks[0][0];
    
    res.json({ bestBid, bestAsk });
  } catch (error) {
    console.error(error);
    res.status(500).send('Произошла ошибка при получении данных');
  }
});

app.get('/kucoin/:ticket', async (req, res) => {
  const ticket = req.params.ticket.toUpperCase().replace('USDT', '-USDT'); // Преобразование параметра в верхний регистр и замена USDT на -USDT

  try {
    const response = await axios.get(`https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=${ticket}`);
    
    const bestBid = response.data.data.bestBid;
    const bestAsk = response.data.data.bestAsk;
    
    res.json({ bestBid, bestAsk });
  } catch (error) {
    console.error(error);
    res.status(500).send('Произошла ошибка при получении данных с Kucoin API');
  }
});

app.get('/okx/:ticket', async (req, res) => {
  const ticket = req.params.ticket.toUpperCase().replace('USDT', '-USDT'); // Преобразование параметра в верхний регистр и замена USDT на -USDT

  try {
    const response = await axios.get(`https://www.okx.com/api/v5/market/books?instId=${ticket}`);
    
    const data = response.data.data[0];
    const bestBid = data.bids[0][0];
    const bestAsk = data.asks[0][0];
    
    res.json({ bestBid, bestAsk });
  } catch (error) {
    console.error(error);
    res.status(500).send('Произошла ошибка при получении данных с Okx API');
  }
});

app.get('/garantex/:ticket', async (req, res) => {
  const ticket = req.params.ticket; // Параметр остается исходным

  try {
    const response = await axios.get(`https://garantex.org/api/v2/depth?market=${ticket}`);
    const data = response.data;
    
    const bestAsk = data.asks[0].price;
    const bestBid = data.bids[0].price;
    
    res.json({ bestBid, bestAsk });
  } catch (error) {
    console.error(error);
    res.status(500).send('Произошла ошибка при получении данных с Garantex API');
  }
});

app.get('/bybit/:ticket', async (req, res) => {
  const ticket = req.params.ticket.toUpperCase(); // Преобразование параметра в верхний регистр

  try {
    const response = await axios.get(`https://api.bybit.com/spot/v3/public/quote/depth?symbol=${ticket}&limit=2`);
    const bestAsk = response.data.result.asks[0][0];
    const bestBid = response.data.result.bids[0][0];
    
    res.json({ bestBid, bestAsk });
  } catch (error) {
    console.error(error);
    res.status(500).send('Произошла ошибка при получении данных с Bybit API');
  }
});


app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
