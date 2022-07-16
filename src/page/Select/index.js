import React from 'react'
import Select from './selectAssembly'

const Index = () => {
    const selectValue = (value) => {
        alert(value)
    }
  return (
    //当然伴随着点击搜索框应当会有一层遮罩来防止误操作(不过这个不归Select内部组件的管理)
    <div>
        {/* Select可以接收的参数
                options:代表你的下拉框中所需要的值 array //必传
                num:代表当下拉框最多展示的长度(超过部分滚动,默认是6) number //非必传
                onChange:(e) => {} func //必传 e是返回的你选择的值
         */}
        <Select options={['当幸福来敲门' , '阿甘正传' , '肖申克的救赎', '图灵' , '灵魂之旅', '你的名字' , '天气之子', '秒速五厘米']} num={7} onChange={selectValue}/>
        <div style={{height:'1000px',width:'100%',backgroundColor:'yellow'}}></div>
        <Select options={['当幸福来敲门' , '阿甘正传' , '肖申克的救赎', '图灵' , '灵魂之旅', '你的名字' , '天气之子', '秒速五厘米']} num={4} onChange={selectValue}/>
        <div style={{height:'100px',width:'100%'}}></div>
    </div>
  )
}

export default Index