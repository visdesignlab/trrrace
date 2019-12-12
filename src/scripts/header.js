import '../styles/index.scss';
import * as d3 from 'd3';
import { renderCitations } from './citationLoader';
import { renderLaunch } from './landing';
import { renderTimeline } from './timeline';

export function addNav(){

    let buttonWrap = d3.select('#header').append('div').classed('button-wrap', true);

    d3.select('#header').select('h1').on('click', ()=> renderLaunch());
    
    makeButton(buttonWrap, 'Timeline', renderTimeline);
    makeButton(buttonWrap, 'References', renderCitations); 
}

function makeButton(div, text, callback){
    div.append('button').text(text).classed('btn btn--stripe', true).on('click', ()=> callback());
}