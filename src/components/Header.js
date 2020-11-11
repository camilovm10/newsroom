import React, { useEffect, useState } from 'react';
import { headers } from '../peticiones/headers';

import HeaderLogo from '../assets/header-x1.png';
import AeroLabLogo from '../assets/aerolab-logo.svg';
import CoinLogo from '../assets/icons/coin.svg';

import styled from 'styled-components/macro';

const Container = styled.div`

`;

const Hero = styled.img`
    width: 100%;
`;

const Coin = styled.img`
    margin-left: 20px;
    margin-top: 4px;
`;

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 25px;
`;

const MenuProfile = styled.div`
    display: flex;
    margin: 0 10px;
`;

const MenuProfileCoin = styled.div`
    display: flex;
    margin: 0 50px;
    align-items: center;
`;

const UserName = styled.p`
    font-size: 20px;
    font-weight: 500px;
`;

const UserPoints = styled.p`
    font-size: 18px;
    font-weight: 500px;
    color: rgba(0, 0, 0, 0.5);
`;

export default function Header() {



    const [ user, setUser ] = useState({});

    useEffect(() => {

        const consultarAPI = async () => {
          const url = `https://coding-challenge-api.aerolab.co/user/me`;
    
          const respuesta = await fetch(url, {method: "GET", headers});
          const user = await respuesta.json();
    
          setUser(user)
    
        }
        consultarAPI();
        console.log("nada", user);
    }, [user])



    return (
        <div className="header">
            <Menu>
                <img src={AeroLabLogo} alt="aero-logo" />

                <MenuProfile>
                    <UserName> {user.name} </UserName>
                    <MenuProfileCoin>
                        <UserPoints> {user.points} </UserPoints>
                        <Coin src={CoinLogo} alt="coins" />
                    </MenuProfileCoin>
                </MenuProfile>
            </Menu>
            <div>
                <Hero src={HeaderLogo} alt="Hero" />
            </div>

        </div>
    )
}
