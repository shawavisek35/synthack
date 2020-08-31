import React from "react";

const Timeline = () => {
    return (
        <div className="container mx-auto px-10 my-10">
            <h1 className="shadow-lg lg:shadow-none md:shadow-none rounded mx-4 my-6 lg:text-6xl md:text-6xl sm:text-5xl text-6xl text-center text-red-700 ">Timeline</h1>
            <div className="grid-rows-1">
                
                <div className="flex justify-start">
                    <div className="bg-white w-2/4 h-auto rounded-lg shadow-xl px-10 py-10 mr-20">
                        <h2 className="text-4xl my-4">Project Submission</h2>
                        <div className="bg-red-400 font-mono text-lg text-center rounded-full w-2/5 py-2 px-4">1st sept-5th sept</div>
                    </div>
                    <lottie-player src="https://assets3.lottiefiles.com/private_files/lf30_dgKoB3.json" className="flex justify-end invisible md:visible"  background="transparent"  speed="1"  style={{width: "300px", height: "300px"}} loop autoplay></lottie-player>
                </div>
                <div className="flex justify-end">
                    <lottie-player src="https://assets1.lottiefiles.com/temp/lf20_c9gtJJ.json"  background="transparent"  speed="1"  style={{width: "300px", height: "300px"}}  loop autoplay></lottie-player>
                    <div className="bg-white w-2/4 h-auto rounded-lg shadow-xl px-10 py-10 ml-20">
                        <h2 className="text-4xl my-4">Student Application</h2>
                        <div className="bg-red-400 font-mono text-lg text-center rounded-full w-2/5 py-2 px-4">6th sept-9th sept</div>
                    </div>
                </div>
                <div className="flex justify-start">
                    <div className="bg-white w-2/4 h-auto rounded-lg shadow-xl px-10 py-10 mr-20">
                        <h2 className="text-4xl my-4">Coding Period</h2>
                        <div className="bg-red-400 font-mono text-lg text-center rounded-full w-2/5 py-2 px-4">12th sept-30th sept</div>
                    </div>
                    <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_bXRG9q.json"  background="transparent"  speed="1" style={{width: "300px", height: "300px"}}  loop autoplay></lottie-player>
                </div>
                <div className="flex justify-end">
                    <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_sYpEFh.json"  background="transparent"  speed="1"  style={{width: "250px", height: "200px"}}  loop autoplay></lottie-player>
                    <div className="bg-white w-2/4 h-auto rounded-lg shadow-xl px-10 py-10 ml-20">
                        <h2 className="text-4xl my-4">Award Ceremony</h2>
                        <div className="bg-red-400 font-mono text-lg text-center rounded-full w-2/5 py-2 px-4">1st Oct-2nd Oct</div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Timeline;