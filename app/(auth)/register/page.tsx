"use client";

import { UserPlusIcon } from "lucide-react";
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl p-8">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <UserPlusIcon size={16} className="text-white" />
          </div>
          <span className="text-sm font-medium text-gray-900">
            Login System
          </span>
        </div>
        <p className="text-xl font-medium text-gray-900 mb-1">Criar conta</p>
        <p className="text-sm text-gray-400 mb-6">
          Insira seus dados para continuar o cadastro
        </p>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Nome:
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome"
            className="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm text-gray-900 outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            E-mail:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seuemail@email.com"
            className="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm text-gray-900 outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Senha:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            className="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm text-gray-900 outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Confirme a senha:
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="********"
            className="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm text-gray-900 outline-none focus:border-blue-500"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit();
            }}
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          className="w-full h-10 bg-blue-600 text-white rounded-lg text-sm font-medium mt-2 hover:bg-blue-700 transition-colors"
          onClick={handleSubmit}
        >
          Criar conta
        </button>
        <p className="text-center text-sm text-gray-400 mt-4">
          Já tem uma conta?{" "}
          <a href="/login" className="text-blue-600 hover:underline text-sm">
            Entrar
          </a>
        </p>
      </div>
    </div>
  );
}
