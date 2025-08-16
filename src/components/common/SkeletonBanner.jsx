function SkeletonHero() {
    return (
      <div className="relative w-full h-[92vh] bg-neutral-900 animate-pulse">
        {/* Title + buttons placeholders */}
        <div className="absolute left-0 bottom-20 p-4 space-y-4">
          {/* Title */}
          <div className="w-72 h-10 bg-gray-700 rounded"></div>
          {/* Buttons */}
          <div className="flex gap-4">
            <div className="w-24 h-10 bg-gray-700 rounded"></div>
            <div className="w-24 h-10 bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    );
  }
  
  export default SkeletonHero;
  