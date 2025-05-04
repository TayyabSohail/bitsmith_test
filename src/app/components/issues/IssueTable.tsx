"use client";

import { IssueTableProps } from "../../types/issues";
import TableHeader from "./TableHeader";
import IssueRow from "./IssueRow";
import { useSelection } from "@/app/hooks/useSelection";

/**
 * Main component that displays the issue table
 * Manages selection state and composition of table elements
 */
const IssueTable = ({ issues }: IssueTableProps) => {
  const {
    isIssueSelected,
    toggleIssueSelection,
    toggleSelectAll,
    totalSelectedValue,
    openIssuesCount,
    selectedIssuesCount,
    selectAllChecked,
    selectAllIndeterminate,
  } = useSelection(issues);

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200">
      <table className="w-full border-collapse">
        <TableHeader
          selectedCount={selectedIssuesCount}
          totalValue={totalSelectedValue}
          openIssuesCount={openIssuesCount}
          selectedIssuesCount={selectedIssuesCount}
          onSelectAll={toggleSelectAll}
          selectAllChecked={selectAllChecked}
          selectAllIndeterminate={selectAllIndeterminate}
        />
        <tbody>
          {issues.map((issue) => (
            <IssueRow
              key={issue.id}
              issue={issue}
              isSelected={isIssueSelected(issue.id)}
              onToggleSelection={toggleIssueSelection}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IssueTable;
