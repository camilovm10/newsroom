import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { headers } from '../peticiones/headers';
import RedeemedProduct from './RedeemedProduct';


const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    flex-wrap: wrap;
`;

export default function Redeem() {


    const [ productos, setProductos ] = useState([]);

    // console.log(productos);


    useEffect(() => {

        const consultarAPI = async () => {
          const url = `https://coding-challenge-api.aerolab.co/user/me`;
    
          const respuesta = await fetch(url, {method: "GET", headers});
          const productos = await respuesta.json();
    
          setProductos(productos.redeemHistory)
    
        }
        consultarAPI();
    }, [productos])



    return (
        <Container>
            
            {productos.map(producto => (
                <RedeemedProduct 
                    name={producto.name}
                    image={producto.img.url}
                    key={producto._id}
                    id={producto._id}
                    category={producto.category}
                    cost={producto.cost}
                />
            ))}
            
            
        </Container>
    )
}
