import React, { useEffect } from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/Uitily/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategoriesAction } from '../../globalStatment/actions/category/getAllCategoryAction'

const AllCategoryPage = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllCategoriesAction())
    },[])
    const categories = useSelector(state=>state.allCategories.categories);
    const loading = useSelector(state=> state.allCategories.loading);
    
    return (
        <div style={{minHeight:'670px'}}>
        
            <CategoryContainer categories={categories.data} loading={loading}/>
            <Pagination />
        </div>
    )
}

export default AllCategoryPage
