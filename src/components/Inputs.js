import React from 'react';
import styled from 'styled-components/macro';
import { headers } from '../peticiones/headers';

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
`;

export default function Inputs() {

    const handlePost = async (amount) => {

        const url = `https://coding-challenge-api.aerolab.co/user/points`;

        // const consultarAPI =  () => {
        //     const url = `https://coding-challenge-api.aerolab.co/user/points`;
      
        //     fetch(url, {method: "POST", headers, body: {"amount" : amount}})
        //     .then(function(response) {
        //         if(response.ok) {
        //             return response.text()
        //         } else {
        //             throw "Error en la llamada Ajax";
        //         }
        //     }
      
        // }
        // consultarAPI();

        try {
            const fetchResponse = await fetch(url, {method: "POST", headers, mode: 'no-cors', body: {"amount" : 1000}});
            const data = await fetchResponse.json();
            return data;
        } catch (e) {
            return e.message;
        }    


        // fetch(url, {method: "POST", headers, mode: 'no-cors', body: {"amount" : 1000}})
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
