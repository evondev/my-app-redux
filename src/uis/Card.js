import React from "react";

const Card = () => {
  return (
    <div className="w-[400px] bg-white p-3 rounded-2xl shadow dark:bg-slate-900">
      <div className="card-image h-[250px] mb-5">
        <img
          src="https://cdn.dribbble.com/users/2400293/screenshots/16378193/media/e9ad5ebe9dd6822be9ee622c7465d9e5.png?compress=1&resize=1200x900&vertical=top"
          alt=""
          className="object-cover w-full h-full rounded-xl"
        />
      </div>
      <div className="card-content">
        <h3 className="mb-3 text-2xl font-bold card-title dark:text-white">
          3 ways to get free tickets to travel the world
        </h3>
        <p className="mb-5 text-sm text-slate-600 card-desc dark:text-slate-100">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe quo
          hic quos quidem optio, placeat consequuntur dolore molestiae
          repudiandae iste perspiciatis vel quibusdam alias ducimus eveniet,
          magnam sed itaque explicabo.
        </p>
        <a
          href="/#"
          className="block p-4 font-semibold text-center text-white bg-blue-500 card-details rounded-2xl"
        >
          Explore
        </a>
      </div>
    </div>
  );
};

export default Card;
