import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../redux-toolkit/globalSlice";

const ButtonToggle = () => {
  const dispatch = useDispatch();
  const { showSidebar } = useSelector((state) => state.global);
  const handleToggleSidebar = () => {
    dispatch(toggleSideBar(!showSidebar));
  };
  return (
    <button
      className="fixed flex items-center justify-center w-10 h-10 text-white rounded-full right-5 top-5 bg-slate-600"
      onClick={handleToggleSidebar}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};

export default ButtonToggle;
