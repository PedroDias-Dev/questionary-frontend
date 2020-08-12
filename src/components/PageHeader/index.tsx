import React from 'react';

import { Link } from 'react-router-dom'
//import { Alert } from 'react-native'


import backIcon from '../../assets/images/icons/back.svg'

import './style.css'

// MUDA O TITULO DAS PAGINAS DIFERENTES COM O MESMO HEADER (PARAMETRO)
interface PageHeaderProps{
    title: string;
    //? - nao obrigatorio
    description?: string;
    description2?: string;
};



export interface User{
    id: number,
    name: string
}

interface UserProps{
    user: User
}

export interface Teacher{
    id: number,
    name: string,
    nota: string,
}

interface TeacherItemProps{
    teacher: Teacher
}



const PageHeader: React.FC<PageHeaderProps> =  (props) => {

    

    return(
        <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img src={backIcon} alt="Voltar"/>
                    </Link>

                    
                </div>

                <div className="header-content">
                    <strong>{props.title}</strong>
                    {props.description && <p>{props.description}</p>}
                    {props.description2 && <p>{props.description2}</p>}

                    {props.children}
                </div>

                
            </header>
    );
}

export default PageHeader;