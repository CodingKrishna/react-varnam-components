import React from "react";
import  './BreadCrumbs.css';
const BreadCrumbs=()=>
{
   return(
    <div id="Breadcrumb" class="col-md-12 col-xs-12 bred-sec cls-shadow">
                  			<h1 class="txt-cntr">Breadcrumbs</h1>
                  		<div class="brd-cls pad-cls">
								<ul class="breadcrumb">
  									<li><a href="#">Home</a></li>
  									<li><a href="#">AboutUs</a></li>
  									<li><a href="#">Carrer</a></li>
  									<li><a href="#">Intro</a></li>
								</ul>
						</div>
                  </div>
   );
};
export default BreadCrumbs;