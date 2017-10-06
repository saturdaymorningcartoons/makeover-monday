'use strict';
const d3 = require('./d3.min.js');

export class Legend {
  constructor(el, d, r, rm, m, w, h) {
    this.mount = el;
    this.data = d;
    this.regions = r;
    this.regionsMap = rm;
    this.margin = m;
    this.width = w - this.margin.right - this.margin.left;
    this.height = h - this.margin.bottom - this.margin.top; 
    this.colors = ['rgba(30,29,73,1)', 'rgba(103,72,168,1)', 'rgba(127,68,158,1)', 'rgba(151,61,147,1)', 'rgba(251,167,215,1)'];
  }

  init() {
    // mount legend to DOM
    const legend = d3.select(this.mount)
        .append('svg')
        .attr('width', this.width + this.margin.right + this.margin.left)
        .attr('height', this.height + this.margin.bottom + this.margin.top)
      .append('g')
         .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

    this.regions.map((region, i) => {
      legend.append('text')
          .attr('class', 'legend-text')
          .attr('x', 15)
          .attr('y', (i * 18) + 15)
          .style('fill', this.colors[i])
          .text(`${this.regionsMap.get(region)}: ${region}`);
    });
        
  }
}
