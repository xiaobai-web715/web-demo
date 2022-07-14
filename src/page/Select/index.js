import React , {useState, useEffect , useRef} from 'react'
import './index.css'
let option = ['当幸福来敲门' , '阿甘正传' , '肖申克的救赎', '图灵']
const placeholder = '请选择你想选择的内容'
const Select = () => {
    const [show , setShow] = useState(false)
    const [value , setValue] = useState(placeholder)
    const [options , setOptions] = useState(option)
    const [valueUP , setValueUP] = useState(placeholder)
    const [showUP , setShowUP] = useState(false)
    const selectOnDOM = useRef()
    const selectOffDOM = useRef()
    const selectOnUPDOM = useRef()
    const selectOffUPDOM = useRef()
    const selectOn = () => {
        setShow(true)
    }
    const selectOff = (e) => {
        setShow(false)
        setValue(e.target.innerHTML)
    }
    //获取当前DOM的一个offset位置
    const offsetLeft = (dom) => {
        let sum = dom.offsetLeft
        if(dom.offsetParent){
            sum += offsetLeft(dom.offsetParent)
        }
        return sum
    }
    const offsetTop = (dom) => {
        let sum = dom.offsetTop
        if(dom.offsetParent){
            sum += offsetLeft(dom.offsetParent)
        }
        return sum
    }
    const offsetDOM = (target , select , fanxiang) => {
        let dom = target.current
        let left = offsetLeft(dom)
        let top = offsetTop(dom)
        let height = target.current.clientHeight;
        // let width = target.current.clientWidth;
        let bottom = document.documentElement.clientHeight - top - height
        console.log(height)
        if(!fanxiang){
            select.current.style = `top : ${top}px ; left : ${left}px ; max-height:${height*3}px`
        }else{
            select.current.style = `bottom : ${bottom}px ; left : ${left}px ; max-height:${height*3}px`
            // select.current.scrollTop = 10不成功的原因应该是该元素因为是none还没办法产生滚动条
            console.log('...' , select.current.scrollHeight , height*3)
            select.current.scrollTop = select.current.scrollHeight - height * 3
            //当滚动轴没有滚动的时候select.current.scrollHeight获取的完整的元素的高度
        }
    }
    useEffect(() => {
        offsetDOM(selectOnDOM , selectOffDOM , false)
        offsetDOM(selectOnUPDOM , selectOffUPDOM , true)
        let optionTarget = option.filter((item) => {
            return item !== value
        })
        setOptions(optionTarget)
    } , [])
    const selectOnUP = () => {
        setShowUP(true)
    }
    const selectOffUP = (e) => {
        setShowUP(false)
        setValueUP(e.target.innerHTML)
    }
    return (
        <div>
            <div>向下的Select</div>
            <div className='one' onClick={selectOn} ref={selectOnDOM}>{value}</div>
            <div className={`two ${show ? 'show' : ''}`} ref={selectOffDOM} onClick={selectOff}>
                <div>{value}</div>
                {
                    options.map((item) => {
                        if(item !== value){
                            return(
                                <div key={item}>{item}</div>
                            )
                        }
                    })
                }
            </div>
            <div>向上的Select</div>
            <div className='three' onClick={selectOnUP} ref={selectOnUPDOM}>{valueUP}</div>
            <div className={`four ${showUP ? 'showUP' : ''}`} ref={selectOffUPDOM} onClick={selectOffUP}>
                {
                    // 这里使用reverse()方法会修改元素组会导致滚动轴不能成功定位(很迷惑)
                    [...options].reverse().map((item) => {
                        if(item !== valueUP){
                            return(
                                <div key={item}>{item}</div>
                            )
                        }
                    })
                }
                <div>{valueUP}</div>
            </div>
        </div>
    )
}

export default Select