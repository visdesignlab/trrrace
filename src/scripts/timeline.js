import '../styles/index.scss';
import * as d3 from 'd3';
import * as d3Array from 'd3-array';
import { makeButton } from './header';

export async function renderTimeline(traceId){
    d3.select('#main').selectAll('*').remove();

   

    let labelWrap = d3.select('#main').append('div').classed('label-wrap-div', true);
    
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
        '#FF008B',
        '#85c1e9',
        '#FFC300',
        '#28B463',
        '#5D6D7E',
        '#A3E4D7',
        '#E74C3C',
        '#9B59B6',
        '#1D8348',
        '#1A5276',
        '#0B5345',
        '#FAD7A0',
        '#FAA0F5',
        '#F0FF00',
        '#2AFF00'
    ];

    let rangeInIdaho = [['05-13-19', '07-31-19'], ['10-17-19', '10-19-19'], ['02-02-20', '02-07-20']];

    let mileEvents = [['started to record audio','6-12-19']];

    let tags = Array.from(new Set([...data.filter(f=> f.tag1 != 'phase' && f.tag1 != 'event')].map(m=> m.tag1)))
    .map((m, i)=> {
        return {tag:m, color:colorKeeper[i]}
    });

    let groupedData = Array.from(d3Array.group(mappedData.filter(f=> f.tag1 != 'phase' && f.tag1 != 'event'), d => timeFormat(d.date)));

    let events = Array.from(d3Array.group(mappedData.filter(f=> f.tag1 === 'phase' || f.tag1 === 'event'), d => d.Event));
   

    console.log(events)

    let width = svg.node().getBoundingClientRect().width;
    let height = (mappedData.length * 40) + 50;

    svg.attr('height', height);

    let labelWrapGroup = labelWrap.append('svg').append('g').attr('transform', `translate(100, 10)`);
   // let labelWrap = svg.append('g').classed('label-wrap', true).attr('transform', `translate(${width / 2}, 10)`);
    let tagLabel = labelWrapGroup.selectAll('.tag-label').data(tags).join('g').classed('tag-label', true);
    tagLabel.attr('transform', (d, i)=> `translate(${i*100}, 0)`)
    tagLabel.append('rect').attr('width', 95).attr('height', 20).attr('fill', (d)=> d.color).attr('opacity', .6)
    tagLabel.append('text').text(d=> d.tag).style('font-size', 10).attr('y', 12).attr('x', 3);

    //EXPERIMENTING
    tagLabel.on('click', (d)=> {
        console.log('tag', d);
    });

    let timeScale = d3.scaleTime()
    .domain([d3.min(mappedData.map(m=>m.date)), d3.max(mappedData.map(m=>m.date))])
    .range([0, (height-100)]).clamp(true);

    let circleScale = d3.scaleLinear().domain([1, 15]).range([3, 10]);

    let rangeBox = svg.selectAll('rect.visit').data(events.filter(f=> f[1].length > 1))
        .join('rect')
        .classed('visit', true)
        .attr('width', 2000)
        .attr('height', d=> {
            console.log('d', timeScale(new Date(d[1][1].Date_Range)) - timeScale(new Date(d[1][0].Date_Range)) + 50);
            return (timeScale(new Date(d[1][1].Date_Range)) - timeScale(new Date(d[1][0].Date_Range)) + 20)})
        .attr('y', d=> timeScale(new Date(d[1][0].Date_Range))+10)
        .attr('x', 30)
        .attr('fill', 'gray')
        .attr('opacity', 0.1);
    
    let milesLine = svg.selectAll('g.milestone').data(events).join('g').classed('milestone', true);
    milesLine.attr('transform', d=> `translate(0, ${timeScale(new Date(d[1][0].Date_Range))+ 10})`)
    milesLine.append('line')  
    .attr('y1', 0)
    .attr('y2', 0)
    .attr('x1', 0)
    .attr('x2', 650)
    .style('stroke-width', '0.5px')
    .style('stroke', 'red');

    milesLine.append('text').text(d=> d[0]).attr('x', 650).attr('y', 2).style('font-size', '11px');


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
   //  .filter(f=> f.tag1 != 'sketch' && f.tag1 != 'presentation' && f.tag1 != 'pivot' && f.tag1 != 'view').append('a')
    // .attr("xlink:href", d=> {
    //     return d.Drive_Link});
    aDrive.append('rect').attr('width', 10).attr('height', 10).attr('fill', (d, i)=> tags
        .filter(f=> f.tag === d.tag1)[0].color).attr('opacity', 0.6);

    eventSquares.filter(f=> f.tag1 === 'sketch' || f.tag1 === 'view' || f.tag1 === 'pivot').append('rect')
    .attr('width', 10).attr('height', 10)
    .style('fill', (d, i)=> tags.filter(f=> f.tag === d.tag1)[0].color)
    .attr('opacity', 0.6);

    let clickedBool = false;

    let sideboxWrap = d3.select('body').append('div')
    sideboxWrap.attr('id','sidebox-wrap');

    let button = makeButton(sideboxWrap.append('div').attr('id', 'side-button'), 'Explore This', null);
    button.style('opacity', '0');

    let sidebox = sideboxWrap.append('div').attr('id','sidebox');

    eventSquares.on('click', (d, i, n)=> {

        let tooltip = d3.select('#tooltip').style('opacity', 0);

        sidebox.selectAll('*').remove();

        d3.select(n[i]).style('opacity', 1);

        if(clickedBool != d.Date_Range + '_' + d.Event){

            clickedBool = d.Date_Range + '_' + d.Event;
    
            button.style('opacity', '1.0');

            let otherEventSquares = d3.selectAll('.event-sq').filter(f=> f.index_id != d.index_id).style('opacity', 0.2);
           
            sidebox.append('h3').text(`${d.Event} ${d.date}`);
            sidebox.append('h3').text("Type: ");
            sidebox.append('h3').text(`${d.tag1}, ${d.tag2}, ${d.tag3}`);
            sidebox.append('html').html('</br>');
            sidebox.append('h3').text("Tags: ");

            let keyWords = d.highlighted.split(',').filter(f=> f != ' ').concat(d['highlighted domain'].split(',').filter(f=> f != ' '));

            let badges = sidebox.append('div').selectAll('.badge').data(keyWords).join('span').classed('badge badge-secondary', true)
            badges.text(d=> d);

            badges.on('click', (b)=> {

                d3.selectAll('.event-sq.trace').style('opacity', .2);
                d3.selectAll('.event-sq.trace').selectAll('rect').style('fill', (d, i)=> tags.filter(f=> f.tag === d.tag1)[0].color)
                d3.selectAll('.event-sq.trace').classed('trace', false);

                let test = b.split(' ').flatMap(m=> {
                    let filteredEvents = otherEventSquares.filter(k=> {
                        let otherKeyWords = k.highlighted.split(',').filter(f=> f != ' ').concat(k['highlighted domain'].split(',').filter(f=> f != ' '));
                        return otherKeyWords.filter(w=> w.includes(m)).length > 0;
                    });

                    filteredEvents.classed('trace', true);
                    d3.selectAll('.event-sq.trace').style('opacity', 1);
                    d3.selectAll('.event-sq.trace').selectAll('rect').style('fill', 'red');

                   
                    return filteredEvents;

                });

            });

            if(d.tag1 === 'sketch/view' || d.tag1 === 'pivot' || d.tag1 === 'view'){
    
                let sideboxSVG = sidebox.append('svg').style('width', '1100px')
                .style('height', '600px');
    
                let im = sideboxSVG.append("svg:image")
                .classed('sketch', true);
    
                im.style('width', '1000px')
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

                sidebox.append('iframe').style('width', '900px').attr('src', d.embed_link).attr('frameborder',0);

            }
            button.on('click', ()=> {
                window.open(d.embed_link, "_blank");
           });

        }else{
            button.style('opacity', 0);
            d3.selectAll('.event-sq').style('opacity', 1);
        }

    });

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


    urlFun(traceId, sidebox, button);

}

    function urlFun(link, sidebox, button, clickedBool){

        console.log(link);
    
        button.style('opacity', '1.0');

        let chosenSquare = d3.selectAll('.event-sq').filter(f=> f.index_id === link).style('opacity', 1);

        let theData = chosenSquare.data()[0];

        clickedBool = theData.Date_Range + '_' + theData.Event;

        let otherEventSquares = d3.selectAll('.event-sq').filter(f=> f.index_id != link).style('opacity', 0.2);
       
        sidebox.append('h3').text(`${theData.Event} ${theData.date}`);
        sidebox.append('h3').text("Type: ");
        sidebox.append('h3').text(`${theData.tag1}, ${theData.tag2}, ${theData.tag3}`);
        sidebox.append('html').html('</br>');
        sidebox.append('h3').text("Tags: ");

        let keyWords = theData.highlighted.split(',').filter(f=> f != ' ').concat(theData['highlighted domain'].split(',').filter(f=> f != ' '));

        let badges = sidebox.append('div').selectAll('.badge').data(keyWords).join('span').classed('badge badge-secondary', true)
        badges.text(d=> d);

        let type = theData.type;

        if(type === 'email/text' || type === 'notes' || type === 'pdf'){

            sidebox.append('iframe').style('width', '900px').attr('src', theData.embed_link).attr('frameborder',0);

        }else if(type === 'sketch/view' || 'image'){

            sidebox.style('overflow: auto;')

            let sideboxSVG = sidebox.append('svg').style('width', '600px')
            .style('height', '600px');

            let im = sideboxSVG.append("svg:image")
            .classed('sketch', true);

            im.style('width', '600px')
            .attr('y', 0)
            .attr('x', 0)
            .attr("xlink:href", `public/assets/${theData.Sketch_ID}.png`);

        }else{
            console.error('type not found');
        }

        
       
    }