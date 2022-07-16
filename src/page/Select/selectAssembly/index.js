import React , {useState, useEffect , useRef} from 'react'
import './index.scss'
const placeholder = '请选择你想选择的内容'
const Select = (props) => {
    const {options , onChange} = props
    const [show , setShow] = useState(false)
    const [value , setValue] = useState(placeholder)
    const [reverse , setReverse] = useState(false)
    const titleDOM = useRef()//用来获取当前UI组件的定位
    const selectDOM = useRef()
    const selectContent = useRef()
    const selectShow = () => {
        setShow(true)
    }
    const selectDisappear = () => {
        setShow(false)
    }
    const selectValue = (e) => {
        setShow(false)
        setValue(e.target.innerHTML)//将内容写入title里面
        onChange(e.target.innerHTML)
    }
    const maskDisapper = () => {
        setShow(false)
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
    //获取title(DOM)相对于视口的定位信息,select(DOM)根据title获取的值进行定位
    //为啥要传入一个e(因为监听滚动的时候默认传入的第一个值就是e, 这里兼容一下)
    const offsetDOM = (e , title = titleDOM , select = selectDOM , content = selectContent) => {
        let dom = title.current
        let left = offsetLeft(dom)
        let top = offsetTop(dom)
        let height = title.current.clientHeight;
        //dom.clientHeight(是包含padding，border，实际内容的整体的高度)
        //dom.scrollHeight(是获取的DOM的完整的值,clientHeight可以说是它的一部分)
        //bottom是相对于视口来说的
        let bottom = document.documentElement.clientHeight - top - height
        let selectNum = props.num || 6
        let selectHeight = selectNum * height
        console.log(selectHeight , height)
        if(Math.floor(bottom / height) > selectNum){
            setReverse(false)
            select.current.style = `top : ${top}px ; left : ${left}px ;`
        }else{
            setReverse(true)
            select.current.style = `bottom : ${bottom}px ; left : ${left}px ;`
            content.current.scrollTop = content.current.scrollHeight - selectHeight
            // console.log('content的值', content.current.scrollHeight , selectHeight)
        }
        content.current.style = `max-height:${selectHeight}px`
    }
    useEffect(() => {
        offsetDOM()
        window.addEventListener('scroll' , offsetDOM)
        window.addEventListener('resize' , offsetDOM)
        return () => {
            window.removeEventListener('scroll' , offsetDOM)
            window.removeEventListener('resize' , offsetDOM)
        }
    } , [])
    return (
        <>
            <div className={`mask ${show ? 'show' : ''}`} onClick={maskDisapper}></div>
            <div>
                <div className='title' onClick={selectShow} ref={titleDOM}>{value}</div>
                <div className={`select ${show ? 'show' : ''}`} ref={selectDOM}>
                    {!reverse ? <div className='value' onClick={selectDisappear}>{value}</div> : ''}
                    <div className='content' ref={selectContent}>
                        {
                            (reverse ? [...options].reverse() : options).map((item) => {
                                if(item !== value){
                                    return(
                                        <div onClick={selectValue} key={item}>{item}</div>
                                    )
                                }
                            })
                        }
                    </div>
                    {reverse ? <div className='value' onClick={selectDisappear}>{value}</div> : ''}
                </div>
            </div>
        </>
    )
}

export default Select