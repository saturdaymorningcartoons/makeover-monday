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

  // map abbreviations to regions
  const regionAbbreviations = new Map([
    ['Asia-Pacific', 'ap'],
    ['Europe', 'e'],
    ['Africa/Middle East', 'ame'],
    ['Latin America', 'la'],
    ['North America', 'na']
  ]);

  // nest data on diets
  const dietData = d3.nest()
     .key(d => d.diet)
     .entries(data);

  // Let's start with one and see if we can eventually flip it on a 45deg upward angle
  //new TriangleBar('#graph', dietData[0], regions, regionAbbreviations, { top: 20, right: 20, bottom: 20, left: 30 }, document.querySelector('#graph').clientWidth, document.querySelector('#graph').clientHeight).init();

  // space constraints are making me reconsider the small multiples idea for now – maybe if top axis was tilted on a 45deg upward angle
  new Legend('#graph', dietData, regions, regionAbbreviations, { top: 20, right: 10, bottom: 20, left: 10 }, document.querySelector('#graph').clientWidth / 6, document.querySelector('#graph').clientHeight / 2).init();

  for (const diet of dietData) {
    new TriangleBar('#graph', diet, regions, regionAbbreviations, { top: 20, right: 10, bottom: 20, left: 25 }, document.querySelector('#graph').clientWidth / 6, document.querySelector('#graph').clientHeight / 2).smallMultiples();
  }
});
