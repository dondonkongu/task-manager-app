import React from 'react'
import { Row, Col, Input, Typography, Radio, Select, Tag } from 'antd'

export default function Filter() {
    const { Search } = Input

    return (

        <Row justify='center'>
            <Col span={24}>
                <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
                    Search
                </Typography.Paragraph>
                <Search placeholder='search input text' />
            </Col>
            <Col sm={24}>
                <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
                    Filter by status
                </Typography.Paragraph>
                <Radio.Group>
                    <Radio value='All'>All</Radio>
                    <Radio value='Completed'>Completed</Radio>
                    <Radio value='Todo'>To do</Radio>
                </Radio.Group>
            </Col>
            <Col sm={24}>
                <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
                    Filter by Priority
                </Typography.Paragraph>
                <Select
                    mode='multiple'
                    allowClear={true}
                    placeholder='Please select'
                    style={{width:'100%'}}
                >
                    <Select.Option value='High' label='High'>
                        <Tag color='red'>High</Tag>
                    </Select.Option>
                    <Select.Option value='Medium' label='Medium'>
                        <Tag color='blue'>Medium</Tag>
                    </Select.Option>
                    <Select.Option value='Low' label='Low'>
                        <Tag color='gray'>Low</Tag>
                    </Select.Option>
                    
                </Select>
                
            </Col>
        </Row>

    )
}

