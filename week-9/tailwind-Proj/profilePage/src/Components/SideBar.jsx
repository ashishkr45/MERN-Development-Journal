import { MenuIcon } from '../icons/bar'

export function SideBar({SideBarOpen, setSideBarOpen}) {
	return <div className="transition-all duration-300 ease-in-out w-0 md:w-80 overflow-hidden h-screen bg-stone-100 md:p-4 hidden md:block">
		<div className="flex flex-row ">
			<div className='basis-1/5 cursor-pointer hover:bg-slate-300 flex justify-center items-center' onClick={()=> {
				setSideBarOpen(!SideBarOpen);
			}}>
				<MenuIcon />
			</div>
			<span className="basis-3/5  m-3 mr-9 p-1.5 text-bace bg-[#002a5a] text-blue-50 font-mono rounded-lg">Ashish</span>
			<img className="rounded-lg w-0.5 basis-1/5" 
				src="https://media.licdn.com/dms/image/v2/D5603AQF1G_Q51ICLdg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1702703546038?e=1746662400&v=beta&t=umBqOv_HnFPPP_ZU5bA5G2L6FSeTPZEpmaH9uboULs4" alt="profile-pic" />
		</div>
		
		<div className="mt-4 ml-1.5 mr-1">
			{["Home", "Webinars", "Billing", "User Management", "Setting"].map(
				(item) => (
				<div
					key={item}
					className="w-full h-11 mt-6 p-2 rounded-xl text-[#898689] hover:bg-[#d3deea] hover:text-blue-500"
				>
					{item}
				</div>
				)
			)}
		</div>
	</div>
}







{/* <div className="mt-4 ml-1.5 mr-1">
	<div className="w-65 h-11 mt-6 p-2 rounded-xl text-[#898689] hover:bg-[#d3deea] hover:text-blue-500">Home</div>
	<div className="w-65 h-11 mt-6 p-2 rounded-xl text-[#898689] hover:bg-[#d3deea] hover:text-blue-500">Webinars</div>
	<div className="w-65 h-11 mt-6 p-2 rounded-xl text-[#898689] hover:bg-[#d3deea] hover:text-blue-500">Billing</div>
	<div className="w-65 h-11 mt-6 p-2 rounded-xl text-[#898689] hover:bg-[#d3deea] hover:text-blue-500">User Management</div>
	<div className="w-65 h-11 mt-6 p-2 rounded-xl text-[#898689] hover:bg-[#d3deea] hover:text-blue-500">Setting</div> 
</div> */}