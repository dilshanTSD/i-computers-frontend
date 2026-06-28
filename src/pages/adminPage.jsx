import { NavLink, Route, Routes } from "react-router-dom";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FiBox } from "react-icons/fi";
import { HiOutlineUsers } from "react-icons/hi2";
import AdminProductsPage from "./admin/adminProductsPage";
import AddProductForm from "./admin/AdminAddProductForm";

export default function AdminPage() {
  const activeLinkStyle = ({ isActive }) =>
    `flex flex-row items-center gap-3.5 px-4 py-3 rounded-xl font-semibold text-base transition-all duration-200 ` +
    (isActive
      ? "bg-accent/15 text-accent shadow-sm shadow-accent/5"
      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900");

  return (
    <div className="w-full h-screen flex bg-slate-50 text-slate-800 antialiased">
      {/* 1. SIDEBAR CONTAINER */}
      <div className="w-[280px] h-full shadow-xl flex flex-col bg-white border-r border-slate-100/80 z-10">
        {/* Header / Logo Section */}
        <div className="w-full h-[80px] flex items-center p-5 bg-gradient-to-r from-accent to-accent/95 gap-3.5 shadow-sm">
          <div className="bg-white p-0.5 rounded-xl shadow-md flex items-center justify-center w-10 h-10">
            <img
              src="/logo.png"
              alt="logo"
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-white tracking-wide leading-none">
              Admin Panel
            </span>
            <span className="text-[10px] text-white/70 font-medium mt-0.5">
              Control Center
            </span>
          </div>
        </div>

        {/* Navigation Links Area */}
        <div className="flex flex-col gap-1.5 px-4 mt-6 flex-1">
          <NavLink to="/admin" end className={activeLinkStyle}>
            <LiaShippingFastSolid className="text-xl" />
            <span>Orders</span>
          </NavLink>

          <NavLink to="/admin/products" className={activeLinkStyle}>
            <FiBox className="text-xl" />
            <span>Products</span>
          </NavLink>

          <NavLink to="/admin/users" className={activeLinkStyle}>
            <HiOutlineUsers className="text-xl" />
            <span>Users</span>
          </NavLink>
        </div>
      </div>

      {/* 2. MAIN CONTENT AREA (Right Side) */}
      <div className="flex-1 h-full overflow-y-auto flex flex-col">
        {/* Dynamic Pages Container */}
        <div className="p-3 flex-1 bg-slate-50">
          <div className="bg-white p-6 rounded-2xl border border-slate-100/80 min-h-[calc(100vh-24px)] shadow-sm">
            <Routes>
              <Route
                path="/"
                element={
                  <h1 className="text-2xl font-bold text-slate-800">
                    Orders Management
                  </h1>
                }
              />
              <Route path="/products" element={<AdminProductsPage />} />
              <Route
                path="/users"
                element={
                  <h1 className="text-2xl font-bold text-slate-800">
                    Users List
                  </h1>
                }
              />
              <Route path="/add-product" element={<AddProductForm />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

// import { Link, Route, Routes } from "react-router-dom";

// import { LiaShippingFastSolid } from "react-icons/lia";

// import { FiBox } from "react-icons/fi";

// import { HiOutlineUsers } from "react-icons/hi2";

// export default function AdminPage() {
//   return (
//     <div className="w-full h-full flex  text-secondary">
//       <div className="w-[360px] h-full shadow-2xl flex flex-col bg-white gap-2">
//         <div className="w-full h-[100px] flex p-4 bg-accent/90 gap-4 border-b-black">
//           <img
//             src="logo.png"
//             alt="logo"
//             className="max-h-full max-w-full object-contain"
//           />

//           <span className="text-2xl font-bold text-white flex items-center">
//             Admin Panel
//           </span>

//           {/* Navigation Links */}
//         </div>

//         <div className="flex flex-col gap-2 ml-2 mt-4">
//           <Link
//             to="/admin"
//             className="hover:text-blue-500 hover:zoom-102 hover:text-shadow-2xs font-medium text-xl flex flex-row items-center gap-2.5"
//           >
//             <LiaShippingFastSolid />
//             Orders
//           </Link>

//           <Link
//             to="/admin/products"
//             className="hover:text-blue-500 hover:zoom-102 hover:text-shadow-2xs font-medium text-xl flex flex-row items-center gap-2.5"
//           >
//             <FiBox />
//             Products
//           </Link>

//           <Link
//             to="/admin/users"
//             className="hover:text-blue-500 hover:zoom-102 hover:text-shadow-2xs font-medium text-xl flex flex-row items-center gap-2.5"
//           >
//             <HiOutlineUsers />
//             Users
//           </Link>
//         </div>
//       </div>

//       <div className="w-[calc(100%-360px)] bg-primary h-full">
//         <Routes>
//           <Route path="/" element={<h1>Orders Page</h1>} />

//           <Route path="/products" element={<h1>Product Page</h1>} />

//           <Route path="/users" element={<h1>Users Page</h1>} />
//         </Routes>
//       </div>
//     </div>
//   );
// }
// //
