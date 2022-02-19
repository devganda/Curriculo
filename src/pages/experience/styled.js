import styled from "styled-components";

export const PageArea = styled.div`
    /*background-image: linear-gradient(135deg, #ff0844 10%, #ffb199 100%);*/

    .experience{
        
        .experienceText{
            display:flex;
            gap:20px;
            margin:10px;
            flex-wrap:wrap;
            .leftSide{
                width:48%;
                background-color:#fff;
                margin-bottom:10px;
                border-radius:5px;
                color:#605d5d; 
                padding:10px;
                cursor:pointer;
                transition:all ease 0.2s;

                &:hover{
                    box-shadow: 0px 0px 5px 0px #CCC;
                    -webkit-transform: scale(1.05);
                    transform: scale(1.05);
                }

                .divImage{
                    display:flex;
                    justify-content:center;
                    align-items:center;

                    img{
                        width: 150px;
                        height: 150px;
                        border-radius: 5px;
                    }
                }

                .divTitle{
                    display:flex;
                    justify-content:center;
                    align-items:center;

                    h4{
                        color:#605d5d; 
                    }
                }

                .text{
                   
                    p{
                        color:#605d5d; 
                        text-align:justify;
                        padding:10px;
                   }
                }
            }

            .rightSide{
                width:48%;
                background-color:#fff;
                margin-bottom:10px;
                border-radius:5px;
                color:#605d5d; 
                padding:10px;
                cursor:pointer;
                transition:all ease 0.2s;

                &:hover{
                    box-shadow: 0px 0px 5px 0px #CCC;
                    -webkit-transform: scale(1.05);
                    transform: scale(1.05);
                }

                .divImage{
                    display:flex;
                    justify-content:center;
                    align-items:center;

                    img{
                        width: 400px;
                        height: 150px;
                        border-radius: 5px;
                    }
                }
                .divTitle{
                    display:flex;
                    justify-content:center;
                    align-items:center;

                    h4{
                        color:#605d5d; 
                    }
                }

                .text{
                   
                    p{
                        color:#605d5d; 
                        text-align:justify;
                        padding:10px;
                   }
                }
            }
        }  
    }

    @media (max-width: 480px){
        .experience{
            div{
                h2{
                    margin-left:10px;
                }
            }

            .leftSide{
                width:100%!important;
                margin:10px;
            
            }      

            .rightSide{
                width:100%!important;
                
            }
        }
    }
`;