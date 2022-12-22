import React , {FC, useRef, useState} from 'react'

const EventsExample: FC = () =>{
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setValue(e.target.value);
    }
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) =>{
        console.log(inputRef.current?.value)
    }
    const dragHandler = (e: React.DragEvent<HTMLDivElement>) =>{
        console.log('drag')
    }

    const dragWishPreventHandler = (e: React.DragEvent<HTMLDivElement>) =>{
        e.preventDefault()
        setIsDrag(true)
    }
    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) =>{
        e.preventDefault()
        setIsDrag(false)
    }
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) =>{
        e.preventDefault()
        setIsDrag(false)
        console.log('drop')
    }
    return(
        <div>
            <input value={value} onChange={changeHandler} type='text' placeholder='Manipulation'/>
            <input ref={inputRef} type='text' placeholder='NoManipulation'/>
            <button onClick={clickHandler}>Click</button>
            <div onDrag={dragHandler} draggable style={{width: 200, height: 200, background: 'red'}}></div>
            <div onDrop={dropHandler} onDragLeave={leaveHandler} onDragOver={dragWishPreventHandler} 
            style={{width: 200, height: 200, background: isDrag? 'blue' : 'green', marginTop: 15}}></div>
        </div>
    )
}
export default EventsExample;


