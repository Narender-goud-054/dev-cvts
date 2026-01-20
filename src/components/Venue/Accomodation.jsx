import { FaMap,FaHotel,FaPhone} from 'react-icons/fa'

const accomodations = [
    {
        name: "Town House Casa Grand",
        phone: "0124-6201614",
        location: "Plot no 22, Dwarakapuri, Punjagutta",
        mapLink: "https://maps.app.goo.gl/bttxbqX9tUiXDgRp9?g_st=iw"
    },
    {
        name: "Super town house Oak Banjara Hills Hyderabad",
        phone: "0124-4330599",
        location: "Old Survey No. 129, Plot No. 259, Naveen Nagar Rd, Naveen Nagar, Khairtabad",
        mapLink: "https://maps.app.goo.gl/frqVbSWYBVmboXDg6?g_st=iw"
    }
];

export default function Accomodation(){
    return (  
    <div className="container-custom py-20">
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Accomodation</h1>
            <div className="space-y-6">
                {accomodations.map((accomodation,index)=>
                    <div key={index} className="p-4 bg-white rounded-lg shadow-sm">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">{accomodation.name}</h2>
                        <div className="flex items-center">
                            <FaHotel className="mr-3 shrink-0"/>
                            <p className="text-sm text-gray-800">{accomodation.location}</p>
                        </div>
                        <div className="flex items-center">
                            <FaPhone className="mr-3 rotate-90"/>
                            <p className="text-sm text-gray-800">{accomodation.phone}</p>
                        </div>
                        
                        <div className="flex items-center">
                            <FaMap className="mr-3"/>
                            <a href={accomodation.mapLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                                View on Google Maps
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>);
}