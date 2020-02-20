import  React from 'react';
import {Form, Input, Button, Row, Col, Card} from 'antd';

export const NewProduct = () => {
    return (
            <Row type="flex" justify="space-around" align="middle" style={{padding: "2em"}}>
                <Col xs={20} sm={16} md={14} lg={8} xl={6}>
                    <Card>
                        <Form layout="horizontal">
                            <Form.Item type="text" label="Product name" >
                                <Input placeholder="Product Name" />
                            </Form.Item>
                            <Form.Item type="number" label="Product price">
                                <Input placeholder="Product Price" />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary">Add</Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
    );
};

export default NewProduct;
