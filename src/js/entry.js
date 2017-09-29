'use strict';
const d3 = require('./d3.min.js');

import { TriangleBar } from './TriangleBarGraphic';

d3.csv('src/data/restricted-dietary-requirements.csv', (error, data) => {
  if (error) throw error;

  data.map(d => {
    // coerce to numerals
    d.followers_pct = parseInt(d.followers.replace(/\%/g, ''));
  });

  // nest data on diets
  const dietData = d3.nest()
     .key(d => d.diet)
     .entries(data);

  for (const diet of dietData) {
    console.log(diet);
    new TriangleBar('#graph', diet, { top: 20, right: 10, bottom: 20, left: 10 }, document.querySelector('#graph').clientWidth / 6, document.querySelector('#graph').clientHeight / 2).init();
  }
});
