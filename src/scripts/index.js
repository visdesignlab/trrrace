import '../styles/index.scss';
import * as d3 from 'd3';
import { addCitations } from './citationLoader';
import { addNav } from './header';
import { renderLaunch } from './landing';
import { renderTimeline } from './timeline';
import { loadTextFile, casestudyOb, renderCaseStudy } from './casestudies';


/**
 * This is the background Section
 */
addNav();

          // create a tooltip
var Tooltip = d3.select("#tooltip")
          .style("opacity", 0)
          .style("background-color", "white")
          .style("border", "solid")
          .style("border-width", "2px")
          .style("border-radius", "5px")
          .style("padding", "5px")
          .style('position', 'absolute');


let params = (new URL(document.location)).searchParams;

let timeline = params.get('timeline'); 
let casestudy = params.get('casestudy');

if(timeline){
    let traceType = params.get('type');
    let traceId = params.get('id');
    renderTimeline(traceType, traceId);
}else if(casestudy){
    renderCaseStudy();
}else{
    renderLaunch();
}






