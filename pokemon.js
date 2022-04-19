#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const url = "https://pokeapi.co/api/v2/pokemon?limit=100";

request (url, function (error, results, body) {
  if (error) {
    console.log(error);
  }
  else
  {
    let nombres = [];
    const data = JSON.parse(body).results;

    for(let i = 0; i < data.length -1; i++){
      nombres.push(data[i].name);
    }
    console.log(nombres);
  }
});
