import '../styles/index.scss';
import * as d3 from 'd3';
import { addCitations } from './citationLoader';
import { addNav } from './header';
import { renderLaunch } from './landing';
import { renderTimeline } from './timeline';

/**
 * This is the background Section
 */
addNav();


/**
 * This is the References Section
 */
//renderLaunch();
renderTimeline();




