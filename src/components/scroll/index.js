import {React, useEffect, useState} from 'react';
import { PageContainer } from '../mainComponents';
import { PageArea } from './styled';
import useApi from '../../api/api';

import { Swiper, SwiperSlide } from 'swiper/react';
import {FadeInLeft} from 'animate-css-styled-components';

// Import Swiper styles
import 'swiper/css';

const Scroll = () =>{
    const [repo, setRepo] = useState([]);
    let api = useApi();
    let repodesc = repo.sort((a,b)=>{// ordenando array para desc
        return b.id - a.id;
    });

    useEffect(()=>{
        const getRepo = async () =>{
            let json = await api.getAllRepos(); 
            setRepo(json);
        }
        getRepo();
    },[]);

    return(
        <>
            <PageContainer>
               <PageArea>
                   <FadeInLeft>
                    <h2>Projetos:</h2>
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={3}
                        >
                            {repodesc &&
                                repodesc.map((i, k)=>
                            
                                <SwiperSlide key={k} className="testando">
                                    <div className="card" >
                                        <div className="title">
                                            <h4 >{i.name}</h4>
                                        </div>
                                        <div className="description" >
                                            {i.description}
                                        </div>
                                        <div className="buttons" > 
                                        <a href={i.html_url} >Projeto no Github</a>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                )
                            } 
                        </Swiper>  
                    </FadeInLeft> 
                </PageArea> 
            </PageContainer>
        </>
    );
} 

export default Scroll;