import styled, { keyframes } from "styled-components";

const typing = keyframes`
    from{
        widht:0;
    }
`;

const blink = keyframes`
    50% {
        border-color:transparent;
    }
`;

export const PageArea = styled.div`
    display:flex;
    margin:10px;
    gap:25px;
    flex-wrap:wrap;

    .leftSide{
        width:300px;
        padding:10px;
        display: flex;
        justify-content: center;
        align-items: center;

        .divImage{
            display:flex;

            img{
                width:300px;
                height:300px;
                border-radius:10rem;
                object-fit: cover;
                border:solid 1px #CCC;
            }
        }
    }

    .rigthSide{
        flex:1;
        justify-content: center;
        align-items: center;
        display: flex;

        .list{

            .title{
                
                h2{
                    margin: 0;
                }
            }

            .about{

                p{
                    text-align: justify;

                    span{
                        animation:${typing} 2s steps(40), ${blink} .5s step-end infinite alternate;
                        white-space: nowarp;
                        border-right:3px solid;
                    }
                }
            }
        }  
    }

    @media (max-width: 480px){
        .leftSide{
            width:100%;
        }
    }
`;