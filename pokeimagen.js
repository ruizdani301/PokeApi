#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const url = 'https://pokeapi.co/api/v2/pokemon?limit=100';

request(url, function (error, results, body) {
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
    /* let urlDos = "https://pokeapi.co/api/v2/pokemon-form/3/"; */
    request(urlDos, function (error, results, body) {
      if (error) {
        console.log(error);
      } else {
        const dataDos = JSON.parse(body);
        /* console.log(dataDos); */
        const img = dataDos.sprites.back_default;
       /* fs.writeFile(imagenes, img, function (error) {
          if (error) {
            console.log(error);
          }
        });*/console.log(img);
      }
    });
  }
});
/* console.log(data); */
/* for(let i = 0; i < data.length -1; i++){
      nombres.push(data[i].url);
    } */
/* console.log(nombres); */
