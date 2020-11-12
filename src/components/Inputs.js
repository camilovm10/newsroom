import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `;

const MenuButton = styled.div`
    display: flex;
    margin: 0 10px;
`;

const Button = styled.button`
    padding: 10px 18px;
    background-color: rgba(0, 0, 0, 0.2);
    border: none;
    border-radius: 4px;
    margin: 0 15px;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    transition: all .3s ease-in;

    &:hover {
        background-color: rgba(0, 0, 0, 0.3);
    }
`;

export default function Inputs() {

    const handlePost = async (coin) => {

        const url = `https://coding-challenge-api.aerolab.co/user/points`;

        const headers = {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFkOWMwOGI5NTIzZTAwMjA3ZTFmYzQiLCJpYXQiOjE2MDUyMTMxOTJ9.H9DQIDnHffDuJI8Kyk4NbBjbeHlGWKVujNF1Yk9I41M"
            }),
            body: JSON.stringify({
                "amount": coin
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


        // fetch(url, headers)
        // .then(function(response) {
        // if(response.ok) {
        //     return response.text()
        // } else {
        //     throw "Error en la llamada Ajax";
        // }
        
        // })
        // .then(function(texto) {
        // console.log(texto);
        // })
        // .catch(function(err) {
        // console.log(err);
        // });

    }

    return (
        <Container>
            <h2> Add More Points </h2>
            <MenuButton>
                <Button
                    onClick={() => handlePost(1000)}
                >
                    1000
                </Button>
                <Button
                    onClick={() => handlePost(5000)}
                >
                    5000
                </Button>
                <Button
                    onClick={() => handlePost(7500)}
                >
                    7500
                </Button>
            </MenuButton>
        </Container>
    )
}
