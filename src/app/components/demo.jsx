"use client";

export default function FadeScroll() {
  return (
    <div className="flex justify-center items-center h-screen">
        <div className="bg-red-300 w-[40%] h-[70vh] relative">
            <div className="bg-yellow-400 w-40 h-40 rounded-full absolute "></div>
            {/* <div className="bg-blue-400 w-40 h-40 rounded-full "></div> */}
            {/* <div className="bg-orange-400 w-40 h-40 rounded-full "></div> */}
            
        </div>
    </div>
  );
}

