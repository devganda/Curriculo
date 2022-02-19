import React from "react";
import { PageContainer } from "../../components/mainComponents";
import { PageArea } from "./styled";
import estrategia from './estrategia.svg';
import janus from './janus_.svg';
import {FadeInUp} from 'animate-css-styled-components';

const Experience = () =>{
    return (
        <>
             <PageArea>
                <PageContainer>
                    <FadeInUp>
                        <div className="experience">
                            <div>
                                <h2>Experiência:</h2>
                            </div>
                            <div className="experienceText">
                                <div className="leftSide">
                                    <div className="divImage">
                                        <img src={estrategia} alt="photo estrategia"/>
                                    </div>
                                    <div className="divTitle">
                                        <h4>Estratégia Concursos</h4>
                                    </div>
                                    <div className="text">
                                        <p>
                                            Trabalhei por quatro anos na Estratégia, foi aonde eu tive o meu primeiro contato com a tecnologia. Passei por vários setores dentro da empresa: comecei no pós-venda, depois eu fui para o contato (responder e-mails), e finalmente, fui para setor combate (combatia às fraudes nos cadastros, rateio de materiais), no qual cheguei ao cargo de gerência.  
                                        </p>
                                    </div> 
                                </div>
                                <div className="rightSide">
                                    <div className="divImage">
                                        <img src={janus} alt=""/>
                                    </div>
                                    <div className="divTitle">
                                        <h4>Janus Educare</h4>
                                    </div>
                                    <div className="text">
                                        <p>
                                            Trabalho atualmente na Janus Educare, ocupo o cargo de programador de sistema. Atuo fortemente no desenvolvimento de frontend e backend. Desde do levamantamento dos requisitos, passando pela regra de negócio até o deploy em produção.
                                        </p>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </FadeInUp>
                </PageContainer>
            </PageArea>
        </>
    );
}

export default Experience;