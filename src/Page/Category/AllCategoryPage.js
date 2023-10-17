import React, { useEffect } from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/Uitily/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategories,getAllCategoriesWithPage } from '../../globalStatment/actions/category/getAllCategoryAction'

const AllCategoryPage = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllCategories(5))
    },[])
    const categories = useSelector(state=>state.allCategories.categories);
    const loading = useSelector(state=> state.allCategories.loading);
    let pageCount = 0;
    if(categories.paginationResult)
        pageCount = categories.paginationResult.numberOfPages;
    
    const onPress = (pageNum)=>{
        dispatch(getAllCategoriesWithPage(pageNum))
    }
    return (
        <div style={{minHeight:'670px'}}>
        
            <CategoryContainer categories={categories.data} loading={loading}/>
            <Pagination pageCount={pageCount} onAddPress={onPress}/>
        </div>
    )
}

export default AllCategoryPage
