import React, { useEffect, useState } from 'react'
import { WrapperHeader, WrapperUploadFile } from './style';
import { PlusOutlined } from '@ant-design/icons';
import TableComponent from '../TableComponent/TableComponent';
import { Form, Modal, Button } from 'antd';
import InputComponent from '../InputComponent/InputComponent';
import { getBase64 } from '../../untils';
import { useMutationHooks } from "../../hooks/useMutationHook";
import * as ProductService from "../../services/ProductService";
import * as message from "../../components/Mesage/Message";

const AdminProduct = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [stateProduct, setStateProduct] = useState({
        name: '',
        price: '',
        description: '',
        rating: '',
        image: '',
        type: '',
        countInStock: ''
    })
    const mutation = useMutationHooks(async (data) => {
        const res = await ProductService.createProduct(data); // Gọi API và chờ kết quả
        return res; // Trả về kết quả từ server
    });

    const { data, isLoading, isSuccess, isError } = mutation;

    useEffect(() => {
        if (isSuccess && data?.status === 'OK') {
            message.success()
            handleCancel()
        } else if (isError) {
            message.error()
        }
    }, [isSuccess])
    const [form] = Form.useForm();
    const handleCancel = () => {
        setIsModalOpen(false); // Đóng modal
        setStateProduct({
            name: '',
            price: '',
            description: '',
            rating: '',
            image: '',
            type: '',
            countInStock: ''
        })
        form.resetFields()
    };

    const onFinish = () => {
        mutation.mutate(stateProduct)
        console.log('finish', stateProduct)
    }
    const handleOnchange = (e) => {
        setStateProduct({
            ...stateProduct,
            [e.target.name]: e.target.value
        })

    }
    const handleOnchangeAvatar = async ({ fileList }) => {
        if (!fileList || fileList.length === 0) return; // Kiểm tra fileList
        const file = fileList[0]; // Lấy file đầu tiên
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setStateProduct({
            ...stateProduct,
            image: file.preview
        }
        )
    };
    return (
        <div>
            <WrapperHeader>Quản lý sản phẩm </WrapperHeader>
            <div style={{
                marginTop: '10px',
                padding: '20px',
                borderRadius: '8px',
                transition: 'transform 0.3s ease', // Hiệu ứng chuyển động
            }}
                onMouseEnter={(e) => (e.target.style.transform = 'translateY(-10px)')} // Di chuyển lên khi hover
                onMouseLeave={(e) => (e.target.style.transform = 'translateY(0)')} // Quay lại vị trí ban đầu khi di chuột ra ngoài
            >
                <button
                    style={{
                        height: '100px',
                        width: '100px',
                        borderRadius: '6px',
                        borderStyle: 'dashed',
                        borderWidth: '1px', // Viền mỏng hơn
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: '10px',
                    }}
                    onClick={() => setIsModalOpen(true)}
                >
                    <PlusOutlined style={{ fontSize: '60px' }} />
                </button>
            </div>
            <div style={{ paddingTop: '15px', border: '1px solid #ddd', borderRadius: '6px' }}>
                <TableComponent />
            </div>
            <Modal title="Tạo sản phẩm "
                open={isModalOpen}
                onCancel={handleCancel}

                footer={[
                    <Button key="cancel" onClick={handleCancel}>
                        Cancel
                    </Button>,
                ]}
            >
                <Form
                    name="basic"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                    onFinish={onFinish}
                    autoComplete="on"
                    form={form}
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your Name!' }]}
                        labelAlign="left" // Căn lề trái
                    >
                        <InputComponent value={stateProduct.name} onChange={handleOnchange} name="name" />
                    </Form.Item>
                    <Form.Item
                        label="Type"
                        name="type"
                        rules={[{ required: true, message: 'Please input your type!' }]}
                        labelAlign="left" // Căn lề trái
                    >
                        <InputComponent value={stateProduct.type} onChange={handleOnchange} name="type" />
                    </Form.Item>


                    <Form.Item
                        label="Count InStock"
                        name="countInStock"
                        rules={[{ required: true, message: 'Please input your count InStock!' }]}
                        labelAlign="left" // Căn lề trái
                    >
                        <InputComponent value={stateProduct.countInStock} onChange={handleOnchange} name="countInStock" />
                    </Form.Item>
                    <Form.Item
                        label="Price"
                        name="price"
                        rules={[{ required: true, message: 'Please input your price!' }]}
                        labelAlign="left" // Căn lề trái
                    >
                        <InputComponent value={stateProduct.price} onChange={handleOnchange} name="price" />
                    </Form.Item>
                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[{ required: true, message: 'Please input your description!' }]}
                        labelAlign="left" // Căn lề trái
                    >
                        <InputComponent value={stateProduct.description} onChange={handleOnchange} name="description" />
                    </Form.Item>
                    <Form.Item
                        label="Rating"
                        name="rating"
                        rules={[{ required: true, message: 'Please input your rating!' }]}
                        labelAlign="left" // Căn lề trái
                    >
                        <InputComponent value={stateProduct.rating} onChange={handleOnchange} name="rating" />
                    </Form.Item>
                    <Form.Item
                        label="Image"
                        name="image"
                        rules={[{ required: true, message: 'Please input your Image!' }]}
                        labelAlign="left" // Căn lề trái
                    >
                        <WrapperUploadFile onChange={handleOnchangeAvatar} maxCount={1}>
                            <Button >Select File</Button>
                            {stateProduct?.image && (
                                <img
                                    src={stateProduct?.image}
                                    style={{
                                        height: "60px",
                                        width: "60px",
                                        borderRadius: " 50%",
                                        objectFit: "cover",
                                        marginLeft: "10px"
                                    }}
                                    alt="avatar"
                                />
                            )}
                        </WrapperUploadFile>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 6, span: 40 }}>
                        <Button type="primary" htmlType="submit" style={{ width: '95px' }}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default AdminProduct;
