"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit() {
    if (!name || !email || !password) {
      return setError("Preencha todos os campos!");
    }

    if (password !== confirmPassword)
      return setError("As senhas não coincidem.");

    const response = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      return setError(data.error);
    }
    router.push("/login");
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500/50">
      <div className="bg-slate-100 p-50 rounded-lg max-w-2xl mx-6 flex flex-col gap-5 shadow-lg shadow-black/30 text-center">
        <h1>Registre-se</h1>
        <label htmlFor="">Nome:</label>
        <input
          className=""
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="">E-mail:</label>
        <input
          type="email"
          className=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="">Senha:</label>
        <input
          type="password"
          className=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="">Confirme a senha novamente:</label>
        <input
          type="password"
          className=""
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          className="bg-slate-900 text-slate-100 rounded-lg"
          onClick={handleSubmit}
        >
          Confirmar
        </button>
      </div>
    </div>
  );
}
