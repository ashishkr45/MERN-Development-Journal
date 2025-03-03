export function SideBar() {
	return <div className="flex">
		<div className="bg-red-50 mt-2 w-75 p-4  h-900">
			<div className="flex flex-row ">
				<span className="basis-3/5  m-3 mr-9 p-1.5 text-bace font-mono bg-blue-100 text-blue-500 rounded-lg">Ashish</span>
				<img className="rounded-lg w-0.5 basis-1/5" 
					src="https://media.licdn.com/dms/image/v2/D5603AQF1G_Q51ICLdg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1702703546038?e=1746662400&v=beta&t=umBqOv_HnFPPP_ZU5bA5G2L6FSeTPZEpmaH9uboULs4" alt="profile-pic" />
			</div>
			<div className="mt-4 ml-1.5 mr-1">
				<div className="w-65 h-11 mt-6 p-2 rounded-xl text-[#898689] hover:bg-[#e4e9ee] hover:text-blue-500">Home</div>
				<div className="w-65 h-11 mt-6 p-2 rounded-xl text-[#898689] hover:bg-[#e4e9ee] hover:text-blue-500">Webinars</div>
				<div className="w-65 h-11 mt-6 p-2 rounded-xl text-[#898689] hover:bg-[#e4e9ee] hover:text-blue-500">Billing</div>
				<div className="w-65 h-11 mt-6 p-2 rounded-xl text-[#898689] hover:bg-[#e4e9ee] hover:text-blue-500">User Management</div>
				<div className="w-65 h-11 mt-6 p-2 rounded-xl text-[#898689] hover:bg-[#e4e9ee] hover:text-blue-500">Setting</div> 
			</div>
		</div>
		<div className="bg-green-400">content</div>
	</div>
}