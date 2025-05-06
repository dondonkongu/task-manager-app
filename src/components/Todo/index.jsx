import React, { useState } from 'react'
import { Row, Tag, Checkbox } from 'antd'

const priorityMapping = {
    High: 'red',
    Medium: 'blue',
    Low: 'gray'
}

export default function Todo({ name, priority }) {
    const [checked, setCheked] = useState(false)

    const toggleCheck = () => {
        setCheked(!checked)
    }

    return (
        <Row
            justify='space-between'
            style={{
                marginBottom: 3,
                ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {})
            }}
        >
            <Checkbox checked={checked} onChange={toggleCheck}>
                {name}
            </Checkbox>
            <Tag color={priorityMapping[priority]} style={{ margin: 0 }}>
                {priority}
            </Tag>
        </Row>
    )
}
