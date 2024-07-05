'use client'
import React, {  useState } from 'react'



const BackgroundChanger = () => {

    const [color,setColor] = useState(null);

    const changeBackgroundColor = (index)=>{
       if(index==0){
        setColor("bg-black")
        console.log(index);
       }else if(index==1){
            setColor("bg-white");
       }else if(index==2){
            setColor("bg-yellow-600");
       }else if(index==3){
            setColor("bg-red-600");
       }else if(index==4){
            setColor("bg-green-700");
       }else if(index==5){
            setColor("bg-gray-700");
       }else{
            setColor("bg-blue-700");
       }
    }
   

    const colorList = [
        {color:"black",bgColor:"bg-black",borderColor:"border-black"},
        {color:"white",bgColor:"bg-white",borderColor:"border-black"},
        {color:"yellow",bgColor:"bg-yellow-600",borderColor:"border-yellow-600"},
        {color:"red",bgColor:"bg-red-600",borderColor:"border-red-600"},
        {color:"green",bgColor:"bg-green-700",borderColor:"border-green-700"},
        {color:"gray",bgColor:"bg-gray-700",borderColor:"border-gray-700"}
    ]


    return (
        <>
            <div
                className={`w-full h-full relative ${color}`}
            >
    
                <div

                    className="w-full h-[10%] absolute bottom-0 flex justify-center items-center gap-4 bg-slate-500"
                >
                    {colorList.map((data, index) => {
                        return (


                            <button
                                key={index}
                                className={`px-8 py-2 ${index===1?"bg-gray-400 text-white":data.bgColor} rounded-md text-white font-extrabold capitalize transition duration-200 hover:bg-white hover:text-black border-2 border-transparent ${data.borderColor}`}
                                onClick={()=>changeBackgroundColor(index)}
                            >
                                {data.color}
                            </button>


                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default BackgroundChanger
