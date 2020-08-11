import React, { useState, FormEvent } from 'react';
//import { Link } from 'react-router-dom'

import './style.css'

import PageHeader from '../../components/PageHeader';
import TeacherItem, {Teacher} from '../../components/TeacherItem'
import Input from '../../components/Input';

import api from '../../services/api';




function TeacherList(){
    const [teachers, setTeachers] = useState([]);

    const [name, setName] = useState('')

    async function searchTeachers(e: FormEvent){
        e.preventDefault();

        const response = await api.get('users', {
            params: {
                name,
            }
        });

        setTeachers(response.data);
    }

    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Veja seus resultados aqui.">
                
                <div className="description">
                    <p>
                        Caso seu nome não apareça, você provavelmente não realizou o cadastro.
                        Caso sua nota não apareça, você provavelmente não realizou o questionário.
                    </p>
                </div>

                <form id="search-teachers" onSubmit={searchTeachers} >
                    
                    <Input type="text" name="Nome" label="Coloque aqui seu nome"
                        value={name}
                        onChange={(e) => {setName(e.target.value)}} 
                    />

                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher}/>
                })}
                
            </main>
        </div>
    )
}

export default TeacherList;