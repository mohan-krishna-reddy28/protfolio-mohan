import Skeleton from "react-loading-skeleton";

export default function ProjectSkeleton() {
  return (
    <div className="project-skeleton-card">
      <Skeleton height={180} borderRadius={8} />

      <div className="mt-2">
        <Skeleton width={180} height={22} />
      </div>

      <div className="mt-2">
        <Skeleton width={120} height={18} />
      </div>

      <div className="mt-2">
        <Skeleton count={2} height={14} />
      </div>
    </div>
  );
}
