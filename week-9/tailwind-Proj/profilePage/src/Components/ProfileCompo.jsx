export function ProfileCompo() {
  return (
    <div className="w-52 h-80 ml-4 —translate-y-24 bg-amber-50 rounded-xl flex flex-col items-center justify-center p-8 shadow-lg">
      <img
        className="w-24 h-24 object-cover rounded-2xl shadow-lg"
        src="https://media.licdn.com/dms/image/v2/D5603AQF1G_Q51ICLdg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1702703546038?e=1746662400&v=beta&t=umBqOv_HnFPPP_ZU5bA5G2L6FSeTPZEpmaH9uboULs4"
        alt="profile-pic"
      />
      <div className="mt-2 text-lg font-semibold p-2.5">Ashish Kumar</div>
	  <p className="text-gray-500 text-sm">ashishkr45943@gmail.com</p>
	  <p className="text-gray-500 text-sm mb-2">8092133007</p>
	  <p className="text-gray-500 text-sm mb-1.5">Bhagalpur, Bihar</p>
    </div>
  );
}
