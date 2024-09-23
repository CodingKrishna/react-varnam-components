import React from "react";
import './NavBar.css';

const NavBar=()=>{
    return(
        <div  id="Navbar" class="col-md-12 col-xs-12 nav-sec cls-shadow">
        <h1 class="txt-cntr">NavBars</h1>
        <div class="pad-cls">
          <div class="">
              <h3>VerticalNavBar</h3>
                    <nav class="">
                        <ul class="ver-nav">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Carries</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">News</a></li>
                        </ul>
                    </nav>
            </div>
            <div class="">
                <h3>HarizontalNavBar</h3>
                <nav class="">
                    <ul class="har-nav">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Carries</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">News</a></li>
                    </ul>
                </nav>
      </div>
  </div>

</div>
    );
};
export default NavBar;