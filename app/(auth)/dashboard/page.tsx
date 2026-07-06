import { auth } from "@/lib/auth";
import DashboardHeader from "./header";

export default async function DashboardPage() {
  const session = await auth();

  return (
    <>
      <DashboardHeader
        name={session?.user?.name ?? "Usuário"}
        initials={session?.user?.name?.charAt(0).toUpperCase() ?? "U"}
      />
      <main className="min-h-screen bg-gray-50 p-6">
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <p className="text-xs text-gray-400 mb-1">Sessões ativas</p>
            <p className="text-2xl font-medium text-gray-900">1</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <p className="text-xs text-gray-400 mb-1">Último acesso</p>
            <p className="text-xl font-medium text-gray-900">Hoje</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <p className="text-xs text-gray-400 mb-1">Status da conta</p>
            <p className="text-xs font-medium flex items-center justify-center bg-green-200 text-green-600 w-10 h-5 rounded-xl">
              Ativa
            </p>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="text-sm font-medium text-gray-600 mb-4">
            Atividade recente
          </p>
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-sm text-gray-700">Login realizado</span>
            </div>
            <span className="text-xs text-gray-400">agora</span>
          </div>
          <div className="flex items center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm text-gray-700">Conta criada</span>
            </div>
            <span className="text-xs text-gray-400">há 2 minutos</span>
          </div>
        </div>
      </main>
    </>
  );
}
