import {useState} from useState;



export default function Button(isClicked){

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