import React, { useState,useEffect } from 'react'
import { Row, Col, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategories } from '../../globalStatment/actions/category/getAllCategoryAction';
import { toast,ToastContainer } from 'react-toastify';
import { createSubCategory } from '../../globalStatment/actions/subCategory/subCategoryAction';

const AdminAddSubCategory = () => {
    const dispatch = useDispatch();
    const [categoryId,setCategoryId] = useState('');
    const [name,setName] = useState('');
    const [isLoading,setIsLoading] = useState(true);
    useEffect(()=>{
        dispatch(getAllCategories());
    },[])
    const categories = useSelector(state=> state.allCategories.categories);
    
    const loading = useSelector(state=> state.allCategories.loading);
    const handleSubCategory = (e)=>{
        setName(e.target.value);
    }
    const handleSelect = (e)=>{
        setCategoryId(e.target.value);
    }
    const response = useSelector(state=> state.allSubCategories.subCategories);
    
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(name === ""){
            toast.warn("please enter your sub category");
            return;
        }
        if(categoryId === '0'){
            toast.warn("please select your category");
            return;
        }
        const data = {
            name,
            category:categoryId
        }
        setIsLoading(true);
        await dispatch(createSubCategory(data))
        setIsLoading(false);
    }
    useEffect(()=>{
        if(isLoading === false){
            if(response.status === 201){
                toast.success("Data added successfully");
            }else{
                toast.error("there is an error please try again");
                return;
            }
            setCategoryId('0');
            setName('');
            setIsLoading(true);
        }
    },[isLoading])
    
    return (
        <div>
            <ToastContainer/>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">اضافه تصنيف فرعي جديد</div>
                <Col sm="8">
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم التصنيف الفرعي"
                        value={name}
                        onChange={handleSubCategory}
                    />
                    <select name="languages" id="lang" className="select mt-3 px-2 " onChange={handleSelect}>
                        
                        <option value="0">اختر تصنيف</option>
                        {
                            loading ? (<Spinner animation="border" border="primary"/>):(
                                categories.data.map(category=>(
                                    <option value={category._id} key={category._id}>{category.name}</option>
                                ))
                            )
                        }
                        
                        
                    </select>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button className="btn-save d-inline mt-2 " onClick={handleSubmit}>حفظ التعديلات</button>
                </Col>
            </Row>
        </div>
    )
}

export default AdminAddSubCategory
