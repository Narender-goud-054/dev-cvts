function Member({member}){
    return  (
        <div
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
            {/* Member Image */}
            <div className="bg-gradient-to-br from-blue-100 to-gray-100 h-64 flex items-center justify-center overflow-hidden">
            <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23ddd" width="200" height="200"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-size="60"%3E👤%3C/text%3E%3C/svg%3E';
                }}
            />
            </div>

            {/* Member Info */}
            <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
                {member.name}
            </h3>
            <p className="text-red-600 font-semibold">
                {member.position}
            </p>
            </div>
        </div>
    )
}

export default Member;