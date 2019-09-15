import React from 'react';

export default function Card({name, email, id}) {
    return (
        <div className="tc fl w-30 grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
           <img alt="robot" src={`https://robohash.org/${id}?200x200`} />
           <div>
               <h2>{name}</h2>
               <p>{email}</p>
           </div>
        </div>
    )
}
