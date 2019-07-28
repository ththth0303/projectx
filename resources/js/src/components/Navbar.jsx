import React, { Component } from 'react';
import { Menu, Icon, Table } from 'antd';

const { SubMenu } = Menu;

class Navbar extends React.Component {
    state = {
        current: 'search',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        const dataSource = [
            {
                key: '1',
                name: 'Mike',
                age: 32,
                address: '10 Downing Street',
            },
            {
                key: '2',
                name: 'John',
                age: 42,
                address: '10 Downing Street',
            },
        ];

        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
            },
        ];


        return (
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    <Menu.Item key="search">
                        <Icon type="search" />
                        Tra cứu
                    </Menu.Item>
                    <Menu.Item key="mail">
                        <Icon type="mail" />
                        Ứng dụng
                    </Menu.Item>
                    <Menu.Item key="app">
                        <Icon type="appstore" />
                        Đơn vị phát triển
                    </Menu.Item>
                </Menu>

        );
    }
}

export default Navbar;