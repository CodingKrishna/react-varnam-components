import React from "react";
import './Buttons.css';
const Buttons=()=>{
    return(
        <div className="col-md-12 col-xs-12 btn-sec">
      <h1 className="txt-cntr">BUTTONS</h1>
      <div className="btn-container pad-cls">
        <div className="col-md-12 col-xs-12 cls-shadow cls-height">
          <h3>Color Buttons</h3>
          <button className="btn-prop red-clr">Red</button>
          <button className="btn-prop green-clr">Green</button>
          <button className="btn-prop blue-clr">Blue</button>
          <button className="btn-prop yellow-clr">Yellow</button>
          <button className="btn-prop purple-clr">Purple</button>
          <button className="btn-prop black-clr">Black</button>
          <button className="btn-prop disable-clr" disabled>Disabled</button>
        </div>
        <div className="col-md-12 col-xs-12 cls-shadow cls-height">
          <h3>Hover Buttons</h3>
          <button className="btn-prop red-clr">Red</button>
          <button className="btn-prop green-clr">Green</button>
          <button className="btn-prop blue-clr">Blue</button>
          <button className="btn-prop yellow-clr">Yellow</button>
          <button className="btn-prop purple-clr">Purple</button>
          <button className="btn-prop black-clr">Black</button>
          <button className="btn-prop disable-clr" disabled>Disabled</button>
        </div>
        <div className="col-md-12 col-xs-12 cls-shadow cls-height2">
          <h3>Different Sizes</h3>
          <button className="tiny-btn">Tiny</button>
          <button className="small-btn">Small</button>
          <button className="medm-btn">Medium</button>
          <button className="large-btn">Large</button>
          <button className="xlrge-btn">XLarge</button>
        </div>
        <div className="col-md-12 col-xs-12 cls-shadow cls-height2">
          <h3>Block Level Button</h3>
          <button className="block-btn pink-clr">Block1</button><br />
          <button className="block-btn purple-clr">Block2</button>
        </div>
        <div className="col-md-12 col-xs-12 cls-shadow cls-height2">
          <h3>Add Button</h3>
          <button className="add-btn red-clr"><i className="fa fa-plus" aria-hidden="true"></i></button>
          <button className="add-btn black-clr"><i className="fa fa-plus" aria-hidden="true"></i></button>
          <button className="add-btn yellow-clr"><i className="fa fa-plus" aria-hidden="true"></i></button>
          <button className="add-btn green-clr"><i className="fa fa-plus" aria-hidden="true"></i></button>
        </div>
        <div className="col-md-12 col-xs-12 cls-shadow cls-height2">
          <h3>Border Buttons</h3>
          <button className="border-btn border-clr-black">Button</button>
          <button className="border-btn border-clr-navi">Button</button>
          <button className="border-btn border-clr-red">Button</button>
          <button className="border-btn border-clr-blue">Button</button>
        </div>
      </div>
    </div>

    );
};

export default Buttons;