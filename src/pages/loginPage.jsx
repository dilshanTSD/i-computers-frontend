import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handlLogin() {
    toast.success("Login Succesful");
    //send http reqest to backend
  }
  return (
    <div className="w-full h-screen bg-[url('/bg.jpg')] bg-cover bg-center flex justify-center items-center">
      <div className="w-[435px] h-[560px] backdrop-blur-md shadow-2xl rounded-lg p-2 flex flex-col items-center">
        <img src="logo.png" className="w-[200px] h-[100px] object-cover" />
        <h1 className="text-3xl font-bold text-secondary mt-0">Login</h1>

        <label className="w-full mt-5 ml-4 mb-1 text-secondary font-semibold">
          Email
        </label>
        <input
          onChange={(e) => {
            //toast.success(e.target.value);
            setEmail(e.target.value);
          }}
          type="email"
          className="w-100 h-12 rounded-lg bg-secondary/5 border-2 border-accent focus:border-secondary/80 outline-none px-2 text-secondary ml-6 mr-4"
          placeholder="user@gmail.com"
        />
        <label className="w-full mt-5 ml-4 mb-1 text-secondary font-semibold">
          Password
        </label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          className="w-100 h-12 rounded-lg bg-secondary/5 border-2 border-accent focus:border-secondary/80 outline-none px-2 text-secondary ml-6 mr-4"
          placeholder="**********"
        />
        <p className="w-full text-right mt-3 mr-6">
          Forget Password? reset{" "}
          <Link to="/reset-password" className="text-accent font-bold">
            here
          </Link>
        </p>
        <button
          onClick={handlLogin}
          className="w-100 h-12 bg-accent rounded-lg text-white mt-3 hover:bg-accent/90 transition duration-300"
        >
          Login
        </button>
        <p className="w-full text-center mt-2">
          Do not have an account? register{" "}
          <Link to="/register" className="text-accent font-bold">
            here
          </Link>
        </p>
        <button className="w-100 h-12 bg-none rounded-lg text-black text-shadow-accent mt-3 border-none bg-secondary/20 hover:text-secondary hover:bg-secondary/30 transition-colors flex items-center justify-center gap-1">
          <FcGoogle />
          Login with google
        </button>
      </div>
    </div>
  );
}
