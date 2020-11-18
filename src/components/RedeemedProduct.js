import React from 'react';
import styled from 'styled-components/macro';

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
    align-items: center;
    flex-direction: column;
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


export default function RedeemedProduct({ name, image, category, cost }) {

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
                <p> You paid {`$ ${cost}`} </p>
                <Paragraph> {category} </Paragraph>
                
            </ContainerBuyCategory>
        </Container>
    )
}
