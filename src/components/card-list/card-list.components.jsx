import React from "react";
import "../card-list/card-list.style.css";
import { Card } from "../card/card.component";
// our CardList only cares about one thing

const CardList = props => {
  return (
    <div className="card-list">
      {props.monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
