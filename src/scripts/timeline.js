import '../styles/index.scss';
import * as d3 from 'd3';
import * as d3Array from 'd3-array';

export async function renderTimeline(){
    d3.select('#main').selectAll('*').remove();
    
    let svg = d3.select('#main').append('svg').classed('timeline', true);
    let data = await d3.csv('public/data/timeline.csv');
    let timeFormat = d3.timeFormat("%m/%d/%Y");

    let mappedData = data.map(m=> {
        
       // m.date = timeFormat(new Date(m.Date_Range));
        m.date = new Date(m.Date_Range);
        return m;
    })

    let groupedData = Array.from(d3Array.group(mappedData, d => d.date));

    let width = svg.node().getBoundingClientRect().width;
    let height = (data.length * 50) + 50;

    svg.attr('height', height);

    let timeScale = d3.scaleTime()
    .domain([d3.min(mappedData.map(m=>m.date)), d3.max(mappedData.map(m=>m.date))])
    .range([0, (height-100)]).clamp(true)

    let wrapGroup = svg.append('g').classed('time-wrap', true).attr('transform', `translate(10, 20)`);

    let timePath = wrapGroup.append('line')
    .attr('y1', 0)
    .attr('y2', (height-100))
    .attr('x1', 100)
    .attr('x2', 100)
    .style('stroke-width', '1px')
    .style('stroke', 'gray');

    let eventGroups = wrapGroup.selectAll('g.event').data(groupedData).join('g')
                    .classed('event', true)
                    .attr('transform', (d, i)=> {
                        return `translate(${100}, ${timeScale(d[0])})`});

    let eventDots = eventGroups.selectAll('circle').data(d=> [d[1]]).join('circle').attr('r', 5);

    let eventLabels = eventGroups.selectAll('text.event-label').data(d=> [d]).join('text').classed('event-label', true)
        .text(d=> d.Event)
        .attr('x', 10)
        .attr('y', 7)
        .style('font-size', '10px');

    

    let dateLabels = eventGroups.selectAll('text.date').data(d=> [d]).join('text').classed('date', true)
        .text(d=> timeFormat(d[0]))
        .attr('x', -10)
        .attr('y', 7)
        .style('text-anchor', 'end')
        .style('font-size', '10px');

    console.log(data)
}