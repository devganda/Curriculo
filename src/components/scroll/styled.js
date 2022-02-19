import styled from 'styled-components';

export const PageArea = styled.div`
  
    .swiper-slide swiper-slide-active{
        width:279px!important;
    }

    .testando{
        width:223px!important;
        padding: 10px;
    }
    .card{
        padding:10px;
        backdrop-filter: blur(16px) saturate(180%);
        -webkit-backdrop-filter: blur(16px) saturate(180%);
        background-color:#fff;
        border: 1px solid rgba(255, 255, 255, 0.125);
        border-radius: 12px;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        height:200px;
        align-items:center;
        cursor:pointer;
        transition:all ease 0.2s;
       
        &:hover{
            box-shadow: 0px 0px 5px 0px #CCC;
            -webkit-transform: scale(1.05);
            transform: scale(1.05);
        }

        .title{

            h4{
                margin: 0;
                color:#605d5d; 
            }
        }

        .description{
            text-align:center;
            color:#605d5d; 
        }

        a{
            color:#ff1a4d;
            outline:none;
            text-decoration:none;

            &:hover{
                filter: brightness(0.5);
            }
        }
    }

    @media (max-width: 480px){
        h2{
            margin-left:10px;
        }
    }
`;