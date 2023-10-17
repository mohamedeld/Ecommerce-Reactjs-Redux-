import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTiltle from '../Uitily/SubTiltle'
import BrandCard from './BrandCard'
import {Spinner} from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrands } from '../../globalStatment/actions/brand/brandAction';

const BrandFeatured = ({ title, btntitle }) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllBrands(6))
    },[])
    const brands = useSelector(state=> state.allBrands.brands);
    const loading = useSelector(state=> state.allBrands.loading);

    return (
        <Container>
            <SubTiltle title={title} btntitle={btntitle} pathText="/allbrand" />
            <Row className='my-1 d-flex justify-content-between'>
                {
                    loading ? (<Spinner animation="border" variant="primary"/>):(
                        brands.data.map(brand=>(
                        <BrandCard key={brand._id} img={brand.image} />  
                        ))
                    )
                }
                
                

            </Row>
        </Container>
    )
}

export default BrandFeatured
