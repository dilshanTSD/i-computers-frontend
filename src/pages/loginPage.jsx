import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import axios from "axios";
import api from "../lib/api";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handlLogin() {
    // axios
    //   .post("http://localhost:3000/users/login", {
    //     email: email,
    //     password: password,
    //   })

    api
      .post("users/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        toast.success("Login Succesful");
        console.log(res.data.token);

        const isAdmin = res.data.isAdmin;
        console.log(res.data, isAdmin);

        //browser store
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        toast.error("Login Failed");
        console.log(err);
      });

    //send http reqest to backend
  }
  return (
    <div className="w-full h-screen flex justify-center items-center relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      <div className="w-[435px] h-[560px] backdrop-blur-xs bg-white/10 shadow-2xl rounded-lg p-6 flex flex-col items-center border border-white/20 z-10">
        <img src="logo.png" className="w-[200px] h-[100px] object-cover" />
        <h1 className="text-3xl font-bold text-shadow-inherit mt-0">Login</h1>

        <label className="w-full mt-5 ml-4 mb-1 text-white font-semibold">
          Email
        </label>
        <input
          onChange={(e) => {
            //toast.success(e.target.value);
            setEmail(e.target.value);
          }}
          type="email"
          className="w-full h-12 rounded-lg bg-secondary/5 border-2 border-accent/70 focus:border-black/80 outline-none px-2 text-white ml-6 mr-4"
          placeholder="user@gmail.com"
        />
        <label className="w-full mt-5 ml-4 mb-1 text-white font-semibold">
          Password
        </label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          className="w-full h-12 rounded-lg bg-secondary/5 border-2 border-accent/70 focus:border-black/80 outline-none px-2 text-white ml-6 mr-4"
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
          className="w-full h-12 bg-accent/70 rounded-lg text-white font-semibold mt-3 hover:bg-accent/90 transition duration-300"
        >
          Login
        </button>
        <p className="w-full text-center mt-2">
          Do not have an account? register{" "}
          <Link to="/register" className="text-accent font-bold">
            here
          </Link>
        </p>
        <button className="w-full h-12 bg-none rounded-lg text-black text-shadow-accent mt-3 border-none bg-secondary/20 hover:text-black hover:bg-secondary/60 transition-colors flex items-center justify-center gap-1">
          <FcGoogle />
          Login with google
        </button>
      </div>
    </div>
  );
}
