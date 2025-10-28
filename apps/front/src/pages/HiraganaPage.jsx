import { useEffect } from "react"
import { newCharsSVG } from "../../assets/svgAssets"
import CharacterTile from "../components/CharacterTile"


console.log(newCharsSVG)

const HiraganaPage = () => {


  return (
    <div className="h-full w-200 mx-auto ">
        <div className="pt-10 grid grid-cols-5 grid-rows-15 gap-4 justify-evenly" >
            {newCharsSVG.map((obj) => {
                const code = obj.charCode;
                <CharacterTile charCode={code}/>
            })}
        </div>
    </div>
    
  )
}

export default HiraganaPage
