import React, { useState } from 'react'
import { WrapperHeader } from './style';
import { PlusOutlined } from '@ant-design/icons';
import TableComponent from '../TableComponent/TableComponent';
import { Form, Modal, Button } from 'antd';
import InputComponent from '../InputComponent/InputComponent';

const AdminProduct = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOk = () => {

    }
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const onFinish = () => {
        console.log('finish')
    }
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
            <Modal title="Tạo sản phẩm " open={isModalOpen} onCancel={handleCancel} >
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                    style={{ marginRight: '20px' }}
                >
                    <Form.Item
                        label="Name"
                        name="Name"
                        rules={[{ required: true, message: 'Please input your Name!' }]}

                    >
                        <InputComponent />
                    </Form.Item>

                    <Form.Item
                        label="Type"
                        name="type"
                        rules={[{ required: true, message: 'Please input your type!' }]}
                    >
                        <InputComponent />
                    </Form.Item>
                    <Form.Item
                        label="Count InStock"
                        name="countInStock"
                        rules={[{ required: true, message: 'Please input your count InStock!' }]}
                    >
                        <InputComponent />
                    </Form.Item>
                    <Form.Item
                        label="Price"
                        name="price"
                        rules={[{ required: true, message: 'Please input your price!' }]}
                    >
                        <InputComponent />
                    </Form.Item>
                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[{ required: true, message: 'Please input your description!' }]}
                    >
                        <InputComponent />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default AdminProduct;
