"use client";

import { LayoutDashboardIcon, LogOutIcon } from "lucide-react";
import { signOut } from "next-auth/react";

type HeaderProps = {
  name: string;
  initials: string;
};

export default function DashboardHeader({ name, initials }: HeaderProps) {
  return (
    <header className="flex justify-between p-6">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
          <LayoutDashboardIcon size={16} className="text-white" />
        </div>
        <span className="text-lg font-medium text-gray-900">Login System</span>
      </div>
      <div className="flex items-center gap-20">
        <p className="text-base text-gray-600 hover:text-blue-700 transition-colors cursor-pointer">
          Visão geral
        </p>
        <p className="text-base text-gray-600 hover:text-blue-700 transition-colors cursor-pointer">
          Perfil
        </p>
        <p className="text-base text-gray-600 hover:text-blue-700 transition-colors cursor-pointer">
          Configurações
        </p>
      </div>
      <div className="flex items-center gap-2">
        <p className="flex items-center justify-center bg-blue-200 text-blue-500 w-8 h-8 rounded-full">
          {initials}
        </p>
        <p className="flex items-center justify-center text-sm text-gray-600">
          {name}
        </p>
        <LogOutIcon
          size={16}
          className="text-gray-400 cursor-pointer hover:text-red-500 transition-colors"
          onClick={() => signOut({ callbackUrl: "/login" })}
        />
      </div>
    </header>
  );
}
