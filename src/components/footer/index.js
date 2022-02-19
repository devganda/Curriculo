import React from "react";
import {PageArea} from './styled';
import { PageContainer } from "../mainComponents";

const Footer = ()=>{
    let date = new Date();
    return(
        <>
            <PageArea>
                <PageContainer>
                    <div className="footer">
                        Copyright Danilo Ganda {date.getFullYear()}
                    </div>
                </PageContainer>
            </PageArea>
        </>
    );
}

export default Footer;