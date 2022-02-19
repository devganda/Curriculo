import {React, useState, useEffect} from "react";
import { PageArea } from "./styled";
import { PageContainer } from "../mainComponents";
import useApi from "../../api/api";
import { FadeInDown,FadeInRight} from 'animate-css-styled-components';

const Header = () =>{
    const [user, setUser] = useState([]);
    let api = useApi();
    let bio = user.bio;
    let email = user.bio;
    useEffect(()=>{
        const getAllUser = async ()=>{
            let json = await api.getAll();
            //console.log(json);
            setUser(json);
        }
        getAllUser();
    },[]);

    return(
        <>
            <PageContainer> 
                <PageArea>
                    <div className="leftSide">
                        <FadeInDown>
                            <div className="divImage">
                                {user.avatar_url &&
                                    <img src={user.avatar_url} alt="photo perfil github"/>
                                }
                            </div>
                        </FadeInDown>
                    </div>
                    <div className="rigthSide">
                        <FadeInRight>
                            <div className="list">
                                <div className="title">
                                    {user.name &&
                                        <h2>{user.name}</h2>
                                    }
                                </div>
                                <div className="about">
                                    {user.bio &&
                                        <p>
                                            {bio.substr(0,31)}<br/>
                                            Trabalho com desenvolvilmento web há mais de 2 anos e meio na {user.company}, nesse meio tempo tive contato com várias tecnologias, dentre elas: Javascritp, PHP, Sql e React. <br/>
                                            Sou natural de {user.location}, cidadizinha do interior do Góias que faz divisa com Brasília. <br/>
                                            Tenho 26 anos, curso o último semestre de Análise e desenvolvimento de sistemas.<br/> 
                                            <span style={{color:'#fff'}}><b>{email.substr(32)}</b></span>   
                                        </p>
                                    } 
                                </div>
                            </div>
                        </FadeInRight>
                    </div>
                </PageArea>
            </PageContainer>
        </>
    );
}

export default Header;