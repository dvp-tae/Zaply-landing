export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600 mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-700">로딩 중...</h2>
        <p className="text-gray-500 mt-2">잠시만 기다려 주세요.</p>
      </div>
    </div>
  );
}
