import React, { Component } from 'react';
import { Menu, Icon, Table, Row, Col, Input } from 'antd';
import { DelayInput } from 'react-delay-input';

import Navbar from './Menu';


const { SubMenu } = Menu;

class Search extends React.Component {
    state = {
        current: 'mail',
        dataSource: [],
        value: '',
        open: false,
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    handleSearch = async value => {
        const apps = await this.searchApp(value);
        this.setState({
            dataSource: apps.data,
        });
    };

    searchApp = q => {
        console.log(q);
        
        return axios({
            method: "get",
            url: `/api/v1/search/app?q=${q}`,
        });
    }

    render() {
        const { dataSource } = this.state;
        const columns = [
            {
                title: 'name',
                dataIndex: 'name',
                key: 'id',
            },
        
        ];
        
        return (
            <div>
                <Navbar></Navbar>
                <Row style={{marginBottom: '20px'}}>
                    <Col span={12}>
                        <DelayInput
                            minLength={3}
                            delayTimeout={300}
                            onChange={event => this.handleSearch(event.target.value)}
                            element={Input}
                        />
                    </Col>
                </Row>
                <Row>
                    <Table dataSource={dataSource} columns={columns} rowKey='id'/>;
                </Row>
            </div>
        );
    }
}


export default Search;