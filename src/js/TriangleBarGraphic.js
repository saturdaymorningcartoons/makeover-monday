'use strict';
const d3 = require('./d3.min.js');

export class TriangleBar {
  constructor(el, d, m, w, h) {
    this.mount = el;
    this.data = d;
    this.margin = m;
    this.width = w - this.margin.right - this.margin.left;
    this.height = h - this.margin.bottom - this.margin.top; 
  }

  init() {
    // mount svg element to DOM
    const graph = d3.select(this.mount)
        .append('svg')
        .attr('width', this.width + this.margin.right + this.margin.left)
        .attr('height', this.height + this.margin.bottom + this.margin.top)
      .append('g')
        .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

    graph.append('rect')
        .attr('width', this.width)
        .attr('height', this.height)
        .attr('stroke', '#444');

    console.log(this.data);
  }
}
