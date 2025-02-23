"use client";
import { ChatPanel } from "@/components/ChatPanel";
import { ActiveChat } from "@/components/ActiveChat";
import { useAppContext } from "@/context/AppContext";
import { useSearchParams } from "next/navigation";
import ButtonPath from "@/components/BackButton";

export default function CustomerPage() {
  const { customers } = useAppContext();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const customer =
    customers?.find((c) => c.id === Number(id)) ||
    customers?.find((c) => c.id === 7);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col lg:flex-row gap-6">
      {/* Panel Principal */}
      <div className="w-full lg:w-3/4 flex flex-col gap-6 bg-white shadow-lg rounded-xl p-6">
        <ChatPanel />
      </div>

      {/* Panel Lateral Derecho */}
      <div className="w-full lg:w-1/4 bg-white shadow-lg rounded-xl p-6">
        <ActiveChat />
      </div>
    </div>
  );
}
