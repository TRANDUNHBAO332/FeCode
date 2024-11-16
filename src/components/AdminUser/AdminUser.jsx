import React from 'react';
import { WrapperHeader } from './style';
import { PlusOutlined } from '@ant-design/icons';
import TableComponent from '../TableComponent/TableComponent';

const AdminUser = () => {
    return (
        <div>
            <WrapperHeader>Quản lý người dùng</WrapperHeader>
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
                >
                    <PlusOutlined style={{ fontSize: '60px' }} />
                </button>
            </div>
            <div style={{ paddingTop: '15px', border: '1px solid #ddd', borderRadius: '6px' }}>
                <TableComponent />
            </div>
        </div>
    );
};

export default AdminUser;

