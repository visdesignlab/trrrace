import '../styles/index.scss';
import * as d3 from 'd3';

export async function renderCaseStudy(){
    console.log(casestudyOb.split('/'));
   // let paragraphs = casestudyOb.split('/');

    d3.select('#main').selectAll('*').remove();
 
    let wrap = d3.select('#main').append('div').classed('case-wrap', true);

    wrap.append('html').html(casestudyOb)
    // let para = wrap.selectAll('div.paragraph').data(paragraphs).join('div').classed('paragraph', true);
    // para.append('text').text(t=> t);

}

export const casestudyOb = `
<p><strong>Anoles</strong>, small active lizards native to the Americas and the Caribbean, have become a <strong>model system</strong> in both ecology and evolution. 
These lizards have been studied intensively over the past 50 years, and serve as a canonical example of an <strong>adaptive radiation</strong>, where a diverse group of species, 
all occupying a wide range of ecological roles, can evolve. One of the main reasons that anoles are well-known in evolutionary circles is because different lineages of anoles have predictably 
and repeatedly evolved into a particular set of habitat specialist types, called <strong>ecomorphs</strong>. For example, one ecomorph of anoles, called grass-bush, includes species that are small and short-limbed, 
and prefer to hide on the fine tips of grass stalks and on the narrow branches of bushes. Species from the grass-bush ecomorph, highly specialized to this particular lifestyle, have evolved 
repeatedly across the larger islands in the Caribbean. The anole ecomorphs represent a primary example of <strong>convergent evolution</strong>, where species, starting from distinct ancestors, evolve the same 
morphology. The complicated mixture of divergence during adaptive radiation and predictable convergence to certain ecomorphs has made anoles a textbook example of <strong>macroevolutionary processes.</strong></P>

<p>Untangling the complex interplay of divergence and convergence during adaptive radiation has proven challenging. Most insights come from combining data on species’ traits with information from 
phylogenetic trees, which show the branching patterns of common ancestry and relatedness among species. For example, divergence can be identified when close relatives are more different in their 
traits than one might expect. Likewise, convergence is seen when species have highly different ancestors but share key similarities in the present day. The MultiNet tool provides an ideal 
framework for visualizing patterns of evolution using these data, and for identifying cases of exceptional evolution.</p>

<p>One primary challenge in the early stages of a phylogenetic analysis of trait evolution is <strong>detecting outliers</strong>. These could represent errors in data entry, in matching species between the tree 
and trait matrix, or simply species that have exceptionally unusual traits. The MultiNet summary view provides an ideal way to detect such outliers. For example, by looking at the summary view 
of snout-vent length (SVL: a measure of body size), we can see that Anolis equestris is exceptionally large. This is in line with our expectations, as A. equestris is a member of the Crown 
Giant ecomorphs, a group of particularly large bodied anoles that also exhibit outlying body size measurements (Figure 1A & 1B).</p>

<img src="public/assets/figure-1-case.png">
<div class="figure-blurb">
Figure 1. Visualization of trait distribution and evolutionary trajectories using Trevo. A. Distribution of body size across contemporary species of Anolis lizards using the Summary View. 
Several outlying species of exceptionally large anoles are brushed in red. B. One species of exceptionally large anoles, A. equestris, which is in the uppermost tail of the body size 
distribution shown in A, is highlighted on the phylogeny. C. Path view for A. equestris. On the top, Circles represent internal nodes of the phylogeny along the path of A. equestris 
from the root node to the leaf node, with size proportional to the number of other species sharing that node. The box to the left summarizes the trajectory of paths for each trait. 
Individual paths for snout-vent-length (SVL), a commonly used measure of body size, and limb length are plotted. As above, each bar corresponds to an internal node, with the height of the bar corresponding to the value of the measurement. As the values at internal nodes are obtained with uncertainty, the span along the Y-axis for each bar is proportional to the extent of uncertainty of measurement. Boxes on the right illustrate the overall trend observed for each path. 
</div>

<p>Once we have a dataset with species traits and phylogenetic relationships, the MultiNet path view allows visualization of the evolutionary trajectories reconstructed for species from the past to 
the present day. This is critical in understanding how species came to have the traits that they show today. In particular, one can easily visualize and differentiate between species who have 
traits that are inherited unchanging from their deep ancestors (‘conservatism’) from species whose traits have evolved and diverged into their current form. Using A. equestris as an example again, 
the path view reveals that whereas body size (SVL) has steadily increased throughout the species’ evolutionary trajectory, limb length (PC1_limbs) exhibits relative stasis (Figure 2).</p>

<img src="public/assets/figure-2-case.png">
<div class="figure-blurb">
Figure 2. Pattern view of instances of convergence and divergence in Anolis lizards. A. Pattern view of well documented convergence among two members 
(A. insolatus & A. paternus) of the twig ecomorph. B. Pattern view of divergence between members of two distinct ecomorphs, a crown giant (A. garmani) 
and a twig anole (A. valencienni). C. A newly discovered case of convergence in tail length between mainland anolis lizards (A. petersii and A. frenatus). 
</div>

<p>Finally, the Trevo pattern view provides a novel way to visualize patterns of convergence and divergence among species pairs. In particular, 
this view has a set of tools that quickly isolate and visualize the most convergent or divergent pairs of species in a phylogenetic tree. 
We used this approach to 1) confirm hypothesized instances of convergent and divergent trait evolution in island Anolis lizards, and 2) identify a 
heretofore undescribed convergent species pair in the relatively understudied Anolis lizards of South and Central America.</p>

<p>To demonstrate the capacity of Trevo to identify known cases of convergence and divergence, we first focused our study on the ecomorphs of the Greater 
Antilles. For instance, twig anoles have slender bodies, shortened limbs and tails, and widened toe pads, all of which are adaptations to facilitate traversal 
along narrow twigs at the ends of branches. Twig anoles anoles are classic examples of convergent evolution, and the path view demonstrates this clearly; A. 
insolatus and A. paternus, both twig anoles, diverged in toepad width and tail length for much of their evolutionary trajectories, but now exhibit an 
exceptional degree of convergence (Figure 2A). In contrast, that path view demonstrates how A. garmani (a crown giant), and A. valencienni (a twig anole) 
have diverged extensively in traits such as body size, toe pad width, and tail length (Figure 2B). Previously, we would have been able to identify putatively 
convergent (or divergent) species pairs by, for instance, comparing observed trait similarity among species to that expected under an assumed model of trait 
evolution. However, given that the path view is novel to Trevo, we would have been unable to generate such a visualization of convergence and divergence in 
trait values using other commonly used software for the phylogenetic analysis of trait evolution. </p>

<p>Having demonstrated that Trevo can identify and visualize known instances of trait convergence and divergence, 
we subsequently sought to redirect our attention to the relatively understudied mainland species of Anolis. 
By repeating the analysis described above, but focusing on mainland species exclusively, we were able to identify a pair of species exhibiting a strong 
pattern of morphological convergence, specifically with respect to tail length (Figure 2C). These two species, A. petersii and A. frenatus last share a 
common ancestor more than 50 million years ago, yet despite their long and distinct evolutionary histories, use of the pattern view reveals that each 
species independently evolved from intermediate length tails, to particularly long tails. This finding leads us to question what evolutionary force led 
to this pattern of convergence, and demonstrates the utility of Trevo to conduct exploratory analysis, and to identify future research opportunities. </p>


`