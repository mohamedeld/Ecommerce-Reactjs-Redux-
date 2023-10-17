import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import BrandCard from './BrandCard';
const BrandContainer = ({brands,loading}) => {
    
    return (
        <Container>
            <div className="admin-content-text mt-2 ">كل الماركات</div>
            <Row className='my-1 d-flex justify-content-between'>
                {
                    loading ? (<Spinner animation="border" variant="primary"/>):(
                        brands.map(brand=>(
                            <BrandCard key={brand._id} img={brand.image} /> 
                        ))
                    )
                }
                

            </Row>
        </Container>
    )
}

export default BrandContainer
