import React, { useEffect } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import SubTiltle from '../Uitily/SubTiltle';
import { getAllCategories } from './../../globalStatment/actions/category/getAllCategoryAction';
import CategoryCard from './../Category/CategoryCard';

const HomeCategory = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllCategories())
    },[])
    const categories = useSelector(state=>state.allCategories.categories);
    const loading = useSelector(state=> state.allCategories.loading);
    const colors = ["#F4DBA4","#0034FF","#FF6262","#F4DBA4","#0034FF","#FF6262"];
    return (
        <Container>
            <SubTiltle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
            <Row className='my-2 d-flex justify-content-between'>
                {
                    loading ? (<Spinner animation="border" variant="primary"/>) : (
                        categories.data.slice(0,6).map(category=>(
                            <CategoryCard title={category.name} img={category.image} background={colors[Math.floor(Math.random() * colors.length)]} />
                        ))
                    )
                }
                
               
            </Row>
        </Container>
    )
}

export default HomeCategory
