import '../styles/index.scss';
import * as d3 from 'd3';
import { addCitations } from './citationLoader';

/**
 * This is the background Section
 */



/**
 * This is the References Section
 */
let wrapDomain = d3.select('#main').append('div').classed('citation-wrap', true);
let wrapProcess = d3.select('#main').append('div').classed('citation-wrap', true);
let wrapRelated = d3.select('#main').append('div').classed('citation-wrap', true);

addCitations('public/data/domain-citations.json', wrapDomain, "Domain References");
addCitations('public/data/process-citations.json', wrapProcess, "Process References");
addCitations('public/data/related-citations.json', wrapRelated, "Related Work");





