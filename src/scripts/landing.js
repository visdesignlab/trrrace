import '../styles/index.scss';
import * as d3 from 'd3';

export function renderLaunch(){
    d3.select('#main').selectAll('*').remove();
    renderFunctionality();
}

export function renderFunctionality(){

    let desWrap = addSection(d3.select('#main'), 'Domain Space', 'section');
    let domainText = desWrap.append('div').classed('text-block', true).append('text').text(`This project was a collaboration with researchers in the`);
    domainText.append('a').attr("href", `http://lukejharmon.github.io/`).text(` Harmon Lab at the University of Idaho.`)

    let backSub = addSection(desWrap, 'Background', 'sub-section');
    let backText = backSub.append('div').classed('text-block', true).append('text').text(`Evolution is the process of change in a given trait or function spanning 
    generations. To better understand the evolutionary process, it is important to determine when a given trait or functionality evolved and whether is was a result 
    of ancestry, or another force. Evolutionary biologists use comparative methods to identify the potential underlying forces that are driving evolution in a given 
    sample of organisms. Tasks include measuring rates of evolution, comparing patterns across characters or clades, looking for characters that influence speciation, 
    and inferring adaption. 
     `)
    backText.append('a').attr('href', 'https://docs.google.com/document/d/10RTCADqT9jAUqPXiK4QYDSqmpMUTrk2Y87A00swkjgQ/edit#')
    .text('(Read about the background and abstraction.)');

    let ReqSub = addSection(desWrap, 'Tasks and Requirements', 'sub-section');

    let funWrap = addSection(d3.select('#main'), 'Functionlity', 'section')
    funWrap.append('div')
    .append('text')
    .text(`
        We have documented our process and design rationale for our exploratory visual tool developed for evolutionary biologists at the Univeristy of Idaho.
    `)

    let summarySub = addSection(funWrap, 'Summary View', 'sub-section');
    let summDisDiagramImage = document.createElement("img");
    summarySub.node().appendChild(summDisDiagramImage);
    summDisDiagramImage.src = 'public/assets/view-1230.png';
    summarySub.append('text').text('Description of Summary View geos here');


    let pairSub = addSection(funWrap, 'Pair-Wise Trait Comparison', 'sub-section')
    let pairDiagramImage = document.createElement("img");
    pairSub.node().appendChild(pairDiagramImage);
    pairDiagramImage.src = 'public/assets/pair-diagram.jpg';

    let pathSub = addSection(funWrap, 'Path View', 'sub-section');
    pathSub.append('text').text('Description of path View geos here');

 

}

function addSection(wrapWrap, header, className){

    let wrap = wrapWrap
    .append('div')
    .classed(className, true);

    (className === 'section') ? wrap.append('h1').text(header) : wrap.append('h2').text(header);
    return wrap;
}