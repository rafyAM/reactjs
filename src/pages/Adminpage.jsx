// pages/AdminPage.js
import React from 'react';
import Sider from '../components/Sider';
import Content from '../components/Content';
import Footer from '../components/Footer';

function AdminPage() {
return (
    <div className="flex flex-col min-h-screen">
        <div className="flex flex-row flex-grow">
            <Sider />
            <Content />
        </div>
    <Footer />
    </div>
);
}

export default AdminPage;
