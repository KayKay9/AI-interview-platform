"use client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Frontend");
  const [level, setLevel] = useState("Junior");

  const handleSubmit = async () => {
    const res = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, role, level }),
    });
    const data = await res.json();
    console.log(data);
    alert("User created!");
  };

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">AI Interview Platform</h1>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 m-2"/>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 m-2"/>
      <select value={role} onChange={(e) => setRole(e.target.value)} className="border p-2 m-2">
        <option>Frontend</option>
        <option>Backend</option>
        <option>Fullstack</option>
      </select>
      <select value={level} onChange={(e) => setLevel(e.target.value)} className="border p-2 m-2">
        <option>Junior</option>
        <option>Mid</option>
        <option>Senior</option>
      </select>
      <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 m-2">Create User</button>
    </main>
  );
}
