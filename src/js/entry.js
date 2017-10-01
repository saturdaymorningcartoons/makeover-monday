'use strict';
const d3 = require('./d3.min.js');

import { Legend } from './Legend';
import { TriangleBar } from './TriangleBarGraphic';

d3.csv('src/data/restricted-dietary-requirements.csv', (error, data) => {
  if (error) throw error;

  data.map(d => {
    // coerce to numerals
    d.followers_pct = parseInt(d.followers.replace(/\%/g, ''));
  });

  // get the collection of unique regions
  const regions = [...new Set(data.map(d => d.region))];

  // nest data on diets
  const dietData = d3.nest()
     .key(d => d.diet)
     .entries(data);

  //new Legend('#graph', dietData, regions, { top: 20, right: 10, bottom: 20, left: 10 }, document.querySelector('#graph').clientWidth / 6, document.querySelector('#graph').clientHeight / 2).init();

  // Let's start with one and see if we can eventually flip it on a 45deg upward angle
  new TriangleBar('#graph', dietData[0], { top: 20, right: 20, bottom: 20, left: 30 }, document.querySelector('#graph').clientWidth, document.querySelector('#graph').clientHeight).init();

  // space constraints are making me reconsider the small multiples idea for now – maybe if top axis was tilted on a 45deg upward angle
  /*for (const diet of dietData) {
    console.log(diet);
    new TriangleBar('#graph', diet, { top: 20, right: 10, bottom: 20, left: 10 }, document.querySelector('#graph').clientWidth / 6, document.querySelector('#graph').clientHeight / 2).init();
  }*/
});
