function SkeletonCard({ isPortrait }) {
    return (
      <div
        className={`relative rounded-md bg-neutral-800 animate-pulse ${
          isPortrait ? "aspect-[2/3]" : "aspect-video"
        }`}
      ></div>
    );
  }
export default SkeletonCard;  