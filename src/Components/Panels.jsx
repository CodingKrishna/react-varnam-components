import React from "react";
import './Panels.css';
const Panels=()=>{
      return(
        <div  id="Pannels" class="col-md-12 col-xs-12 pan-sec cls-shadow">
                  		<div class="pad-cls">
							<h1 class="txt-cntr">Panels</h1>
							<h3>Panel Default</h3>
							<div class="panel panel-default">
									<div class="panel-heading">Panel Heading</div>
									<div class="panel-body">Panel default</div>
							</div>
							<h3>Panel info</h3>
							<div class="panel panel-info">
									<div class="panel-heading">Panel Heading</div>
									<div class="panel-body">Panel info</div>
							</div>
							<h3>Panel Success</h3>
							<div class="panel panel-success">
									<div class="panel-heading">Panel Heading</div>
									<div class="panel-body">Panel success</div>
							</div>
							<h3>Panel Primary</h3>
							<div class="panel panel-primary">
									<div class="panel-heading">Panel Heading</div>
									<div class="panel-body">Panel primary</div>
							</div>
							<h3>Panel Warning</h3>
							<div class="panel panel-warning">
									<div class="panel-heading">Panel Heading</div>
									<div class="panel-body">Panel warning</div>
							</div>
							<h3>Panel Danger</h3>
							<div class="panel panel-danger">
									<div class="panel-heading">Panel Heading</div>
									<div class="panel-body">Panel danger</div>
							</div>
						</div>

                  </div>

      );
};
export default Panels;