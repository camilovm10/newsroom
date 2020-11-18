import React, { useEffect, useState } from 'react';
import Product from './Product';
import { headers } from '../peticiones/headers';
import styled from 'styled-components/macro';

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

const ContainerCategory = styled.div`

    display: flex;
    justify-content: center;
    margin: 30px 0;
`;

const SelectCategory = styled.select`
    /* -webkit-appearance: none; */
    padding: 0 18px;
    margin-left: 20px;
    border-radius: 7px;
    border: 1px solid rgba(0, 0, 0, 0.3);
`;

const TitleSelectCategory = styled.h2`
    font-size: 25px;
    padding: 0;
    margin: 0;
`;

export default function Body() {

    const [ productos, setProductos ] = useState([]);


    // CATEGORIES

    const categories =  ["All Categories" ,"Phones", "Gaming", "Laptops", "Cameras", "Audio", "Monitors & TV", "Drones", "Phone Accessories", "Smart Home", "PC Accesories", "Tablets & E-readers", "PC Accesories"];

    const [ categoria, setCategoria ] = useState('All Categories')

    
    const ChangeCategory = (e) => {
        setCategoria(e.target.value)
    }



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
            <ContainerCategory>
                <TitleSelectCategory> Sort By Category: </TitleSelectCategory>
                <SelectCategory 
                    className="filter-item"
                    name="pais"
                    value={categoria}
                    onChange={e => ChangeCategory(e)}
                >
                    {categories.map(categorie => (
                        <option>{categorie}</option>
                    ))}
                </SelectCategory>
            </ContainerCategory>

            <Container>
                
                {
                categoria === 'All Categories' ?
                (
                    _DATA.currentData().map(producto => (
                    
                        <Product 
                            name={producto.name}
                            image={producto.img.url}
                            key={producto._id}
                            id={producto._id}
                            category={producto.category}
                            cost={producto.cost}
                        />
                    ))
                ) :

                (
                    productos.filter(filt => filt.category === categoria || categoria === 'All Categories').map(producto => (
                    
                        <Product 
                            name={producto.name}
                            image={producto.img.url}
                            key={producto._id}
                            id={producto._id}
                            category={producto.category}
                            cost={producto.cost}
                        />
                    ))
                )}

                
            </Container>
            {
                categoria === 'All Categories' &&
                (
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
                )
            }
            
        </>
    )
}
