import '../styles/index.scss';
import * as d3 from 'd3';
import * as d3Array from 'd3-array';

export async function renderTimeline(){
    d3.select('#main').selectAll('*').remove();
    
    let svg = d3.select('#main').append('svg').classed('timeline', true);
    let data = await d3.csv('public/data/timeline.csv');
    let timeFormat = d3.timeFormat("%m/%d/%Y");



    let mappedData = data.map(m=> {
        m.date = new Date(m.Date_Range);
        return m;
    })
    let colorKeeper = [
        '#e74c3c',
        '#884ea0',
        '#e67e22',
        '#85c1e9',
        '#FFC300',
        '#a3e4d7',
        '#28B463',
        '#5D6D7E'
    ];

    let rangeInIdaho = ['05-13-19', '07-31-19'];

    let tags = Array.from(new Set([...data].map(m=> m.tag1)))
    .map((m, i)=> {
        return {tag:m, color:colorKeeper[i]}
    });

    let groupedData = Array.from(d3Array.group(mappedData, d => timeFormat(d.date)));

    let width = svg.node().getBoundingClientRect().width;
    let height = (mappedData.length * 40) + 50;

    svg.attr('height', height);

    let labelWrap = svg.append('g').classed('label-wrap', true).attr('transform', `translate(${width / 2}, 10)`);
    let tagLabel = labelWrap.selectAll('.tag-label').data(tags).join('g').classed('tag-label', true);
    tagLabel.attr('transform', (d, i)=> `translate(${i*100}, 0)`)
    tagLabel.append('rect').attr('width', 95).attr('height', 20).attr('fill', (d)=> d.color).attr('opacity', .6)
    tagLabel.append('text').text(d=> d.tag).style('font-size', 10).attr('y', 12).attr('x', 3)

    let timeScale = d3.scaleTime()
    .domain([d3.min(mappedData.map(m=>m.date)), d3.max(mappedData.map(m=>m.date))])
    .range([0, (height-100)]).clamp(true);

    let circleScale = d3.scaleLinear().domain([1, 15]).range([3, 10]);

    let rangeBox = svg.append('rect')
        .attr('width', 630)
        .attr('height', (timeScale(new Date(rangeInIdaho[1])) - timeScale(new Date(rangeInIdaho[0])) + 50))
        .attr('y', timeScale(new Date(rangeInIdaho[0]))-20)
        .attr('x', 30)
        .attr('fill', 'gray')
        .attr('opacity', 0.1);

    let rangeLabel = svg.append('text').text('Working at Harmon Lab')
                    .attr('y', timeScale(new Date(rangeInIdaho[0])) + 2)
                    .attr('x', 120)
                    .attr('fill', 'gray')
                    .style('font-size', '11px')


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
                        return `translate(${100}, ${timeScale(d[1][0].date)})`});

    let eventDots = eventGroups.selectAll('circle').data(d=> {
        return [d]}).join('circle').attr('r', d=> {
            return circleScale(d[1].length);
        });

    let eventSquares = eventGroups.selectAll('.event-sq').data(d=> d[1]).join('g').classed('event-sq', true);
    eventSquares.attr('transform', (d, i)=> `translate(${13 + (i * 12)}, -5)`);

    let aDrive = eventSquares
    .filter(f=> f.tag1 != 'sketch' && f.tag1 != 'presentation' && f.tag1 != 'pivot' && f.tag1 != 'view').append('a')
    .attr("xlink:href", d=> {
        return d.Drive_Link});
    aDrive.append('rect').attr('width', 10).attr('height', 10).attr('fill', (d, i)=> tags
        .filter(f=> f.tag === d.tag1)[0].color).attr('opacity', 0.6);

    eventSquares.filter(f=> f.tag1 === 'sketch' || f.tag1 === 'view' || f.tag1 === 'pivot').append('rect')
    .attr('width', 10).attr('height', 10)
    .attr('fill', (d, i)=> tags.filter(f=> f.tag === d.tag1)[0].color)
    .attr('opacity', 0.6);
   
    eventSquares.on('mouseover', (d, i, n)=> {
       
        // let tooltip = d3.select('#tooltip')
        // tooltip.style('opacity', 1);
       
        // tooltip
        // .html(d.Event)
        // .style("left", (n[i].getBoundingClientRect().x) + "px")
        // .style("top", (n[i].getBoundingClientRect().top - 50) + "px")

        let sidebox = d3.select('body').append('div').attr('id','sidebox');

        sidebox.append('h3').text(`${d.Event} ${d.date}`)
        sidebox.append('h3').text("Tags: ")
        sidebox.append('h3').text(`${d.tag1}, ${d.tag2}, ${d.tag3}`)
       
                 
        if(d.tag1 === 'sketch' || d.tag1 === 'pivot' || d.tag1 === 'view'){

            let sideboxSVG = sidebox.append('svg').style('width', '1100px')
            .style('height', '600px');

            let im = sideboxSVG.append("svg:image")
            .classed('sketch', true);

            im.style('width', '1100px')
            .attr('y', 0)
            .attr('x', 0)
            .attr("xlink:href", `public/assets/${d.Sketch_ID}.png`);

        }else if(d.tag1 === 'workshop'){
           
            let sideboxSVG = sidebox.append('svg').style('width', '1100px')
            .style('height', '600px');

            let im = sideboxSVG.append("svg:image")
            .classed('sketch', true);

            im.style('width', '900px')
            .attr('y', 0)
            .attr('x', 0)
            .attr("xlink:href", `public/assets/${d.Sketch_ID}.png`);
        }else if(d.tag1 === 'moving-update'){
           
            let sideboxSVG = sidebox.append('svg').style('width', '1100px')
            .style('height', '600px');

            let im = sideboxSVG.append("svg:image")
            .classed('sketch', true);

            im.style('width', '900px')
            .attr('y', 0)
            .attr('x', 0)
            .attr("xlink:href", `public/assets/${d.Sketch_ID}.gif`);
        }else{
            sidebox.append('iframe').attr('src', 'https://docs.google.com/document/d/e/2PACX-1vQRC_xaTgXu-KayMAnKvQofliSz0JYGrNoVTEmR13tcEnRN50w1BZrTH_MKOeQE8pd4303-hyUaL619/pub?embedded=true')
        }

    }).on('mouseout', ()=> {
        let tooltip = d3.select('#tooltip').style('opacity', 0);
        d3.select('#sidebox').remove();
    });

    eventSquares.filter(f=> f.tag1 === 'presentation').append('a')
    .attr("xlink:href", d=> {
        return `public/assets/${d.Sketch_ID}.pdf`}).append('rect')
        .attr('width', 10)
        .attr('height', 10)
        .attr('fill', (d, i)=> tags
        .filter(f=> f.tag === d.tag1)[0].color).attr('opacity', 0.6);

    let eventLabels = eventGroups.selectAll('text.event-label').data(d=> [d]).join('text')
        .classed('event-label', true)
        .text(d=> {
            let string = '';
            d[1].forEach((f, i, n)=> (i === n.length - 1)? (string = string.concat(f.Event)) : (string = string.concat(f.Event + ", ")))
            return string})
        .attr('x', d=> (11+(d[1].length * 13)))
        .attr('y', 5)
        .style('font-size', '10px')
        .attr('fill', '#B2BABB');

    let dateLabels = eventGroups.selectAll('text.date').data(d=> [d]).join('text').classed('date', true)
        .text(d=> d[0])
        .attr('x', -13)
        .attr('y', d=> (((d[1].length) * 3) / 2))
        .style('text-anchor', 'end')
        .style('font-size', '10px')
        .attr('fill', '#5D6D7E');
    }