import {FaPlay} from 'react-icons/fa';
import { useState } from "react";

function Video({video}){
 const [open, setOpen] = useState(false);

 return <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
            <div className="relative aspect-video bg-gradient-to-br from-blue-200 to-orange-200">
                <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-200 to-orange-200"><div class="text-center"><div class="text-4xl mb-2">📹</div><span class="text-gray-600">Video</span></div></div>';
                    }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                    <div onClick= {()=>window.open(video.url)} className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <FaPlay className="text-[#D17950] text-2xl ml-1" />
                    </div>
                </div>
            </div>
            
            <div className="p-4">
                <h3 className="text-gray-800 font-bold text-lg">{video.title}</h3>
            </div>

            {/* Modal */}
            {/* {open && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="bg-black p-2 rounded-xl shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <iframe
                        className="w-full h-full rounded-lg"
                        src={video.url}
                        title="YouTube Player"
                        allow="autoplay; encrypted-media"
                        origin="cross-origin"
                        ></iframe>
                    </div>
                </div>
            )} */}
        </div>
}

export default Video;