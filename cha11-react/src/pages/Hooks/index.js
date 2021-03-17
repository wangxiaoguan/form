import React,{useRef,useCallback,useMemo} from 'react'
import Add from './add'

const hooks = () => {
    const addRef = useRef(null)
    console.log(addRef)
    const submit = useCallback((e)=>{
        console.log(e)
    })
    const count = useMemo(()=>{
        return 'useMemo'
    })
    return <div>
        <h1 onClick={()=>addRef.current.btn()}>点击</h1>
        <Add ref={addRef} submit={submit} count={count}/>
    </div>
}
export default hooks;

