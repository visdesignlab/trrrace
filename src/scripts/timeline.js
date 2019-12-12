import '../styles/index.scss';
import * as d3 from 'd3';
import { DateParser } from 'citeproc';

export async function renderTimeline(){
    d3.select('#main').selectAll('*').remove();
    
    let svg = d3.select('#main').append('svg').classed('timeline', true);
    let data = await d3.csv('public/data/timeline.csv');

    let width = svg.node().getBoundingClientRect().width;
    let height = (data.length * 50) + 50;

    svg.attr('height', height);

    let timeScale = d3.scaleTime();

    let wrapGroup = svg.append('g').classed('time-wrap', true).attr('transform', `translate(10, 20)`);

    let timePath = wrapGroup.append('line')
    .attr('y1', 0)
    .attr('y2', height)
    .attr('x1', 100)
    .attr('x2', 100)
    .style('stroke-width', '1px')
    .style('stroke', 'gray');

    let eventGroups = wrapGroup.selectAll('g.event').data(data).join('g')
                    .classed('event', true)
                    .attr('transform', (d, i)=> {
                       // DateParser(d.Date_Range)
                        console.log(new Date(d.Date_Range))
                        return `translate(${100}, ${i*50})`});

    let eventDots = eventGroups.selectAll('circle').data(d=> [d]).join('circle').attr('r', 5);

    let eventLabels = eventGroups.selectAll('text.event-label').data(d=> [d]).join('text').classed('event-label', true)
        .text(d=> d.Event)
        .attr('x', 10)
        .attr('y', 7)
        .style('font-size', '10px');

    let dateLabels = eventGroups.selectAll('text.date').data(d=> [d]).join('text').classed('date', true)
        .text(d=> new Date(d.Date_Range))
        .attr('x', -10)
        .attr('y', 7)
        .style('text-anchor', 'end')
        .style('font-size', '10px');

    console.log(data)
}