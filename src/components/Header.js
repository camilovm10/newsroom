import React, { useEffect, useState } from 'react';
import { headers } from '../peticiones/headers';
import { useDispatch, useSelector } from 'react-redux';
import { actualizarCoinsAction } from '../action/action';

import { Link } from 'react-router-dom';

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
    align-items: center;
    position: fixed;
    height: 80px;
    width: 100%;
    padding: 0;
    margin: 0;
    background-color: white;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
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

const ContainerName =styled.div`
    display: flex;
    align-items: center;
    position: relative;

    > a {
        margin-left: 10px;
        cursor: pointer;
        color: rgba(0, 0, 0, 0.2);
        transition: all .3s ease-in;
    }

    > a:hover {
        color: rgba(0, 0, 0, 0.5);
    }
`;

const OnHoverMenu = styled.div`
    width: 250px;
    height: 120px;
    background-color: white;
    position: absolute;
    top: 70px;
    left: -50px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    transition: all .3s ease-in;

    > ul > a {
        text-decoration: none;
    }

    > ul > a > li {
        list-style: square;
        color: rgba(0, 0, 0, 0.6);
    }

    > ul > a > li:hover {
        color: rgba(0, 0, 0, 1);
        cursor: pointer;
    }

`;

const ImageContainer = styled.div`
    margin-left: 20px;
`;

export default function Header() {

    const dispatch = useDispatch();

    const coins = useSelector(state => state.coins);

    const [ user, setUser ] = useState({});

    const [ hoverMenu, setHoverMenu ] = useState(false);

    
    const handleHoverMenu = () => {
        setTimeout(() => {
            setHoverMenu(!hoverMenu);
        }, 300);
    }

    console.log(user);

    useEffect(() => {

        const consultarAPI = async () => {
          const url = `https://coding-challenge-api.aerolab.co/user/me`;
    
          const respuesta = await fetch(url, {method: "GET", headers});
          const user = await respuesta.json();
    
          setUser(user)
          
    
        }
        consultarAPI();

        
    }, [user]);

    dispatch(actualizarCoinsAction(user.points));

    

    return (
        <>
            <Menu>
                <ImageContainer>
                    <Link to="/">
                        <img src={AeroLabLogo} alt="aero-logo" />
                    </Link>
                </ImageContainer>

                <MenuProfile>
                    <ContainerName>
                        <UserName> {user.name} </UserName>
                        <a 
                            href="https://www.youtube.com/user/camilovm2008" 
                            target="_blank"
                            onMouseEnter={handleHoverMenu}
                        ><i className="fas fa-angle-down"></i></a>
                        {
                            hoverMenu &&
                            (
                                <OnHoverMenu
                                onMouseLeave={handleHoverMenu}
                                >
                                    <ul>
                                        <Link to="/">
                                            <li> Home </li>
                                        </Link>
                                        <Link to="/redeem">
                                            <li> Redeem historial </li>
                                        </Link>
                                        <Link to="/addpoints">
                                            <li> Add more points </li>
                                        </Link>
                                    </ul>
                                </OnHoverMenu>
                            )
                        }
                        
                    </ContainerName>
                    <MenuProfileCoin>
                        <UserPoints> {user.points} </UserPoints>
                        <Coin src={CoinLogo} alt="coins" />
                    </MenuProfileCoin>
                </MenuProfile>
            </Menu>
            <div>
                <Hero src={HeaderLogo} alt="Hero" />
            </div>
        </>

    )
}
