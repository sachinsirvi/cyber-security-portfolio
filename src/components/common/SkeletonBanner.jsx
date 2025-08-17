function SkeletonHero() {
  return (
    <div className="relative w-full h-[92vh] bg-neutral-800 animate-pulse rounded-md">
      {/* Image Placeholder */}
      <div className="absolute inset-0 bg-neutral-800 rounded-md"></div>

      {/* Movie Information Section */}
      <div
        className={`absolute ${
          window.innerWidth >= 1024
            ? "left-0 p-4 md:block"
            : "bottom-0 p-2 w-[90%] mx-auto"
        } space-y-4`}
      >
        {/* Title Placeholder */}
        <div className="w-72 h-10 bg-neutral-700 rounded"></div>

        {/* Buttons Placeholder */}
        <div className="flex gap-4">
          <div className="w-24 h-10 bg-neutral-700 rounded"></div>
          <div className="w-24 h-10 bg-neutral-700 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonHero;