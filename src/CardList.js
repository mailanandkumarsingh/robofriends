import React from 'react';
import Card from './Card';

export default function CardList({robots}) {
    return (
        <div className="mw5 mw7-ns center">
            {
                robots.map((robot) => {
                    return <Card key ={robot.id} name={robot.name} email={robot.email} title={robot.username} id={robot.id}/>
                })
            }
        </div>
    )
}
