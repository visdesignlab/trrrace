import '../styles/index.scss';
import * as d3 from 'd3';
import { addCitations } from './citationLoader';
import { addNav } from './header';
import { renderLaunch } from './landing';
import { renderTimeline } from './timeline';
import { loadTextFile, casestudyOb } from './casestudies';


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
          .style('position', 'absolute')
/**
 * This is the References Section
 */
renderLaunch();
//renderTimeline();

let params = (new URL(document.location)).searchParams;
console.log("params??", params)




