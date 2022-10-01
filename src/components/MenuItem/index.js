import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import {LinkArea, LinkIcon} from './styled';

export default ({ title, icon, link }) => {
    const history = useHistory(); //entrar na pagina
    const location = useLocation();//saber quem clicou

    let isActive = location.pathname == link;


    const handleLinkClick = (e) => {
        e.preventDefault();
        history.push(link);
    }
    return(
        <LinkArea data-tip={title} data-for="tip-right" active={isActive} href={link} onClick={handleLinkClick}>
            <LinkIcon src={icon}/>
        </LinkArea>
    );
}