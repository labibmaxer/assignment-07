
        import { FiBell, FiArchive, FiTrash2, FiPhoneCall, FiMessageSquare, FiVideo } from "react-icons/fi";



const FriendDetails =  async ({params}) => {
    const {id} = await params; 

    const res = await fetch("http://localhost:3000/friends.json");
    const friends = await res.json();

    const friend = friends.find((f) =>String(f.id)===id);
   const connected = friends.filter((friend) => friend.status === "connected").length;
      const overdue = friends.filter((friend) => friend.status === "overdue").length;
    return(
          <div>
 
<div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-4 py-10 md:grid-cols-3">
  {/* LEFT COLUMN */}
  <div className="space-y-3 md:col-span-1">
    <div className="card bg-base-100 p-6 text-center shadow-sm">
      <div className="mx-auto h-20 w-20 overflow-hidden rounded-full bg-gray-200">
        <img src={friend.picture} alt="" className="h-full w-full object-cover" />
      </div>
      <h2 className="mt-3 text-lg font-bold text-gray-800"></h2>
      <div className="mt-2 flex flex-col items-center gap-2">
        <span className={`badge border-none text-xs text-white ${friend.status === 'connected' ? "bg-green-600 " : "bg-red-500"}`}>{friend.status}</span>
        {/* <span className="badge border-none bg-green-100 text-xs uppercase text-green-800"></span> */}
      </div>
      <p className="mt-3 text-sm italic text-gray-500">{friend.bio}</p>
      <p className="mt-1 text-xs text-gray-400">Preferred: {friend.email} </p>
    </div>

    <button className="btn w-full justify-center border-gray-200 bg-white font-normal">
      <FiBell /> Snooze 2 Weeks
    </button>
    <button className="btn w-full justify-center border-gray-200 bg-white font-normal">
      <FiArchive /> Archive
    </button>
    <button className="btn w-full justify-center border-gray-200 bg-white font-normal text-red-500">
      <FiTrash2 /> Delete
    </button>
  </div>

  {/* RIGHT COLUMN */}
  <div className="space-y-4 md:col-span-2">
    {/* 3 stat cards */}
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div className="card bg-base-100 py-6 text-center shadow-sm">
        <h3 className="text-3xl font-bold text-[#244D3F]">{friend.days_since_contact}</h3>
        <p className="text-sm text-gray-500">Days Since Contact</p>
      </div>
      <div className="card bg-base-100 py-6 text-center shadow-sm">
        <h3 className="text-3xl font-bold text-[#244D3F]">{friend.goal}</h3>
        <p className="text-sm text-gray-500">Goal (Days)</p>
      </div>
      <div className="card bg-base-100 py-6 text-center shadow-sm">
        <h3 className="text-2xl font-bold text-[#244D3F]">{friend.next_due_date}</h3>
        <p className="text-sm text-gray-500">Next Due</p>
      </div>
    </div>

    {/* Relationship goal */}
    <div className="card bg-base-100 p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-[#244D3F]">Relationship Goal</h3>
        <button className="btn btn-xs border-gray-200 bg-white font-normal">Edit</button>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Connect every <span className="font-bold text-gray-800"> days</span>
      </p>
    </div>

    {/* Quick check-in */}
    <div className="card bg-base-100 p-6 shadow-sm">
      <h3 className="font-semibold text-[#244D3F]">Quick Check-In</h3>
      <div className="mt-4 grid grid-cols-3 gap-3">
        <button className="flex flex-col items-center gap-2 rounded-lg bg-gray-50 py-6 text-sm hover:bg-gray-100">
          <FiPhoneCall className="text-xl" /> Call
        </button>
        <button className="flex flex-col items-center gap-2 rounded-lg bg-gray-50 py-6 text-sm hover:bg-gray-100">
          <FiMessageSquare className="text-xl" /> Text
        </button>
        <button className="flex flex-col items-center gap-2 rounded-lg bg-gray-50 py-6 text-sm hover:bg-gray-100">
          <FiVideo className="text-xl" /> Video
        </button>
      </div>
    </div>
  </div>
</div>


          </div>
    );
};
export default FriendDetails; 