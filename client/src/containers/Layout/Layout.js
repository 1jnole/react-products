import React, {Component} from "react";
import {Layout} from "antd";
import HeaderContent from "../../components/HeaderContent";

const {Header, Content, Footer} = Layout;

class ContainerLayout extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header>
                        <HeaderContent/>
                    </Header>
                    <Content> </Content>
                    <Footer> </Footer>
                </Layout>
            </div>)
    }
}

export default ContainerLayout;
