import React from 'react';
import './Pagination.css'; 

const Pagination = () => {
  return (
    <div id="Pagination" className="col-md-12 col-xs-12 pag-sec cls-shadow">
      <h1 className="txt-cntr">Pagination</h1>
      <div className="pad-cls">
        <div className="col-md-12 col-xs-12 border-shw pag-height">
          <h2>Simple Pagination</h2>
          <div className="pagination">
            <a href="">&laquo;</a>
            <a href="">1</a>
            <a href="">2</a>
            <a href="">3</a>
            <a href="">4</a>
            <a href="">5</a>
            <a href="">6</a>
            <a href="">&raquo;</a>
          </div>
        </div>
        <div className="col-md-12 col-xs-12 border-shw pag-height">
          <h2>Hover Pagination</h2>
          <div className="pagination2">
            <a href="">&laquo;</a>
            <a href="">1</a>
            <a className="active" href="">
              2
            </a>
            <a href="">3</a>
            <a href="">4</a>
            <a href="">5</a>
            <a href="">6</a>
            <a href="">&raquo;</a>
          </div>
        </div>
        <div className="col-md-12 col-xs-12 border-shw pag-height">
          <h2>Pagination with Borders</h2>
          <div className="pagination3">
            <a href="">&laquo;</a>
            <a href="">1</a>
            <a href="">2</a>
            <a href="">3</a>
            <a href="">4</a>
            <a href="">5</a>
            <a href="">6</a>
            <a href="">&raquo;</a>
          </div>
        </div>
        <div className="col-md-12 col-xs-12 border-shw pag-height">
          <h2>Pagination with Margins</h2>
          <div className="pagination4">
            <a href="">&laquo;</a>
            <a href="">1</a>
            <a href="">2</a>
            <a href="">3</a>
            <a href="">4</a>
            <a href="">5</a>
            <a href="">6</a>
            <a >&raquo;</a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
