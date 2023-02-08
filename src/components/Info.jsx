import React from "react";
import AppContext from "../context";

function Info({ title, image, description }) {

    const { setCartOpened } = React.useContext(AppContext);

    return (
        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img className="mb-20" width={150} src={image} alt="Empty" />
            <h2>{title}</h2>
            <p className="opacity-6">{description}</p>
            <button className="greenButton" onClick={() => setCartOpened(false)}>
                <img src="img/arrow.svg" alt="Arrow" />
                Повернутися назад
            </button>
        </div>
    );
}


export default Info;

