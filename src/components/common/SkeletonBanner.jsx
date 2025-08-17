import useIsLargeScreen from "../../hooks/useIsLargeScreen";

function SkeletonHero() {
  const isLargeScreen = useIsLargeScreen();

  return (
    <div className="relative w-full h-[92vh] bg-neutral-800 animate-pulse rounded-md">
      {/* Image Placeholder */}
      <div className="absolute inset-0 bg-neutral-800 rounded-md"></div>

      {/* Movie Information Section */}
      <div
        className={`absolute space-y-4 ${
          isLargeScreen
            ? "left-0 top-1/2 -translate-y-1/2 p-6"
            : "bottom-0 p-4 w-[90%] mx-auto"
        }`}
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
