import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom'

import PageHeader from '../../components/PageHeader';

import './style.css'
import Input from '../../components/Input';


import warningIcon from '../../assets/images/icons/warning.svg'

import api from '../../services/api';

function TeacherForm(){
    const history = useHistory();

    const [name, setName] = useState('');
    const [nota, setNota] = useState('');


    function handleCreateClass(e: FormEvent){
        e.preventDefault();

        api.post('users', {
            name,
            nota
        }).then(() => {
            if (name === '' || name === null){
                alert('Erro no cadastro. O nome não pode ser vazio. Tente novamente.');
                history.push('/')
            }

            else{
            alert('Resultado registrado! Você será redirecionado para a página inicial.');
            history.push('/');
            }

        }).catch(() => {
            alert('Erro no cadastro.');
            
        });

        console.log({
            name,
            nota
        });

        
    }
    
    
    return(
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="OK, vamos lá!" 
                description="O primeiro passo é preencher este formulário"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input name="name" label="Nome Completo"  
                            value={name}  
                            onChange={(e) => {setName(e.target.value)}} 
                        />

                    </fieldset>

                    <fieldset>
                        <legend>Sobre o questionário</legend>

                        <p>Neste questionário você irá ver conceitos sobre Funções Nativas de Banco de Dados, que foram apresentados no vídeo, e não se preocupe, 
                            não está valendo nota!
                        </p>

                    </fieldset>

                    

                    <footer className="firstFooter">
                        <p>
                            <img src={ warningIcon } alt="Aviso Importante"/>
                            Importante <br />
                            Preencha atentamente, assim poderá ver seu resultado após o questionário.
                        </p>
                        {/* <button type="submit"> Salvar os dados</button> */}
                    </footer>

                    <div className="Questionary">
                        <div className="questionaryHeader">
                            <h2>Questionary</h2>
                        </div>
                        <div className="question">
                                <strong>Pergunta 1 -</strong>
                                <h3>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque enim veniam molestiae sit rerum repellendus. Placeat tempore modi fugiat mollitia tempora explicabo facilis aliquid, eos aperiam aspernatur ab nesciunt voluptatibus!
                                </h3>
                                <div className="alternativas">
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" 
                                            value={Number(nota) + Number(1)} 
                                            onChange={(e) => {setNota(e.target.value)}}  />

                                        <p>opçao 1</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>opçao 1</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>opçao 1</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>opçao 1</p>
                                    </div>
                                </div>
                        </div>             
                        <div className="question">
                                <strong>Pergunta 1 -</strong>
                                <h3>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque enim veniam molestiae sit rerum repellendus. Placeat tempore modi fugiat mollitia tempora explicabo facilis aliquid, eos aperiam aspernatur ab nesciunt voluptatibus!
                                </h3>
                                <div className="alternativas">
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" 
                                            value={Number(nota) + Number(1)} 
                                            onChange={(e) => {setNota(e.target.value)}}  />

                                        <p>opçao 1</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>opçao 1</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>opçao 1</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>opçao 1</p>
                                    </div>
                                </div>
                        </div>             
                        <div className="question">
                                <strong>Pergunta 1 -</strong>
                                <h3>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque enim veniam molestiae sit rerum repellendus. Placeat tempore modi fugiat mollitia tempora explicabo facilis aliquid, eos aperiam aspernatur ab nesciunt voluptatibus!
                                </h3>
                                <div className="alternativas">
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" 
                                            value={Number(nota) + Number(1)} 
                                            onChange={(e) => {setNota(e.target.value)}}  />

                                        <p>opçao 1</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>opçao 1</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>opçao 1</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>opçao 1</p>
                                    </div>
                                </div>
                        </div>             
                        <div className="question">
                                <strong>Pergunta 1 -</strong>
                                <h3>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque enim veniam molestiae sit rerum repellendus. Placeat tempore modi fugiat mollitia tempora explicabo facilis aliquid, eos aperiam aspernatur ab nesciunt voluptatibus!
                                </h3>
                                <div className="alternativas">
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" 
                                            value={Number(nota) + Number(1)} 
                                            onChange={(e) => {setNota(e.target.value)}}  />

                                        <p>opçao 1</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>opçao 1</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>opçao 1</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>opçao 1</p>
                                    </div>
                                </div>
                        </div>             
                        <div className="question">
                                <strong>Pergunta 1 -</strong>
                                <h3>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque enim veniam molestiae sit rerum repellendus. Placeat tempore modi fugiat mollitia tempora explicabo facilis aliquid, eos aperiam aspernatur ab nesciunt voluptatibus!
                                </h3>
                                <div className="alternativas">
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" 
                                            value={Number(nota) + Number(1)} 
                                            onChange={(e) => {setNota(e.target.value)}}  />

                                        <p>opçao 1</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>opçao 1</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>opçao 1</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>opçao 1</p>
                                    </div>
                                </div>
                        </div>        

                        <div className="question">
                                <strong>Pergunta 1 -</strong>
                                <h3>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque enim veniam molestiae sit rerum repellendus. Placeat tempore modi fugiat mollitia tempora explicabo facilis aliquid, eos aperiam aspernatur ab nesciunt voluptatibus!
                                </h3>
                                <div className="alternativas">
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" 
                                            value={Number(nota) + Number(1)} 
                                            onChange={(e) => {setNota(e.target.value)}}  />

                                        <p>opçao 1</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>opçao 1</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>opçao 1</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>opçao 1</p>
                                    </div>
                                </div>
                        </div> 

                        <div className="question">
                                <strong>Pergunta 1 -</strong>
                                <h3>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque enim veniam molestiae sit rerum repellendus. Placeat tempore modi fugiat mollitia tempora explicabo facilis aliquid, eos aperiam aspernatur ab nesciunt voluptatibus!
                                </h3>
                                <div className="alternativas">
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" 
                                            value={Number(nota) + Number(1)} 
                                            onChange={(e) => {setNota(e.target.value)}}  />

                                        <p>opçao 1</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>opçao 1</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>opçao 1</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>opçao 1</p>
                                    </div>
                                </div>
                        </div> 

                        <div className="question">
                                <strong>Pergunta 1 -</strong>
                                <h3>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque enim veniam molestiae sit rerum repellendus. Placeat tempore modi fugiat mollitia tempora explicabo facilis aliquid, eos aperiam aspernatur ab nesciunt voluptatibus!
                                </h3>
                                <div className="alternativas">
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" 
                                            value={Number(nota) + Number(1)} 
                                            onChange={(e) => {setNota(e.target.value)}}  />

                                        <p>opçao 1</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>opçao 1</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>opçao 1</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>opçao 1</p>
                                    </div>
                                </div>
                        </div> 

                        <div className="question">
                                <strong>Pergunta 1 -</strong>
                                <h3>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque enim veniam molestiae sit rerum repellendus. Placeat tempore modi fugiat mollitia tempora explicabo facilis aliquid, eos aperiam aspernatur ab nesciunt voluptatibus!
                                </h3>
                                <div className="alternativas">
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" 
                                            value={Number(nota) + Number(1)} 
                                            onChange={(e) => {setNota(e.target.value)}}  />

                                        <p>opçao 1</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>opçao 1</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>opçao 1</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>opçao 1</p>
                                    </div>
                                </div>
                        </div> 

                        <div className="question">
                                <strong>Pergunta 1 -</strong>
                                <h3>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque enim veniam molestiae sit rerum repellendus. Placeat tempore modi fugiat mollitia tempora explicabo facilis aliquid, eos aperiam aspernatur ab nesciunt voluptatibus!
                                </h3>
                                <div className="alternativas">
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" 
                                            value={Number(nota) + Number(1)} 
                                            onChange={(e) => {setNota(e.target.value)}}  />

                                        <p>opçao 1</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>opçao 1</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>opçao 1</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>opçao 1</p>
                                    </div>
                                </div>
                        </div>      
                    </div>             
               

                    <footer className="lastFooter">

                        <p>Terminou? Então clique aqui:</p>

                        <button type="submit" >Finalizar</button>

                    </footer>


                </form>
            </main>
        </div>
    )
}

export default TeacherForm;