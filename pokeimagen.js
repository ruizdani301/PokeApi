#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const url = 'https://pokeapi.co/api/v2/pokemon?limit=100';

request(url, (error, results, body) => {
  if (error) {
    console.log(error);
  } else {
    let i = 0;
    let urlDos = '';
    const data = JSON.parse(body).results;

    while (process.argv[2] !== data[i].name) {
      if (i < data.length - 1) {
        i++;
      } else { console.log('NO es un pokemon'); }
    }

    urlDos = data[i].url;

    request(urlDos, (error, results, body) => {
      if (error) {
        console.log(error);
      } else {
        const dataDos = JSON.parse(body);
        const img = dataDos.sprites.back_default;
        request(img).pipe(fs.createWriteStream(process.argv[2].concat(".", "png")))
       /*console.log(img);*/
      }
    });
  }
});
