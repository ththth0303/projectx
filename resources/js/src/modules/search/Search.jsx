import React, { Component } from 'react';
import { connect } from "react-redux";
import { Menu, Icon, Table, Row, Col, Input, Button } from 'antd';
import { Pagination } from 'antd';
import { DelayInput } from 'react-delay-input';
import { CALL_SEARCH } from './type';

class Search extends React.Component {
    state = {
        page: 1,
        perPage: 10,
        q: ''
    };

    searchApp = q => {
        this.setState({ q });
        const {perPage} = this.state;
        this.props.requestSearch({q, page: 1, perPage});
    }

    onShowSizeChange = (current, pageSize) => {
        console.log(pageSize);
        
        if (pageSize === this.state.perPage) {
            return;
        }
        this.setState({
            perPage: pageSize,
            page: 1
         });

        const { page, q } = this.state;
        this.props.requestSearch({ q, page: 1, perPage: pageSize });
    }

    onChangePage = (page) => {
        this.setState({ page });
        const { perPage, q } = this.state;
        this.props.requestSearch({ q, page, perPage });

    }

    render() {
        const { dataSource, loading } = this.props;
        const columns = [
            {
                title: 'App Id',
                dataIndex: 'app_id',
                key: 'id2',
            },
            {
                title: 'Tên',
                dataIndex: 'name',
                key: 'id',
            },
            {
                title: 'Quyền',
                dataIndex: 'name',
                key: 'id1',
            },
        
        ];

        
        return (
            <div className="container">
                <h2 className="header-search">Hệ thống tra cứu</h2>
                <Row style={{marginBottom: '20px', marginTop: '50px'}}>
                    <Col span={1}></Col>
                    <Col span={10}>
                        <div>Tên dự án</div>
                        <DelayInput
                            minLength={3}
                            delayTimeout={300}
                            onChange={event => this.searchApp(event.target.value)}
                            element={Input}
                            placeholder="Nhập tên ứng dụng"
                        />
                    </Col>
                    <Col span={2}></Col>
                    <Col span={10} className="">
                        <div>Tên phòng ban</div>
                        <DelayInput
                            minLength={3}
                            delayTimeout={300}
                            onChange={event => this.searchApp(event.target.value)}
                            element={Input}
                            placeholder="Nhập tên phòng ban"
                        />
                    </Col>
                    <Col span={1}></Col>
                </Row>
                <Button className="btn-seach" icon="search" loading={loading}>Tìm kiếm</Button>
                <Row>
                    <Table
                        dataSource={dataSource.data}
                        columns={columns}
                        rowKey='id'
                        pagination= {false}
                    />;
                    {dataSource && dataSource.total && <Pagination
                        className="paginate"
                        showSizeChanger
                        onShowSizeChange={this.onShowSizeChange}
                        defaultCurrent={dataSource.current_page}
                        total={dataSource.total}
                        onChange={this.onChangePage}
                        pageSize={parseInt(dataSource.per_page)}
                    />}
                    
                </Row>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { search} = state;
    return {
        dataSource: search.get('dataSource'),
        loading: search.get('loading')
    };
};

const mapDispatchToProps = dispatch => {
    return {
        requestSearch: (q) => dispatch({ type: CALL_SEARCH, data: q }),
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Search);