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
                <Router>
                    <Layout>
                        <Header>
                            <HeaderContent/>
                        </Header>
                        <Content>
                            <Switch>
                                <Route exact path="/" component={Products}/>
                                <Route exact path="/products/new/" component={NewProduct}/>
                            </Switch>
                        </Content>
                        <Footer> </Footer>
                    </Layout>
                </Router>
            </div>
        )
    }
}

export default ContainerLayout;
