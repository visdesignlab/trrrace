import '../styles/index.scss';
import * as d3 from 'd3';

const Cite = require('citation-js');

let bibJson = d3.json('public/data/2019_Phylogenies.json').then(citations=> {

    citations.forEach(cite => {

        let citation= new Cite(cite);

        let output = citation.format('bibliography', {
            format: 'html',
            template: 'apa',
            lang: 'en-US'
          })
        
          console.log(output)
        
          d3.select('body').append('div').classed('citation', true).html(output);
    })


})
console.log(bibJson)





