import { StatusBadgeProps } from "../../types/issues";

/**
 * Component to display the status of an issue
 * Visually indicates whether an issue is open or resolved
 */
const StatusBadge = ({ status }: StatusBadgeProps) => {
  const isOpen = status === "open";

  // Style variants based on status
  const dotClassname = isOpen ? "bg-blue-600" : "bg-gray-400";
  const textClassname = isOpen ? "text-blue-700" : "text-gray-700";
  const statusText = isOpen ? "Open" : "Resolved";

  return (
    <div className="flex items-center gap-2">
      <span
        className={`inline-block w-[15px] h-[15px] rounded-full ${dotClassname}`}
      />
      <span className={`${textClassname} font-medium`}>{statusText}</span>
    </div>
  );
};

export default StatusBadge;
