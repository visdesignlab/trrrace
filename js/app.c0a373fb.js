!function(e){function t(t){for(var n,s,o=t[0],l=t[1],c=t[2],p=0,h=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&h.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(d&&d(t);h.length;)h.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},i={0:0},r=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=l;r.push([137,1]),a()}({137:function(e,t,a){"use strict";a.r(t);a(7);var n=a(1);const i=a(77);function r(e,t,a){t.append("h2").text(a),n.b(e).then(e=>{e.forEach(e=>{let a=new i(e).format("bibliography",{format:"html",template:"apa",lang:"en-US"});t.append("div").classed("citation",!0).html(a)})})}function s(){n.g("#main").selectAll("*").remove();let e=n.g("#main").append("div").classed("citation-wrap",!0),t=n.g("#main").append("div").classed("citation-wrap",!0),a=n.g("#main").append("div").classed("citation-wrap",!0);r("public/data/domain-citations.json",e,"Domain References"),r("public/data/process-citations.json",t,"Process References"),r("public/data/related-citations.json",a,"Related Work")}function o(){n.g("#main").selectAll("*").remove(),function(){let e=l(n.g("#main"),"Domain Space","section");e.append("div").classed("text-block",!0).append("text").text("This project was a collaboration with researchers in the").append("a").attr("href","http://lukejharmon.github.io/").text(" Harmon Lab at the University of Idaho."),l(e,"Background","sub-section").append("div").classed("text-block",!0).append("text").text("Evolution is the process of change in a given trait or function spanning \n    generations. To better understand the evolutionary process, it is important to determine when a given trait or functionality evolved and whether is was a result \n    of ancestry, or another force. Evolutionary biologists use comparative methods to identify the potential underlying forces that are driving evolution in a given \n    sample of organisms. Tasks include measuring rates of evolution, comparing patterns across characters or clades, looking for characters that influence speciation, \n    and inferring adaption. \n     ").append("a").attr("href","https://docs.google.com/document/d/10RTCADqT9jAUqPXiK4QYDSqmpMUTrk2Y87A00swkjgQ/edit#").text("(Read about the background and abstraction.)");l(e,"Tasks and Requirements","sub-section");let t=l(n.g("#main"),"Functionlity","section");t.append("div").append("text").text("\n        We have documented our process and design rationale for our exploratory visual tool developed for evolutionary biologists at the Univeristy of Idaho.\n    ");let a=l(t,"Summary View","sub-section");a.append("h4").text("Discrete Summary");let i=document.createElement("img");a.node().appendChild(i),i.src="public/assets/discrete-summary-breakdown.jpg",a.select("img").style("width","1100px"),a.append("h4").text("Continuous Summary");let r=document.createElement("img");a.node().appendChild(r),r.src="public/assets/continuous-summary.png",n.g(r).style("width","1100px");let s=l(t,"Pair-Wise Trait Comparison","sub-section"),o=document.createElement("img");s.node().appendChild(o),o.src="public/assets/pair-diagram.jpg",l(t,"Path View","sub-section").append("text").text("Description of path View geos here")}()}function l(e,t,a){let n=e.append("div").classed(a,!0);return"section"===a?n.append("h1").text(t):n.append("h2").text(t),n}var c=a(141);const d=[null];async function p(e){n.g("#main").selectAll("*").remove();let t=n.g("#main").append("div").classed("label-wrap-div",!0),a=n.g("#main").append("svg").classed("timeline",!0),i=await n.a("public/data/timeline.csv"),r=n.i("%m/%d/%Y"),s=i.map(e=>(e.date=new Date(e.Date_Range),e)),o=["#e74c3c","#884ea0","#e67e22","#FF008B","#85c1e9","#FFC300","#28B463","#5D6D7E","#A3E4D7","#E74C3C","#9B59B6","#1D8348","#1A5276","#0B5345","#FAD7A0","#FAA0F5","#F0FF00","#2AFF00"],l=Array.from(new Set([...i.filter(e=>"phase"!=e.tag1&&"event"!=e.tag1)].map(e=>e.tag1))).map((e,t)=>({tag:e,color:o[t]})),d=Array.from(c.a(s.filter(e=>"phase"!=e.tag1&&"event"!=e.tag1),e=>r(e.date))),p=Array.from(c.a(s.filter(e=>"phase"===e.tag1||"event"===e.tag1),e=>e.Event));console.log(p);a.node().getBoundingClientRect().width;let g=40*s.length+50;a.attr("height",g);let u=t.append("svg").append("g").attr("transform","translate(100, 10)").selectAll(".tag-label").data(l).join("g").classed("tag-label",!0);u.attr("transform",(e,t)=>`translate(${100*t}, 0)`),u.append("rect").attr("width",95).attr("height",20).attr("fill",e=>e.color).attr("opacity",.6),u.append("text").text(e=>e.tag).style("font-size",10).attr("y",12).attr("x",3),u.on("click",e=>{console.log("tag",e)});let v=n.f().domain([n.d(s.map(e=>e.date)),n.c(s.map(e=>e.date))]).range([0,g-100]).clamp(!0),m=n.e().domain([1,15]).range([3,10]),y=(a.selectAll("rect.visit").data(p.filter(e=>e[1].length>1)).join("rect").classed("visit",!0).attr("width",2e3).attr("height",e=>(console.log("d",v(new Date(e[1][1].Date_Range))-v(new Date(e[1][0].Date_Range))+50),v(new Date(e[1][1].Date_Range))-v(new Date(e[1][0].Date_Range))+20)).attr("y",e=>v(new Date(e[1][0].Date_Range))+10).attr("x",30).attr("fill","gray").attr("opacity",.1),a.selectAll("g.milestone").data(p).join("g").classed("milestone",!0));y.attr("transform",e=>`translate(0, ${v(new Date(e[1][0].Date_Range))+10})`),y.append("line").attr("y1",0).attr("y2",0).attr("x1",0).attr("x2",650).style("stroke-width","0.5px").style("stroke-dasharray","4").style("stroke","gray"),y.append("text").text(e=>e[0]).attr("x",654).attr("y",2).style("font-size","11px").attr("fill","gray");let b=a.append("g").classed("time-wrap",!0).attr("transform","translate(10, 20)"),w=(b.append("line").attr("y1",0).attr("y2",g-100).attr("x1",100).attr("x2",100).style("stroke-width","1px").style("stroke","gray"),b.selectAll("g.event").data(d).join("g").classed("event",!0).attr("transform",(e,t)=>`translate(100, ${v(e[1][0].date)})`)),x=(w.selectAll("circle").data(e=>[e]).join("circle").attr("r",e=>m(e[1].length)),w.selectAll(".event-sq").data(e=>e[1]).join("g").classed("event-sq",!0));x.attr("transform",(e,t)=>`translate(${13+12*t}, -5)`),x.append("rect").attr("width",10).attr("height",10).attr("fill",(e,t)=>l.filter(t=>t.tag===e.tag1)[0].color).attr("opacity",.6),x.filter(e=>"sketch"===e.tag1||"view"===e.tag1||"pivot"===e.tag1).append("rect").attr("width",10).attr("height",10).style("fill",(e,t)=>l.filter(t=>t.tag===e.tag1)[0].color).attr("opacity",.6);let k=n.g("body").append("div");k.attr("id","sidebox-wrap");let A=f(k.append("div").attr("id","side-button"),"Explore This",null);A.style("opacity","0");let j=k.append("div").attr("id","sidebox");x.on("click",(e,t,a)=>{n.g("#tooltip").style("opacity",0);j.selectAll("*").remove(),h(e.index_id,j,A)});w.selectAll("text.event-label").data(e=>[e]).join("text").classed("event-label",!0).text(e=>{let t="";return e[1].forEach((e,a,n)=>t=a===n.length-1?t.concat(e.Event):t.concat(e.Event+", ")),t}).attr("x",e=>11+13*e[1].length).attr("y",5).style("font-size","10px").attr("fill","#B2BABB"),w.selectAll("text.date").data(e=>[e]).join("text").classed("date",!0).text(e=>e[0]).attr("x",-13).attr("y",e=>3*e[1].length/2).style("text-anchor","end").style("font-size","10px").attr("fill","#5D6D7E");e&&h(e,j,A)}function h(e,t,a){a.style("opacity","1.0");let i=n.h(".event-sq").filter(t=>t.index_id===e).style("opacity",1).data()[0];if(d[d.length-1]!=i.Date_Range+"_"+i.Event){d.push(i.Date_Range+"_"+i.Event);let r=n.h(".event-sq").filter(t=>t.index_id!=e).style("opacity",.2),s=[i.tag1,i.tag2,i.tag3].filter(e=>""!=e).toString();console.log(s),t.append("h6").text(`${i.Event} ${i.date}`),t.append("h5").text(`Type: ${s}`),t.append("h5").text("Tags: ");let o=i.highlighted.split(",").filter(e=>" "!=e).concat(i["highlighted domain"].split(",").filter(e=>" "!=e)),l=t.append("div").selectAll(".badge").data(o).join("span").classed("badge badge-secondary",!0);l.text(e=>e),l.on("click",(e,t,a)=>{n.h(a).filter((e,a)=>a!=t).attr("class","badge badge-secondary"),n.g(a[t]).attr("class","badge badge-warning"),n.h(".event-sq.trace").style("opacity",.2),n.h(".event-sq.trace").selectAll("rect").style("fill",(e,t)=>tags.filter(t=>t.tag===e.tag1)[0].color),n.h(".event-sq.trace").classed("trace",!1);e.split(" ").flatMap(e=>{let t=r.filter(t=>{return t.highlighted.split(",").filter(e=>" "!=e).concat(t["highlighted domain"].split(",").filter(e=>" "!=e)).filter(t=>t.includes(e)).length>0});return t.classed("trace",!0),n.h(".event-sq.trace").style("opacity",1),n.h(".event-sq.trace").selectAll("rect").style("fill","red"),t})}),a.on("click",()=>{window.open(i.embed_link,"_blank")});let c=i.type;if("email/text"===c||"notes"===c||"pdf"===c)t.append("iframe").style("width","650px").attr("src",i.embed_link).attr("frameborder",0);else{t.style("overflow: auto;"),t.append("svg").style("width","650px").style("height","600px").append("svg:image").classed("sketch",!0).style("width","650px").attr("y",0).attr("x",0).attr("xlink:href",`public/assets/${i.Sketch_ID}.png`)}}else console.log("does this work"),a.style("opacity",0),n.h(".event-sq").style("opacity",1)}async function g(){console.log(u.split("/"));let e=u.split("/");n.g("#main").selectAll("*").remove(),n.g("#main").append("div").classed("case-wrap",!0).selectAll("div.paragraph").data(e).join("div").classed("paragraph",!0).append("text").text(e=>e)}const u="\nAnoles, small active lizards native to the Americas and the Caribbean, have become a model system in both ecology and evolution. \nThese lizards have been studied intensively over the past 50 years, and serve as a canonical example of an adaptive radiation, where a diverse group of species, \nall occupying a wide range of ecological roles, can evolve. One of the main reasons that anoles are well-known in evolutionary circles is because different lineages of anoles have predictably \nand repeatedly evolved into a particular set of habitat specialist types, called ecomorphs. For example, one ecomorph of anoles, called grass-bush, includes species that are small and short-limbed, \nand prefer to hide on the fine tips of grass stalks and on the narrow branches of bushes. Species from the grass-bush ecomorph, highly specialized to this particular lifestyle, have evolved \nrepeatedly across the larger islands in the Caribbean. The anole ecomorphs represent a primary example of convergent evolution, where species, starting from distinct ancestors, evolve the same \nmorphology. The complicated mixture of divergence during adaptive radiation and predictable convergence to certain ecomorphs has made anoles a textbook example of macroevolutionary processes./\nUntangling the complex interplay of divergence and convergence during adaptive radiation has proven challenging. Most insights come from combining data on species’ traits with information from \nphylogenetic trees, which show the branching patterns of common ancestry and relatedness among species. For example, divergence can be identified when close relatives are more different in their \ntraits than one might expect. Likewise, convergence is seen when species have highly different ancestors but share key similarities in the present day. The MultiNet tool provides an ideal \nframework for visualizing patterns of evolution using these data, and for identifying cases of exceptional evolution./\nOne primary challenge in the early stages of a phylogenetic analysis of trait evolution is detecting outliers. These could represent errors in data entry, in matching species between the tree \nand trait matrix, or simply species that have exceptionally unusual traits. The MultiNet summary view provides an ideal way to detect such outliers. For example, by looking at the summary view \nof snout-vent length (SVL: a measure of body size), we can see that Anolis equestris is exceptionally large. This is in line with our expectations, as A. equestris is a member of the Crown \nGiant ecomorphs, a group of particularly large bodied anoles that also exhibit outlying body size measurements (Figure Summary View)./\nOnce we have a dataset with species traits and phylogenetic relationships, the MultiNet path view allows visualization of the evolutionary trajectories reconstructed for species from the past to \nthe present day. This is critical in understanding how species came to have the traits that they show today. In particular, one can easily visualize and differentiate between species who have \ntraits that are inherited unchanging from their deep ancestors (‘conservatism’) from species whose traits have evolved and diverged into their current form. Using A. equestris as an example again, \nthe path view reveals that whereas body size (SVL) has steadily increased throughout the species’ evolutionary trajectory, limb length (PC1_limbs) exhibits relative stasis (Figure Path View)./ \nThus, from the path view we may obtain a clearer understanding of the evolution of body shape through time. \nFinally, the MultiNet pair view provides a powerful and novel way to visualize patterns of convergence and divergence. In particular, this view has a set of tools that quickly isolate and visualize \nthe most convergent or divergent pairs of species in a phylogenetic tree. Investigators can then guide their hypotheses, analyses, and future research towards these exceptional pairs. \nFor instance, twig anoles have slender bodies, shortened limbs and tails, and widened toe pads, all of which are adaptations to facilitate traversal along narrow twigs at the ends of branches. \nTwig anoles anoles are classic examples of convergent evolution, and the path view demonstrates this clearly; A. insolatus and A. paternus, both twig anoles, diverged in toepad width and tail \nlength for much of their evolutionary trajectories, but now exhibit an exceptional degree of convergence (Figure Pair Convergence). In contrast, that path view demonstrates how A. garmani \n(a crown giant), and A. valencienni (a twig anole) have diverged extensively in traits such as body size, toe pad width, and tail length (Fig Pair Divergence)./\n";function f(e,t,a){return e.append("button").text(t).classed("btn btn--stripe",!0).on("click",()=>null!=a?a():console.log("null"))}!function(){let e=n.g("#header").append("div").classed("button-wrap",!0);n.g("#header").select("h1").on("click",()=>o()),f(e,"Timeline",p),f(e,"Case Study",g),f(e,"References",s)}();n.g("#tooltip").style("opacity",0).style("background-color","white").style("border","solid").style("border-width","2px").style("border-radius","5px").style("padding","5px").style("position","absolute");let v=new URL(document.location).searchParams,m=v.get("id");console.log("params",v),m?p(m):o()},7:function(e,t,a){}});
//# sourceMappingURL=app.c0a373fb.js.map