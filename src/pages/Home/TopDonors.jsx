import { useEffect, useState } from "react";


const TopDonors = () => {
    const [donors, setDonors] = useState([]);
    useEffect(()=>{
        fetch('https://meraki-server.vercel.app/donors')
        .then(res=>res.json())
        .then(data=>setDonors(data))
    },[]);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-16">
            {
                donors.map(donor=> <div key={donor._id} className="lg:px-8 lg:py-8 bg-[#fce9da] text-lg  shadow-xl">
                <figure><img className="mx-auto w-20 rounded-full" src={donor.photoURL} alt="Shoes" /></figure>
                <div className="card-body ">
                  <h2 className="font-bold text-lg lg:text-xl text-center mb-3">{donor.name}</h2>
                  <p className="text-base md:text-lg lg:text-xl "><span className="font-bold">Email:</span> {donor.email}</p>
                  <p className="text-base md:text-lg lg:text-xl "><span className="font-bold">No. of donated food items:</span> {donor.donationCount}</p>
                  {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div> */}
                </div>
              </div>)
            }
        </div>
    );
};

export default TopDonors;