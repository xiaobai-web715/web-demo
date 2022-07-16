import React from 'react'
import { useNavigate } from 'react-router-dom'

const App = (props) => {
    const navigate = useNavigate()
    console.log(props)
    const URLChange = (e) => {
        // console.log(e.target.getAttribute('data-url'))
        navigate(e.target.getAttribute('data-url'))
    }
    return (
        <>
            <div>Welcome web-dome</div>
            <div onClick={URLChange}>
                <div data-url='/select'>select组件的deom</div>
                <div data-url='/excel'>读取excel数据并写入js文件当中</div>
            </div>
        </>
    )
}

export default App