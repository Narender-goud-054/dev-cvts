
function Photo({photo}){
    return  <div className="group relative aspect-video bg-gradient-to-br from-blue-200 to-orange-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-200 to-orange-200"><span class="text-gray-600 font-medium">${photo.title}</span></div>`;
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                    <h3 className="text-white font-bold text-lg">{photo.title}</h3>
                    </div>
                </div>
            </div>
}

export default Photo;