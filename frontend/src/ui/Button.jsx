import {useState} from 'react';

export default function Button(){

    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(true)
    }
    
    return(
        <>
        <div className="border-r-8" onClick={handleClick}>
            Button
        </div>
        </>
    )
}