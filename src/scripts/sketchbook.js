import '../styles/index.scss';
import * as d3 from 'd3';

export function renderSketchbook(){
    d3.select('#main').selectAll('*').remove();
 

    let sketchWrap = d3.select('#main').append('div').classed('sketch-wrap', true);

    let imageList = [
        '513', '515', '528', '529', '530', '531', '601', '610', '613', '705', '709', '716', '729', '730',
    ];

    imageList.forEach(img=> {
        addSketch(img, sketchWrap)
    });


}

function addSketch(img, div){
    let sketch = document.createElement("img");
    div.node().appendChild(sketch);
    sketch.src = `public/assets/${img}.png`;
    d3.select(sketch).classed('sketch', true)
}