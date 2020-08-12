import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './style.css'
import api from '../../services/api';

export interface User{
    id: number,
    name: string
}

interface UserProps{
    user: User
}

function Landing(){

    function createConnection(){
        api.post('connections', {
            user_id: ''
            
        })
        // console.log('sucesso');
    }

    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
            const { total } = response.data;

            setTotalConnections(total);
        })
    }, []);

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    
                    <h1>Funções Nativas de Banco de Dados</h1>
                    <p>Um questionário por Pedro, Parra, Samanta, Yan e Gustavo</p>

                </div>

                <img 
                src={landingImg} alt="Plataforma de estudos" className="hero-image" 
                />

                <div className="buttons-container">
                    <Link onClick={createConnection} to="/register-questionary" className="study">
                        <img  src={studyIcon} alt="Início"/>
                        Começar
                    </Link >

                    <Link to="/results" className="give-classes">
                        <img src={giveClassesIcon} alt="Resultados"/>
                        Resultados
                    </Link >

                    
                </div>

                <span className="total-connections">
                    Total de {totalConnections} conexões já realizadas
                    <img src={purpleHeartIcon} alt="Coração roxo"/>
                </span>
                <span className="directs">
                    <p>Todas as imagens e ícones foram fornecidos por Rocketseat.</p>
                    <p>Escola SENAI de Informática - 2020</p>

                </span>
            </div>
        </div>
    )
}

export default Landing;