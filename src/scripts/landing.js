import '../styles/index.scss';
import * as d3 from 'd3';

export function renderLaunch(){
    d3.select('#main').selectAll('*').remove();
    renderFunctionality();
}

export function renderFunctionality(){

    let funWrap = addSection(d3.select('#main'), 'Functionlity', 'section')

    let summarySub = addSection(funWrap, 'Summary View', 'sub-section');
    summarySub.append('text').text('Description of Summary View geos here')

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