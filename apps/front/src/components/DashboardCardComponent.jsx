import { useRef } from "react";

export const DashboardCardComponent = ({title='',japaneseTitle=''}) => {

    return <>
        <div className="w-full perspective-normal " >
            <div className="group relative h-56 flex items-center justify-center">           
                <div className="relative h-full w-full group-hover:cursor-pointer overflow-hidden rounded-3xl
                    transition-transform duration-300 [transform-style:preserve-3d] group-hover:[transform:rotateX(10deg)_rotateY(10deg)] ">
                    <img src="/sakura.jpeg" alt="" className="w-fit h-full z-0"/>
                    
                    <div>
                        <div className="absolute bottom-10 left-5 text-3xl font-bold drop-shadow-amber-300">{title}</div> 
                        <div className="absolute bottom-4 left-5 text-pink-400">{japaneseTitle}</div>
                    </div>
                </div>
            </div>
        </div>
    </>
}