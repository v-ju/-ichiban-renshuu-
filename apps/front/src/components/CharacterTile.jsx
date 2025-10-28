import { useEffect, useRef } from "react";
import HanziWriter from 'hanzi-writer'

const CharacterTile = ({charCode,char}) => {
  const id = `stroke-${charCode}`

  const tileRef = useRef(null)
  const writerRef = useRef(null)

  const mouseEnter = () => {
    if(!writerRef){
    writerRef.current = HanziWriter.create(tileRef.current, char,{
      width: 80,
      height: 80,
      showOutline: true,
      showCharacter: false,
      padding: 5,
    })
  }
  writerRef.current.animateCharacter()
}

  const mouseLeave = () => {
    
  }

  return (
    <div id={id} className="size-30 border-0 rounded-2xl shadow-gray-800 shadow-2xl flex flex-col items-center justify-evenly">
        <div className="w-16 h-16">
            
            <audio></audio>
        </div>
    </div>
    
  )
}

export default CharacterTile
