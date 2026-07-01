"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit() {
    if (!email || !password) {
      return setError("Preencha todos os campos!");
    }

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      return setError("E-mail ou senha incorretos!");
    }
    router.push("/dashboard");
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500/50">
      <div className="bg-slate-100 p-50 rounded-lg max-w-2xl mx-6 flex flex-col gap-5 shadow-lg shadow-black/30 text-center">
        <h1>Entrar</h1>
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
