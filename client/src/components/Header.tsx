import React from "react";

function Header() {
  return (
    <div>
      <nav className="flex justify-between bg-emerald-400 items-center">
        <div className="text-3xl ml-8">Nick of Thyme</div>
        <div className="flex gap-x-5 text-xl mr-8">
          <h1>Home</h1>
          <h1>Products</h1>
          <h1>Checkout</h1>
          <h1>Profile</h1>
        </div>
      </nav>
    </div>
  );
}

export default Header;
