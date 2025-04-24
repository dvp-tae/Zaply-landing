"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-red-600 mb-4">오류가 발생했습니다</h2>
        <p className="text-gray-700 mb-6">예상치 못한 문제가 발생했습니다. 다시 시도해주세요.</p>
        <button
          onClick={reset}
          className="px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors">
          다시 시도
        </button>
      </div>
    </div>
  );
}
