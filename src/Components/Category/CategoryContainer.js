import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import CategoryCard from './../Category/CategoryCard';



const CategoryContainer = ({categories,loading}) => {
    const colors = ["#F4DBA4","#0034FF","#FF6262","#F4DBA4","#0034FF","#FF6262"];
    return (
        <Container >
        <div className="admin-content-text mt-2 ">كل التصنيفات</div>
            <Row className='my-2 d-flex justify-content-between'>
                {
                    loading ? (<Spinner animation="border" variant='primary' />) : (
                        categories.map(category=>(
                            <CategoryCard key={category._id} title={category.name} img={category.image} background={colors[Math.floor(Math.random() * colors.length)]} />
                        ))
                    )
                }

            </Row>
        </Container>
    )
}

export default CategoryContainer
