import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { headers } from '../peticiones/headers';
import RedeemedProduct from './RedeemedProduct';

import { Pagination } from "@material-ui/lab";

import usePagination from '../hooks/usePagination';


const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    flex-wrap: wrap;
`;

const Title = styled.h2`
    text-align: center;
`;

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px 0;
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

    // PAGINATION


    let [page, setPage] = useState(1);
    const PER_PAGE = 16;

    const count = Math.ceil(productos.length / PER_PAGE);
    const _DATA = usePagination(productos, PER_PAGE);

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };



    return (
        <>
        <Title> Redeem History: </Title>
        <Container>
            
            {_DATA.currentData().map(producto => (
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

        <PaginationContainer>
            <Pagination
                count={count}
                size="large"
                page={page}
                variant="outlined"
                shape="rounded"
                onChange={handleChange}
            />
        </PaginationContainer>
        </>
    )
}
