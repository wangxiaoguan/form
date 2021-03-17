import React,{forwardRef,useImperativeHandle} from 'react'
import {Button} from 'antd'
const hooks = (props,ref) => {
  console.log(props)
  const btnList = [
    {name:'wanghg'}
  ]
  const btn = () => {
    console.log('测试')
  }
  useImperativeHandle(ref,()=>({
    btnList,btn,
  }))
    return <div >
      <h1>
      useImperativeHandle
      </h1>
        <Button onClick={()=>props.submit('修改')}>修改</Button>
      </div>
}
export default forwardRef(hooks);

