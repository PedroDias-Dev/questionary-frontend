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

            else if (Number(nota) >= 10){
                alert('Erro ao registrar. Não selecione mais de uma opção por questão! Tente novamente.');
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
                description="O primeiro passo é preencher este formulário."
                description2="Preencha atentamente, assim poderá ver seu resultado após o questionário."
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
                            Não selecione mais de uma opção por questão, ou seu resultado não será registrado! 
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
                                Para que serve a função SUM ?
                                </h3>
                                <div className="alternativas">
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                            

                                        <p>Para mostrar todos os itens da coluna.</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>Para sumir com a coluna. </p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" 
                                            value={Number(nota) + Number(1)} 
                                            onChange={(e) => {setNota(e.target.value)}}  
                                            />
                                        <p>Para realizar a soma dos valores da coluna.</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>Para subtrair os valores da coluna.</p>
                                    </div>
                                </div>
                        </div>             
                        <div className="question">
                                <strong>Pergunta 2 -</strong>
                                <h3>
                                Quando utilizamos a função MAX ?
                                </h3>
                                <div className="alternativas">
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>

                                        <p>Quando queremos mostrar todos os itens da coluna.</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" 
                                            value={Number(nota) + Number(1)} 
                                            onChange={(e) => {setNota(e.target.value)}}/>
                                        <p>Quando queremos mostrar o maior valor da coluna.</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>Quando queremos somar todos os valores e mostrar o resultado.</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>Quando queremos somar todos os valores ignorando o NULL.</p>
                                    </div>
                                </div>
                        </div>             
                        <div className="question">
                                <strong>Pergunta 3 -</strong>
                                <h3>
                                Com que outra função podemos utilizar o HAVING ?
                                </h3>
                                <div className="alternativas">
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>MAX.</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>ALIAS.</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>AVG.</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" 
                                            value={Number(nota) + Number(1)} 
                                            onChange={(e) => {setNota(e.target.value)}}/>
                                        <p>GROUP BY.</p>
                                    </div>
                                </div>
                        </div>             
                        <div className="question">
                                <strong>Pergunta 4 -</strong>
                                <h3>
                                Podemos criar um apelido para a coluna através da palvra-chave:
                                </h3>
                                <div className="alternativas">
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" 
                                            value={Number(nota) + Number(1)} 
                                            onChange={(e) => {setNota(e.target.value)}}  />

                                        <p>AS.</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>BY</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>COMO</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>LIKE</p>
                                    </div>
                                </div>
                        </div>             
                        <div className="question">
                                <strong>Pergunta 5 -</strong>
                                <h3>
                                A função COUNT retorna:
                                </h3>
                                <div className="alternativas">
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>

                                        <p>O número de linhas total (incluindo linhas com valor NULL).</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>O número de tabelas criadas.  </p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>O número de caracteres total.</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" 
                                            value={Number(nota) + Number(1)} 
                                            onChange={(e) => {setNota(e.target.value)}}/>
                                        <p>Nenhuma das alternativas.</p>
                                    </div>
                                </div>
                        </div>        

                        <div className="question">
                                <strong>Pergunta 6 -</strong>
                                <h3>
                                A função MIN retorna:
                                </h3>
                                <div className="alternativas">
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" 
                                            value={Number(nota) + Number(1)} 
                                            onChange={(e) => {setNota(e.target.value)}}  />

                                        <p>O menor valor da coluna.    </p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>O resultado da subtração de todos os valores da coluna.</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>Quanto queremos mostrar todos os itens e ignorar valroes NULL.</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>O resultado da subtração todos os valores ignorando valores NULL.</p>
                                    </div>
                                </div>
                        </div> 

                        <div className="question">
                                <strong>Pergunta 7 -</strong>
                                <h3>
                                Com qual principal conceito da orientação esta relacionada as funções escalares?
                                </h3>
                                <div className="alternativas">
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>

                                        <p>Abstração.</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" 
                                            value={Number(nota) + Number(1)} 
                                            onChange={(e) => {setNota(e.target.value)}}/>
                                        <p>Encapsulamento.</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>Herança.</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>Polimorfismo.</p>
                                    </div>
                                </div>
                        </div> 

                        <div className="question">
                                <strong>Pergunta 8 -</strong>
                                <h3>
                                Na sintaxe 'NTILE(x)'. O 'x' se refere à:
                                </h3>
                                <div className="alternativas">
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>

                                        <p>Quantidade de linhas a ser dividida.</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" 
                                            value={Number(nota) + Number(1)} 
                                            onChange={(e) => {setNota(e.target.value)}}/>
                                        <p>Quantidade de grupos a ser dividido.</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>Qual sera o nome do resultado da divisão.</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>Qual grupo vai ser dividido.</p>
                                    </div>
                                </div>
                        </div> 

                        <div className="question">
                                <strong>Pergunta 9 -</strong>
                                <h3>
                                Através do exemplo dado em aula o DENSE_RANK teve seu resultado atribuido a qual entidade?
                                </h3>
                                <div className="alternativas">
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>

                                        <p>Name.</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>ProductID.</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" 
                                            value={Number(nota) + Number(1)} 
                                            onChange={(e) => {setNota(e.target.value)}}/>
                                        <p>Quantity.</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>LocationID.</p>
                                    </div>
                                </div>
                        </div> 

                        <div className="question">
                                <strong>Pergunta 10 -</strong>
                                <h3>
                                A função COLLATE serve para:
                                </h3>
                                <div className="alternativas">
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" 
                                            value={Number(nota) + Number(1)} 
                                            onChange={(e) => {setNota(e.target.value)}}  />

                                        <p>Escolher um agrupamento para ser modificado.</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>Escolher uma linha a ser modificada. </p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>Escolher uma tabela para ser modificada.</p>
                                    </div>
                                    <div className="alternativa">
                                        <input type="checkbox" name="myCheckbox" value="0"/>
                                        <p>Nenhuma das opções.</p>
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