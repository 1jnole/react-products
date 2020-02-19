import React, {Component} from "react";
import {Layout} from "antd";
import HeaderContent from "../../components/Header/HeaderContent";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Products from "../../components/Products/Products";
import NewProduct from "../../components/NewProduct/NewProduct";

const {Header, Content, Footer} = Layout;

class ContainerLayout extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Router>
                        <Header>
                            <HeaderContent/>
                        </Header>
                        <Switch>
                            <Route exact path="/" component={Products}/>
                            <Route exact path="/products/new/" component={NewProduct}/>
                        </Switch>
                    </Router>
                    <Content> </Content>
                    <Footer> </Footer>
                </Layout>
            </div>
        )
    }
}

export default ContainerLayout;
