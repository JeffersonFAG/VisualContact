"use client";
import { ChatPanel } from "@/components/ChatPanel";
import { ActiveChat } from "@/components/ActiveChat";

export default function CustomerPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-3/4 flex flex-col gap-6 bg-white shadow-lg rounded-xl p-6">
        <ChatPanel />
      </div>
      <div className="w-full lg:w-1/4 bg-white shadow-lg rounded-xl p-6">
        <ActiveChat />
      </div>
    </div>
  );
}
