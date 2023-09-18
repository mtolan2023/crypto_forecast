# Predicting Cryptocurrency
## Using LSTM Models to predict the value of Bitcoin, Ethereal and Litecoin


## Overview: 
This project aims to build and employ price prediction algorithms for cryptocurrency. At the onset, we understand the volatility of such prices and the range of unpredictable factors that influence the prices of crypto, which is why the predictions that we are generating here are quite short. We are using a Keras LSTM (long-short-term-memory) model with TensorFlow to analyze and predict pricing on Bitcoin, Ethereum and Litecoin. For each currency, the historical Adjusted Close data was used to build 7 Day sequences, which are fed into the model. The data is scaled logarithmically before processing and then reverse scaled for predictions. We tried several optimizations for each model and saved the best performing model for each currency. We are using this model to predict the future price of each currency. All Crypto data is being pulled from CoinApi through Python.


## Scaled Price Comparison:

Below is a plot which shows the price movement of the 3 currencies over time. Each currency had to be scaled between 0 and 1 in order to put them all on the same plane since their individual values differ greatly. The point of this plot is not to show that one currency is better than another, but it shows their relative value over time and also makes it clear that they largely follow the same path in value. The plot also includes the scaled performance of the NASDAQ (taken from the Yahoo Finance API) so that one can see the correlation or divergence between the index and currency values. 

## Conclusions:

It will take some additional observation and testing to assess the accuracy of the models developed for each currency. Since there are no obvious patterns present in currency price data (as there may be in annual temperature data or any trend with a seasonal pattern), it will be difficult to predict very far ahead. Ideally, these models will be tuned to predict movement more precisely but with this initial deployment, they are at least showing the power of LSTM to learn and train on past patterns.


Citations: These tutorials were used to inform the design of the models and preparation of data.
https://www.youtube.com/watch?v=CbTU92pbDKw
https://www.youtube.com/watch?v=q_HS4s1L8UI&t=1252s
