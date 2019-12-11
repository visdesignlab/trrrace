const Cite = require('citation-js')
//import Cite from 'citation-js';

let json = Cite.input('citations/2019_Phlogenies.bib')
console.log(json)