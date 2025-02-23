import { ButtonRedirect } from "@/types";
import { useRouter } from "next/navigation";

const ButtonPath = ({ title, path }: ButtonRedirect) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`${path}`)}
      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
    >
      <span className="hidden sm:inline">{title}</span>
    </button>
  );
};

export default ButtonPath;
