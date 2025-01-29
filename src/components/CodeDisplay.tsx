import { motion } from "framer-motion";

interface CodeDisplayProps {
  code: string;
}

export function CodeDisplay({ code }: CodeDisplayProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-md mx-auto bg-[#0B0B0E] rounded-lg border border-gray-800 p-6 shadow-lg"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 text-purple-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
            <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
            <path d="M18 12c0-1.1-.9-2-2-2H4" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-white">
          Here's your invite code:
        </h2>
      </div>
      <div className="bg-black/50 rounded p-4 font-mono text-lg text-gray-200">
        {code}
      </div>
    </motion.div>
  );
}
