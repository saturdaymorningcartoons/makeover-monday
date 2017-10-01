'use strict';
const d3 = require('./d3.min.js');

export class Legend {
  constructor(el, d, r, m, w, h) {
    this.mount = el;
    this.data = d;
    this.regions = r;
    this.margin = m;
    this.width = w - this.margin.right - this.margin.left;
    this.height = h - this.margin.bottom - this.margin.top; 
  }

  init() {
    // mount legend to DOM
    const legend = d3.select(this.mount)
        .append('svg')
        .attr('width', this.width + this.margin.right + this.margin.left)
        .attr('height', this.height + this.margin.bottom + this.margin.top)
      .append('g')
         .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

    legend.append('rect')
        .attr('width', this.width)
        .attr('height', this.height)
        .attr('fill', '#fff')
        .attr('stroke', '#2fc3c7');

    // map abbreviations to regions
    const regionAbbreviations = new Map([
      ['Asia-Pacific', 'ap'],
      ['Europe', 'e'],
      ['Africa/Middle East', 'ame'],
      ['Latin America', 'la'],
      ['North America', 'na']
    ]);

    this.regions.map((region, i) => {
      legend.append('text')
          .attr('class', 'legend-text')
          .attr('x', 15)
          .attr('y', (i * 18) + 15)
          .text(`${regionAbbreviations.get(region)}: ${region}`);
    });
        
  }
}
