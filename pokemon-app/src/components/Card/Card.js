import React from "react";
import "./Card.css";

const Card = ({ pokemon }) => {
    return (
        <div className="card">
            <div className="card-img">
                <img src={pokemon.sprites.front_default} />
            </div>
            <h3 className="card-name">{pokemon.name}</h3>
            <div className="card-types">
                <div>タイプ</div>
                {pokemon.types.map((type) => (
                    <div key={type.type.name}>
                        <span className="type-data">{type.type.name}</span>
                    </div>
                ))}
            </div>
            <div className="card-info">
                <div className="card-data">
                    <p className="title">重さ：{pokemon.weight}</p>
                </div>
                <div className="card-data">
                    <p className="title">高さ：{pokemon.height}</p>
                </div>
                <div className="card-data">
                    <p className="title">
                        アビリティ：{pokemon.abilities[0].ability.name}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
