import React from 'react';

import './styles.css';

const Top = () => {

    return (
        <>
            <div className="top-contact">
                <div className="top-prime">
                    <h1>Prime Lofts</h1>
                    <h3>Lofts para férias e moradia</h3>
                </div>

                <div className="reservar">
                    contao@primelofts.com.br
                    <h4>047 99929-9999</h4>
                    <button>Reservar</button>
                </div>
            </div>
            <div className="menu">
                <a href="/#">Início</a>
                <a href="/#">Apartamentos & Suítes</a>
                <a href="/#">Atrações Turísticas</a>
                <a href="/#">Sobre</a>
                <a href="/#">Contato</a>
            </div>
        </>
    );

};

export default Top;