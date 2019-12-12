import '../styles/index.scss';
import * as d3 from 'd3';

export function renderLaunch(){
    d3.select('#main').selectAll('*').remove();
    d3.select('#main').append('h3').text('BACKGROUND AND MOTIVATION');
}