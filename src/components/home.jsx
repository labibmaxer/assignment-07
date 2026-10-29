import React from 'react';
import { FaPlus } from "react-icons/fa";

const Hero = async() => {
    const data = await fetch("http://localhost:3000/friends.json");
    const friends = await data.json()
    console.log(friends);
    const connected = friends.filter((friend) => friend.status === "connected").length;
    const overdue = friends.filter((friend) => friend.status === "overdue").length
    return (
        <div className=' container mx-auto my-15'>
            <div className='text-center justify-center space-y-5.5'>
            <h1 className='font-bold text-5xl'> Friends to keep close in your life</h1>
            <p className='text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most. </p>
                <a className="btn bg-[#244D3F] font-bold text-white"><FaPlus />  Add a Friend</a>

              <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
  <div className="card bg-base-100 py-6 text-center shadow-sm">
    <h3 className="text-3xl font-bold text-[#244D3F]">{friends.length}</h3>
    <p className="text-sm text-gray-500">Total Friends</p>
  </div>

  <div className="card bg-base-100 py-6 text-center shadow-sm">
    <h3 className="text-3xl font-bold text-[#244D3F]">{connected}</h3>
    <p className="text-sm text-gray-500">Connected</p>
  </div>

  <div className="card bg-base-100 py-6 text-center shadow-sm">
    <h3 className="text-3xl font-bold text-[#244D3F]">{overdue}</h3>
    <p className="text-sm text-gray-500">Overdue</p>
  </div>

  <div className="card bg-base-100 py-6 text-center shadow-sm">
    <h3 className="text-3xl font-bold text-[#244D3F]">12</h3>
    <p className="text-sm text-gray-500">Interactions This Month</p>
  </div>
</div>
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {friends.map((friend) => (
                        
  <div key={friend.id}>
    <div className='g'> 
   <div className="card bg-base-100 py-6 text-center flex">
    <div className='shadow-2xl grid w-50 pb-4 rounded-2xl '> 
  <div className="mx-auto h-20 w-20 overflow-hidden rounded-full bg-gray-200">
    <img src={friend.picture} alt="" className="h-full w-full object-cover" />
  </div>

  <h3 className="mt-4 text-xl font-bold text-gray-800">{friend.name}</h3>
  <p className="text-sm text-gray-500">{friend.days_since_contact}d ago </p>

  <div className="mt-3 flex flex-col items-center gap-2">
    {/* <span className="badge border-none bg-green-100 text-xs font-medium uppercase text-green-800"></span> */}
    <span className={`badge border-none text-xs font-medium text-white ${friend.status === 'connected' ? "bg-green-600" : "bg-red-500"}`}>{friend.status}</span>
  </div>
  </div>
</div>

</div>

   </div>
   
))}



                </div>
            </div>

          



        </div>
    );
};

export default Hero;