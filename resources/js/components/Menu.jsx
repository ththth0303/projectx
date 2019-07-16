import React, { Component } from 'react';
import { Menu, Icon, Table } from 'antd';

const { SubMenu } = Menu;

class Navbar extends React.Component {
    state = {
        current: 'mail',
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
                    <Menu.Item key="mail">
                        <Icon type="mail" />
                        Navigation One
        </Menu.Item>
                    <Menu.Item key="app" disabled>
                        <Icon type="appstore" />
                        Navigation Two
        </Menu.Item>
                    <SubMenu
                        title={
                            <span className="submenu-title-wrapper">
                                <Icon type="setting" />
                                Navigation Three - Submenu
            </span>
                        }
                    >
                        <Menu.ItemGroup title="Item 1">
                            <Menu.Item key="setting:1">Option 1</Menu.Item>
                            <Menu.Item key="setting:2">Option 2</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="Item 2">
                            <Menu.Item key="setting:3">Option 3</Menu.Item>
                            <Menu.Item key="setting:4">Option 4</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <Menu.Item key="alipay">
                        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                            Navigation Four - Link
          </a>
                    </Menu.Item>
                </Menu>

        );
    }
}

export default Navbar;