import React,{useEffect} from 'react'
import BrandContainer from '../../Components/Brand/BrandContainer'
import Pagination from '../../Components/Uitily/Pagination'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrands, getAllBrandsWithPage } from './../../globalStatment/actions/brand/brandAction';
const AllBrand = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllBrands(6))
    },[])
    const brands = useSelector(state=> state.allBrands.brands);
    const loading = useSelector(state=> state.allBrands.loading);
    let pageCount = 0;
    if(brands.paginationResults){
        pageCount = brands.paginationResult.numberOfPages;
    }
    const onPress = (page)=>{
        dispatch(getAllBrandsWithPage(page));
    }
    return (
        <div style={{minHeight:'670px'}}>
            <BrandContainer brands={brands.data} loading={loading}/>
            <Pagination pageCount={pageCount} onAddPress={onPress}/>
        </div>
    )
}

export default AllBrand
