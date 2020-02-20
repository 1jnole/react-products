import React from "react";
import {Button, Row, Col, Icon} from 'antd';
import {Link} from "react-router-dom";
import './HeaderContent.scss';


const HeaderContent = () => {
    return (
        <div className='HeaderContent'>
            <Row>
                <Col xs={2} sm={4} md={6} lg={8} xl={20}>
                    <Link to={"/"}>
                        <h1 style={{color: "#ffff"}}> React + Redux+ Rest API & Axios</h1>
                    </Link>
                </Col>
                <Col xs={20} sm={16} md={12} lg={8} xl={4}>
                    <Link to={"/products/new"}>
                        <Button type="primary"><Icon type="plus-circle" style={{fontSize: "14px"}}/> Product</Button>
                    </Link>
                </Col>
            </Row>
        </div>
    )
};

export default HeaderContent;
