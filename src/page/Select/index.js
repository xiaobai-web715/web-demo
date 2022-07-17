import React from 'react'
import Select from './selectAssembly'
import './index.scss'

const Index = () => {
    const selectValue = (value) => {
        alert(value)
    }
  return (
    <div>
        {/* Select可以接收的参数
                options:代表你的下拉框中所需要的值 array //必传
                num:代表当下拉框最多展示的长度(超过部分滚动,默认是6) number //非必传
                onChange:(e) => {} func //必传 e是返回的你选择的值
                palceholder:代表你想在筛选框框中看到的初始底层文字 string//非必传 默认'请选择你想选择的内容'
         */}
        <Select placeholder='请选择你最喜欢的电影' options={['当幸福来敲门' , '阿甘正传' , '肖申克的救赎', '图灵' , '灵魂之旅', '你的名字' , '天气之子', '秒速五厘米']} num={7} onChange={selectValue}/>
        <div className='bg-1'></div>
        <div className='select-2'>
          <Select placeholder='请选择你最讨厌的电影' options={['当幸福来敲门' , '阿甘正传' , '肖申克的救赎', '图灵' , '灵魂之旅', '你的名字' , '天气之子', '秒速五厘米']} num={4} onChange={selectValue}/>
        </div>
        <div className='bg-2'></div>
    </div>
  )
}

export default Index