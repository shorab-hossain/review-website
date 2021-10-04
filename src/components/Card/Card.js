import React from 'react';

const Card = (props) => {
    const {name,age,Blood,Profession,img} =props.card;
    return (
        <div className="col">
        <div className="card h-100 p-3 shadow" style={{
          background:"Khaki"
        }}>
          <img style={{height:"250px"}} src={img} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h4 className="card-title fw-bold text-primary">Name:  {name}</h4>
            <h5 className="card-title">Age:  {age}</h5>
            <h5 className="card-title ">Blood:  {Blood}</h5>
            <h5 className="card-title ">Profession:  {Profession}</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
          <div>
            <button className="btn btn-primary ps-3 pe-3 py-2 d-flex mx-auto">Contract Us</button>
          </div>
        </div>
      </div>
    );
};

export default Card;