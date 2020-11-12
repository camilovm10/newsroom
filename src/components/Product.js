import React from 'react';
import styled from 'styled-components/macro';
import BuyBlueIcon from '../assets/icons/buy-blue.svg';
import { headers } from '../peticiones/headers';

const Title = styled.h3`
    font-size: 18px;
    text-align: center;
`;

const Container = styled.div`
    width: 300px;
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
`;

const Paragraph = styled.p`
    color: rgba(0, 0, 0, 0.3);
    font-weight: 700;
`;

const Image = styled.img`
    cursor: pointer;
`;


export default function Product({ name, image, category, id, cost }) {


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
                <Image 
                    onClick={() => handleBuy()}
                    src={BuyBlueIcon} 
                    alt="Buy-icon" 
                />
            </ContainerBuyCategory>
        </Container>
    )
}
