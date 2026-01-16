const partners = [
    {
        name: "Healthium",
        logo: "./images/partners/healthium.png"
    },
    {
        name:"SUN Pharmaceutical",
        logo:"./images/partners/sun.png"
    },
    {
        name:"Terumo",
        logo:"./images/partners/terumo.png"
    },
    {
        name:"Emcure",
        logo:"./images/partners/emcure2.jpg"
    },
    {
        name:"Baxter",
        logo:"./images/partners/baxter.png"
    },
    {
        name:"United Biotech",
        logo:"./images/partners/unitedbiotech.png"
    },
    {
        name:"Medtronic",
        logo:"./images/partners/medtronic.jpg"   
    },
    {
        name:"Meril",
        logo:"./images/partners/meril.png"   
    },
    {
        name:"Ethicon",
        logo:"./images/partners/ethicon5.png"   
    },
    {
        name:"Abbott",
        logo:"./images/partners/abbott.png"   
    },
    {
        name:"Panther",
        logo:"./images/partners/panther2.png"   
    },
    {
        name:"Visionary Medicare",
        logo:"./images/partners/Visionary-medicare.jpg"   
    },
]

const SupportingPartners = () => {
  return (
    <section id="supportingPartners" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
            <h2 className="section-title">SUPPORTING PARTNERS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {partners.map((partner, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform">
                        {/* Partner Logo */}
                        <div className=" aspect-[20/10]  flex items-center justify-center overflow-hidden">
                        <img 
                            src= {partner.logo}
                            alt= {partner.name}
                            className="w-full h-full object-contain object-center"
                            onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23ddd" width="200" height="200"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-size="60"%3E👤%3C/text%3E%3C/svg%3E';
                            }}
                        />
                        </div>
                    </div>
                ))}
                
                {/* <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform">
                    <div className=" aspect-[35/10] bg-gradient-to-br from-blue-100 to-gray-100 flex items-center justify-center overflow-hidden">
                    <img 
                        src= {partnersData.partner2.logo}
                        alt= {partnersData.partner2.name}
                        className="w-full h-full object-contain object-top"
                        onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23ddd" width="200" height="200"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-size="60"%3E👤%3C/text%3E%3C/svg%3E';
                        }}
                    />
                    </div>
                </div> */}
            </div>
        </div>
    </section>
  );
};

export default SupportingPartners;
