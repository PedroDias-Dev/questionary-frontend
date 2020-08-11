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
};

function VerifyQuestionary( verify: boolean ){
    if (verify === true){
        alert('Tem certeza que deseja sair do questionário? Você ainda não terminou')
    }

    
}

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

/* const verifyAlert = ((verify: boolean) => {
    if (verify === true){
        Alert.alert(
        "Alert Title",
        "My Alert Msg",
        [
            {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
        );
}
});
*/


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

                    {props.children}
                </div>

                
            </header>
    );
}

export default PageHeader;