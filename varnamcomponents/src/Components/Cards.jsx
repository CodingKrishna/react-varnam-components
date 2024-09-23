import React from "react";
import './Cards.css'
const Cards=()=>{
    return(
        <div id="Cards" class="col-md-12 col-xs-12 car-sec cls-shadow">
              <h1 class="txt-cntr">Cards</h1>
            <div class="">
              <div class="background">
                  <div class="card">
                     <div class="color" id="blue">
                        <h1>1</h1>
                     </div>
                       <h2>Card1</h2>
                   </div>
                  <div class="card">
                     <div class="color" id="brown">
                       <h1>2</h1>
                     </div>
                      <h2>Card2</h2>
                 </div>
                 <div class="card">
                     <div class="color" id="green">
                       <h1>3</h1>
                     </div>
                      <h2>Card3</h2>
                 </div>
             </div>
             <div id="background">
               <div class="div1">
                <h2>I am a content!</h2>
              </div>
             <div class="div1">
             </div>
          </div>
      </div>
   </div>
    );
};
export default Cards;