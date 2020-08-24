import React from 'react';

import Slides from '../../components/SlidesHome';
import Top from '../../components/Top';
import Footer from '../../components/Footer';

import './styles.css';

import homeBenef from '../../assets/home-benef.png';


export default function Home() {
  return (
    <>
      <Top />
      <div id="check-dates">

        <div className="check-item">
          <label>Check-in</label>
          <input type="date" name="checkIn" ></input>
        </div>

        <div className="check-item">
          <label>Check-out</label>
          <input type="date" name="checkOut" ></input>
        </div>

        <div className="check-item">
          <label>Adultos</label>
          <input type="number" name="checkOut" ></input>
        </div>

        <div className="check-item">
          <label>Crianças</label>
          <input type="number" name="checkOut" ></input>
        </div>


          <button>Pesquisar</button>


      </div>
      <Slides />
      
      <img src={homeBenef} alt=""/>
      
      <h1>Prime Lofts - Aluguel para Temporadas em Blumenau</h1>
      <p>Pensando no bem estar de quem visita nossa cidade para turismo ou negócios, 
        criamos um espaço onde você possa se sentir ao menos um pouco, 
        como se estivesse em casa, sabendo sempre que o melhor lugar do mundo 
        para estar é a nossa casa.
      </p>

      <div className="map">
      <div className="porque-conosco">
        <h2>Por que reservar conosco</h2>
          <li>100m da Rodoviária de Blumenau</li>
          <li>300m da Universidade Regional de Blumenau</li>
          <li>100m da Via Expressa de acesso ao Centro</li>
          <li>Estacionamento privativo no mesmo edifício</li>
          <li>Internet de alta velocidade</li>
          <li>100% mobiliado e decorado</li>
      </div>

      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.2047892159408!2d-49.07364297986042!3d-26.896995050133103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df1f18dc472657%3A0x65de9fe70b4aab69!2sR.%20Dois%20de%20Setembro%2C%20Blumenau%20-%20SC!5e0!3m2!1spt-BR!2sbr!4v1597796077262!5m2!1spt-BR!2sbr" 
        title="Address"
        width="400" 
        height="300" 
        frameborder="0" 
        style={{'border':1}}
        allowfullscreen="" 
        aria-hidden="false" 
        tabindex="0">

      </iframe>

      </div>
      <Footer />
    </>
  );
}