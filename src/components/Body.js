import React, { useEffect, useState } from 'react';
import Product from './Product';
import { headers } from '../peticiones/headers';
import styled from 'styled-components/macro';


const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    flex-wrap: wrap;
`;

export default function Body() {

    const [ productos, setProductos ] = useState([]);

    useEffect(() => {

        const consultarAPI = async () => {
          const url = `https://coding-challenge-api.aerolab.co/products`;
    
          const respuesta = await fetch(url, {method: "GET", headers});
          const productos = await respuesta.json();
    
          setProductos(productos)
    
        }
        consultarAPI();
    }, [productos])

    return (
        <Container>
            
            {productos.map(producto => (
                <Product 
                    name={producto.name}
                    image={producto.img.url}
                    key={producto.id}
                    category={producto.category}
                />
            ))}
            
            
        </Container>
    )
}
