import React from 'react';
import "./body.css";


export default function Pagination(props) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(props.TokensDetails/props.postPerPage); i++){
        pageNumbers.push(i);
    }

  return (
    <div className='pagination'>

        <div className="numbers">
          {pageNumbers.map((number)=> {
             <div key={number} onClick={() => props.paginate(number)} className={props.currentPage === number ? "active" : "nothing" }>
                 {number}
             </div>
          })} 

        </div>


    </div>
  )
}
