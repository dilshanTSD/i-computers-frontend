import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import api from "../lib/api";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  function handlRegister() {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    api
      .post("users/", {
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password,
      })
      .then((res) => {
        toast.success("Registration Successful!");
        navigate("/login");
      })
      .catch((err) => {
        toast.error("Registration Failed");
        console.log(err);
      });
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center relative overflow-hidden p-4">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      {/* backdrop-blur-sm ලෙස වෙනස් කරන ලදී */}
      <div className="w-[435px] h-auto backdrop-blur-sm bg-white/10 shadow-2xl rounded-lg p-6 flex flex-col items-center border border-white/20 z-10 my-4">
        <img
          src="logo.png"
          className="w-[200px] h-[100px] object-cover drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          alt="Logo"
        />
        <h1 className="text-3xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mt-4">
          Register
        </h1>

        {/* Email */}
        <label className="w-full mt-3 mb-1 text-white font-semibold text-left">
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="w-full h-12 rounded-lg bg-secondary/5 border-2 border-accent/70 focus:border-black/80 outline-none px-3 text-white"
          placeholder="user@gmail.com"
        />

        {/* First & Last Names */}
        <div className="w-full flex flex-row gap-2 mt-3">
          <div className="w-1/2 flex flex-col">
            <label className="w-full mb-1 text-white font-semibold text-left">
              First Name
            </label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              className="w-full h-12 rounded-lg bg-secondary/5 border-2 border-accent/70 focus:border-black/80 outline-none px-3 text-white"
              placeholder="John"
            />
          </div>

          <div className="w-1/2 flex flex-col">
            <label className="w-full mb-1 text-white font-semibold text-left">
              Last Name
            </label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              className="w-full h-12 rounded-lg bg-secondary/5 border-2 border-accent/70 focus:border-black/80 outline-none px-3 text-white"
              placeholder="Doe"
            />
          </div>
        </div>

        {/* Password */}
        <label className="w-full mt-3 mb-1 text-white font-semibold text-left">
          Password
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="w-full h-12 rounded-lg bg-secondary/5 border-2 border-accent/70 focus:border-black/80 outline-none px-3 text-white"
          placeholder="**********"
        />

        {/* Confirm Password */}
        <label className="w-full mt-3 mb-1 text-white font-semibold text-left">
          Confirm Password
        </label>
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          className="w-full h-12 rounded-lg bg-secondary/5 border-2 border-accent/70 focus:border-black/80 outline-none px-3 text-white"
          placeholder="**********"
        />

        <button
          onClick={handlRegister}
          className="w-full h-12 bg-accent/70 rounded-lg text-white font-semibold mt-5 hover:bg-accent/90 transition duration-300"
        >
          Register
        </button>

        <p className="w-full text-center mt-3 text-white">
          Already have an account? login{" "}
          <Link to="/login" className="text-accent font-bold underline">
            here
          </Link>
        </p>

        {/* Google Button */}
        <button className="w-full h-12 bg-white/20 rounded-lg text-white mt-3 border border-white/10 hover:bg-white/30 transition duration-300 flex items-center justify-center gap-2 font-semibold">
          <FcGoogle className="text-xl" />
          Register with Google
        </button>
      </div>
    </div>
  );
}
