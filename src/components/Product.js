import React from 'react';
import styled from 'styled-components/macro';
import BuyBlueIcon from '../assets/icons/buy-blue.svg';
import Coin from '../assets/icons/coin.svg';
import { useSelector } from 'react-redux';

import Swal from 'sweetalert2';

const Title = styled.h3`
    font-size: 18px;
    text-align: center;
`;

const Container = styled.div`
    width: 320px;
    margin: 40px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 3px;
`;

const PriceTitleContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const ContainerBuyCategory = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Paragraph = styled.p`
    color: rgba(0, 0, 0, 0.3);
    font-weight: 700;
`;

const Image = styled.img`
    cursor: pointer;
    transition: all .3s ease-in;

    &:active {
        transform: scale(1.2);
    }
`;

const ContainerFaltanCoins = styled.div`
    display: flex;
    padding: 8px 20px;
    background-color: rgba(128, 128, 128, 0.6);
    color: white;
    border-radius: 20px;
`;

const Parag = styled.p`
    padding: 0;
    margin: 0;
`;


export default function Product({ name, image, category, id, cost }) {

    const coins = useSelector(state => state.coins);

    const handleBuy = async () => {

        const url = `https://coding-challenge-api.aerolab.co/redeem`;

        const headers = {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFkOWMwOGI5NTIzZTAwMjA3ZTFmYzQiLCJpYXQiOjE2MDUyMTMxOTJ9.H9DQIDnHffDuJI8Kyk4NbBjbeHlGWKVujNF1Yk9I41M"
            }),
            body: JSON.stringify({
                productId: id
            })
            
        }

        try {
            const fetchResponse = await fetch(url, headers);
            const data = await fetchResponse.json();
            Swal.fire(
                'Thanks for your Purchase!',
                `Enjoy your ${name} !`,
                'success'
            )
            return (
                data,
                console.log(data.message)
            );
        } catch (e) {
            return e.message;
        }      
    }

    return (
        <Container>
            <PriceTitleContainer>
                <Title> {name} </Title>
                <p> {`$ ${cost}`} </p>
            </PriceTitleContainer>
            <ImageContainer>
                <img src={image} alt={name}/>
            </ImageContainer>
            <ContainerBuyCategory>
                <Paragraph> {category} </Paragraph>
                {
                    cost > coins ? 
                    (
                        <ContainerFaltanCoins>
                            <Parag> Te faltan $ {cost - coins}  </Parag>
                            <img src={Coin} alt="coin" />
                        </ContainerFaltanCoins>
                    ):
                    (
                        <Image 
                            onClick={() => handleBuy()}
                            src={BuyBlueIcon} 
                            alt="Buy-icon" 
                        />
                    )
                }
                
            </ContainerBuyCategory>
        </Container>
    )
}
