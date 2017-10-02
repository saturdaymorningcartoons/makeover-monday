'use strict';
const d3 = require('./d3.min.js');

export class TriangleBar {
  constructor(el, d, r, rm,  m, w, h) {
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
    // mount svg element to DOM
    const graph = d3.select(this.mount)
        .append('svg')
        .attr('width', this.width + this.margin.right + this.margin.left)
        .attr('height', this.height + this.margin.bottom + this.margin.top)
      .append('g')
        .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

    const colors = d3.scaleOrdinal().domain(this.data.values.map(d => d.region)).range(this.colors);
    const x = d3.scaleBand().rangeRound([0, this.width]).padding(0.1);
    const y = d3.scaleLinear().rangeRound([this.height, 0]);

    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y).ticks(4);

    x.domain(this.data.values.map(d => d.region));
    y.domain([0, 100]);

    graph.append('g')
       .attr('class', 'x-axis')
       .attr('transform', `translate(0, ${this.height})`)
       .call(xAxis);

    graph.append('g')
       .attr('class', 'y-axis')
       .call(yAxis);

    // remove the first and last tick on the y-axis
    graph.selectAll('.tick')
       .filter(t => t === 100 || t === 0)
       .remove();

    // create the points for an equilateral triangle
    // divide the length of the 60deg side by √3 to get the length of the 30deg side
    const points = d => `${(x(d.region) + (x.bandwidth() / 2)) - ((y(d.followers_pct) - y(0)) / Math.sqrt(3))},${y(0)} ${(x(d.region) + (x.bandwidth() / 2)) + ((y(d.followers_pct) - y(0)) / Math.sqrt(3))},${y(0)} ${x(d.region) + (x.bandwidth() / 2)},${y(d.followers_pct)}`;

    graph.selectAll('.triangle')
        .data(this.data.values)
      .enter().append('polygon')
         .attr('class', 'triangle')
         .attr('points', points)
         .style('fill', d => colors(d.region));
  }

  smallMultiples() {
    // mount svg element to DOM
    const graph = d3.select(this.mount)
        .append('svg')
        .attr('width', this.width + this.margin.right + this.margin.left)
        .attr('height', this.height + this.margin.bottom + this.margin.top)
      .append('g')
        .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

    const colors = d3.scaleOrdinal().domain(this.data.values.map(d => d.region)).range(this.colors);
    const x = d3.scaleBand().rangeRound([0, this.width]).padding(0.1);
    const y = d3.scaleLinear().rangeRound([this.height, 0]);

    let xValues = [];
    this.regions.map(region =>
      xValues.push(this.regionsMap.get(region)));

    const xAxis = d3.axisTop(x);
    const yAxis = d3.axisLeft(y).ticks(4);

    x.domain(this.data.values.map(d =>
      this.regionsMap.get(d.region)));

    y.domain([70, 0]);

    graph.append('g')
       .attr('class', 'x-axis')
       .call(xAxis);

    graph.append('g')
       .attr('class', 'y-axis')
       .call(yAxis);

    // remove the first and last tick on the y-axis
    graph.selectAll('.tick')
       .filter(t => t === 100 || t === 0)
       .remove();

    // create the points for an equilateral triangle
    // divide the length of the 60deg side by √3 to get the length of the 30deg side
    const points = d => `${(x(this.regionsMap.get(d.region)) + (x.bandwidth() / 2)) - ((y(d.followers_pct) - y(0)) / Math.sqrt(3))},${y(0)} ${(x(this.regionsMap.get(d.region)) + (x.bandwidth() / 2)) + ((y(d.followers_pct) - y(0)) / Math.sqrt(3))},${y(0)} ${x(this.regionsMap.get(d.region)) + (x.bandwidth() / 2)},${y(d.followers_pct)}`;

    graph.selectAll('.triangle')
        .data(this.data.values)
      .enter().append('polygon')
         .attr('class', 'triangle')
         .attr('points', points)
         .style('fill', d => colors(d.region));

    const diet = this.data.values[0].diet;

    graph.append('text')
       .attr('class', 'graph-label')
       .attr('x', (this.width / 2) - (diet.length / 2 * 8))
       .attr('y', -25)
       .text(diet);
  }
}
