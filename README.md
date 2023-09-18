# Predicting Cryptocurrency
## Using LSTM Models to predict the value of Bitcoin, Ethereum and Litecoin


## Overview: 
This project aims to build and employ price prediction algorithms for cryptocurrency. At the onset, we understand the volatility of such prices and the range of unpredictable factors that influence the prices of crypto, which is why the predictions that we are generating here are quite short. We are using a Keras LSTM (long-short-term-memory) model with TensorFlow to analyze and predict pricing on Bitcoin, Ethereum and Litecoin. For each currency, the historical Adjusted Close data was used to build 7 Day sequences, which are fed into the model. The data is scaled logarithmically before processing and then reverse scaled for predictions. We tried several optimizations for each model and saved the best performing model for each currency. We are using this model to predict the future price of each currency. All Crypto data is being pulled from CoinApi through Python.


## Scaled Price Comparison:

The website also contains a plot that shows the price movement of the 3 currencies over time. Each currency had to be scaled between 0 and 1 in order to put them all on the same plane since their individual values differ greatly. The point of this plot is not to show that one currency is better than another, but it shows their relative value over time and also makes it clear that they largely follow the same path in value. The plot also includes the scaled performance of the NASDAQ (taken from the Yahoo Finance API) so that one can see the correlation or divergence between the stock index and currency values. 

![newplot (1)](https://github.com/mtolan2023/crypto_forecast/assets/123139216/8c638cb0-2c76-4619-b5cc-bd576c69afe9)

## Individual Currency Breakdowns:

For each of the 3 Currencies approached here, there are plots for historical value, the performance against test data for the 3 models, and the predictions of each model for the next 7 days. There is also a mean line for the predicted data, since it may be more useful to take the 3 models in as an ensemble and try to draw a conclusion from them as a whole.
![newplot (2)](https://github.com/mtolan2023/crypto_forecast/assets/123139216/d8edd13d-90df-4c31-80e3-37de911ba450)

![newplot (3)](https://github.com/mtolan2023/crypto_forecast/assets/123139216/58995ab4-07ef-4f33-b3a2-1a08d06774ef)

![newplot (4)](https://github.com/mtolan2023/crypto_forecast/assets/123139216/412a1ab5-4d90-4ecf-9d32-3188a8d5c12c)

## Conclusions:

It will take some additional observation and testing to assess the accuracy of the models developed for each currency. Since there are no obvious patterns present in currency price data (as there may be in annual temperature data or any trend with a seasonal pattern), it will be difficult to predict very far ahead. Ideally, these models will be tuned to predict movement more precisely but with this initial deployment, they are at least showing the power of LSTM to learn and train on past patterns.


### Citations: 

The following tutorials were used to inform the design of the models and preparation of data. The google colab notebooks were also used to build charts for training, testing and validation data.

https://www.youtube.com/watch?v=CbTU92pbDKw
https://www.youtube.com/watch?v=q_HS4s1L8UI&t=1252s
