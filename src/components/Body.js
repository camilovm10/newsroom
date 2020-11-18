import React, { useEffect, useState } from 'react';
import Product from './Product';
import { headers } from '../peticiones/headers';
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';

import { Pagination } from "@material-ui/lab";

import usePagination from '../hooks/usePagination';



const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    flex-wrap: wrap;
`;

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px 0;
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
            <Container>
                
                {_DATA.currentData().map(producto => (
                    <Product 
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
