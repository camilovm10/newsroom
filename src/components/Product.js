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


export default function Product({ name, image, category, id }) {


    const handleBuy = async () => {

        const url = `https://coding-challenge-api.aerolab.co/redeem`;

        try {
            const fetchResponse = await fetch(url, {method: "POST", headers, mode: 'no-cors', body: {"amount" : id}});
            const data = await fetchResponse.json();
            return data;
        } catch (e) {
            return e.message;
        }    

    }



    return (
        <Container>
            <Title> {name} </Title>
            <ImageContainer>
                <img src={image} alt={name}/>
            </ImageContainer>
            <ContainerBuyCategory>
                <Paragraph> {category} </Paragraph>
                <img 
                    onClick={handleBuy}
                    src={BuyBlueIcon} 
                    alt="Buy-icon" 
                />
            </ContainerBuyCategory>
        </Container>
    )
}
