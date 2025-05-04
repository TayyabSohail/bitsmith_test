"use client";

import { IssueRowProps } from "../../types/issues";
import Checkbox from "../ui/Checkbox";
import StatusBadge from "./StatusBadge";
import { isIssueSelectable } from "../../utils/selection";

/**
 * Component to render a single issue row in the table
 */
const IssueRow = ({ issue, isSelected, onToggleSelection }: IssueRowProps) => {
  const isOpen = isIssueSelectable(issue);

  /**
   * Handle checkbox change without triggering row click
   */
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    onToggleSelection(issue);
  };

  /**
   * Handle row click to toggle selection
   */
  const handleRowClick = () => {
    if (isOpen) {
      onToggleSelection(issue);
    }
  };

  return (
    <tr
      className={`
        border-b border-gray-200
        ${
          isOpen
            ? "cursor-pointer hover:bg-blue-50 text-black"
            : "text-gray-600 cursor-not-allowed"
        }
        ${isSelected ? "bg-blue-50" : ""}
      `}
      onClick={handleRowClick}
    >
      <td className="py-6 pl-6">
        <Checkbox
          checked={isSelected}
          onChange={handleCheckboxChange}
          disabled={!isOpen}
        />
      </td>
      <td className="py-6">{issue.name}</td>
      <td className="py-6">{issue.message}</td>
      <td className="py-6">
        <StatusBadge status={issue.status} />
      </td>
    </tr>
  );
};

export default IssueRow;
