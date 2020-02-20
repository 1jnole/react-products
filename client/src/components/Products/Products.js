import React from "react";
import {Table, Row, Col, Card, Icon} from 'antd';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a> {text} </a>,
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Action',
        key: 'action',
        render: () => (
            <span>
                <a><Icon type="delete" style={{color: "red"}} /></a>
            </span>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        price: 32
    },
    {
        key: '2',
        name: 'Jim Green',
        price: 42,
    },
    {
        key: '3',
        name: 'Joe Black',
        price: 32,
    },
];

const Products = () => {
    return (
        <Row type="flex" justify="space-around" align="middle" style={{padding: "2em"}}>
            <Col xs={20} sm={24} md={24} lg={16} xl={16}>
                <Card>
                    <Table columns={columns} dataSource={data}/>
                </Card>
            </Col>
        </Row>
    )
};

export default Products;
