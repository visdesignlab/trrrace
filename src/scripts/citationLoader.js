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