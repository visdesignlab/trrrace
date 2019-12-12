import '../styles/index.scss';
import * as d3 from 'd3';

export function renderTimeline(){
    d3.select('#main').selectAll('*').remove();
    d3.select('#main').append('h3').text('Sketchbook');
    d3.select('#main').append('svg').classed('sketchbook', true);
}