export default function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
      <div className="h-56 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer bg-[length:200%_100%]" />
      
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-6 w-24 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer bg-[length:200%_100%] rounded-full" />
          <div className="h-4 w-20 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer bg-[length:200%_100%] rounded" />
        </div>
        
        <div className="h-7 w-4/5 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer bg-[length:200%_100%] rounded mb-3" />
        <div className="h-7 w-3/5 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer bg-[length:200%_100%] rounded mb-4" />
        
        <div className="space-y-2 mb-4">
          <div className="h-4 w-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer bg-[length:200%_100%] rounded" />
          <div className="h-4 w-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer bg-[length:200%_100%] rounded" />
          <div className="h-4 w-3/4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer bg-[length:200%_100%] rounded" />
        </div>
        
        <div className="h-5 w-24 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer bg-[length:200%_100%] rounded" />
      </div>
    </div>
  );
}
