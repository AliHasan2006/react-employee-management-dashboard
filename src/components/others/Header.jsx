import React from "react";

const Header = ({data}) => {
  console.log(data);

const logOutUser = () => {
localStorage.removeItem("loggedInUser");
window.location.reload();
};
  return (
    <div className="text-white bg-[#121212] flex justify-between items-end">
      <h1 className="text-2xl font-medium">
        Hello, {data.firstName}<br />
        <span className="text-3xl font-semibold">👋</span>
      </h1>
      <button onClick={logOutUser} className="bg-red-500 hover:bg-red-400 out-none text-white px-5 py-2 rounded-sm text-lg font-medium cursor-pointer">
        Log out
      </button>
    </div>
  );
};

export default Header;
