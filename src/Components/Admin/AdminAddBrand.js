import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { createBrand } from '../../globalStatment/actions/brand/brandAction';
import avatar from '../../images/avatar.png';
const AdminAddBrand = () => {
    const dispatch = useDispatch();
    const [name,setName] = useState('');
    const [img,setImg] = useState(avatar);
    const [selectedFile,setSelectedFile] = useState(null);
    const [loading,setLoading] = useState(true);
    
    const handleName = (e)=>{
        setName(e.target.value);
    }
    const handleImage = (e)=>{
        if(e.target.files && e.target.files[0]){
            setImg(URL.createObjectURL(e.target.files[0]));
            setSelectedFile(e.target.files[0]);
        }
    }
    const response =useSelector(state=> state.allBrands.brands);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(name === "" && !selectedFile){
            toast.warn("please enter your data");
            return;
        }
        const formData = new FormData();
        formData.append('name',name);
        formData.append('image',selectedFile);
        setLoading(true);
        await dispatch(createBrand(formData));
        setLoading(false);
    }
    useEffect(()=>{
        if(loading === false){
            if(response.status === 201){
                toast.success("data added successfully");
            }else{
                toast.error("there is an error");
                return;
            }
            setName("");
            setImg(avatar);
            setSelectedFile(null);
            setLoading(true);
        }
    },[loading]);
    console.log(response)
    return (
        <div>
            <ToastContainer/>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">اضف ماركه جديده</div>
                <Col sm="8">
                    <div className="text-form pb-2">صوره الماركه</div>
                    <div>
                        <label for="upload-image">
                    <img src={img} alt="" height="100px" width="120px" style={{cursor:'pointer'}} />
                        </label>
                        <input type="file" name="photo" id="upload-image"  onChange={handleImage}/>
                    </div>
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم الماركه"
                        value={name}
                        onChange = {handleName}
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
                </Col>
            </Row>
        </div>
    )
}

export default AdminAddBrand
