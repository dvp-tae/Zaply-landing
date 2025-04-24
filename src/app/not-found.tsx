import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 text-center bg-white rounded-lg shadow-md">
        <h2 className="mb-2 text-6xl font-bold text-gray-800">404</h2>
        <h3 className="mb-4 text-2xl font-semibold text-gray-700">페이지를 찾을 수 없습니다</h3>
        <p className="mb-6 text-gray-600">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <Link
          href="/"
          className="inline-block px-4 py-2 font-medium text-white transition-colors bg-blue-600 rounded hover:bg-blue-700">
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
