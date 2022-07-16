import React from "react";
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
//react-router-dom的V6版本相较于V5版本有了以下改变(
    // 1.Route要先包裹在Routes当中
    // 2.component要改成element并将属性值写成组件的形式
    // 3.props中不会在传递与操作URL的相关属性,引入了一个新的API(useNavigate)
// )
// 使用hashRouter与BrowserRouter(
    // 1.使用BrowserRouter也可以正常跳转页面(不过在刷新页面的情况下回报错，F12下的Sources可以看到刷新页面的时候app.js没有成功加载[app.js是编译后产生的应当放入html的文件(并不是你的src文件夹下的文件)]) => 目前的解决办法是在webpack配置当中devServe当中加入一个historyApiFallback : true<https://blog.csdn.net/wuyujin1997/article/details/111937956?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522165794414816781432928774%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=165794414816781432928774&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v31_ecpm-1-111937956-null-null.142^v32^control,185^v2^control&utm_term=browserrouter%E4%BD%BF%E7%94%A8%E5%90%8E%E5%88%B7%E6%96%B0%E9%A1%B5%E9%9D%A2%E4%BC%9A%E5%87%BA%E9%94%99&spm=1018.2226.3001.4187> !!!不过有解释说采用nginx或node因为目前还没有涉猎所以先放个链接<https://blog.csdn.net/hsany330/article/details/90670186?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522165794414816781432928774%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=165794414816781432928774&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v31_ecpm-2-90670186-null-null.142^v32^control,185^v2^control&utm_term=browserrouter%E4%BD%BF%E7%94%A8%E5%90%8E%E5%88%B7%E6%96%B0%E9%A1%B5%E9%9D%A2%E4%BC%9A%E5%87%BA%E9%94%99&spm=1018.2226.3001.4187>
// )
import App from "../page/app";
import Select from '../page/Select/index'
import Excel from '../page/Excel/index'

const Index = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<App/>}>
                </Route>
                <Route path='/select' element={<Select/>}></Route>
                <Route path='/excel' element={<Excel/>}></Route>
            </Routes>
        </Router>
    )
}
export default Index