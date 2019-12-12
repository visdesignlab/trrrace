import '../styles/index.scss';
import * as d3 from 'd3';
const Cite = require('citation-js');

export function addCitations(fileName, wrapDiv, header){

    wrapDiv.append('h3').text(header);

    d3.json(fileName).then(citations=> {

        citations.forEach(cite => {
    
            let citation= new Cite(cite);
    
            let output = citation.format('bibliography', {
                format: 'html',
                template: 'apa',
                lang: 'en-US'
              });
            
            wrapDiv.append('div').classed('citation', true).html(output);
        })
    });
}

export function renderCitations(){
    
    d3.select('#main').selectAll('*').remove();

    let wrapDomain = d3.select('#main').append('div').classed('citation-wrap', true);
    let wrapProcess = d3.select('#main').append('div').classed('citation-wrap', true);
    let wrapRelated = d3.select('#main').append('div').classed('citation-wrap', true);

    addCitations('public/data/domain-citations.json', wrapDomain, "Domain References");
    addCitations('public/data/process-citations.json', wrapProcess, "Process References");
    addCitations('public/data/related-citations.json', wrapRelated, "Related Work");

}