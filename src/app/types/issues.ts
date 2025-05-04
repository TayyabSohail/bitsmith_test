/**
 * Represents an issue in the system
 */
export type Issue = {
  id: string;
  name: string;
  message: string;
  status: "open" | "resolved";
  numEvents: number;
  numUsers: number;
  value: number;
};

/**
 * Props for the IssueTable component
 */
export type IssueTableProps = {
  issues: Issue[];
};

/**
 * Props for the IssueRow component
 */
export type IssueRowProps = {
  issue: Issue;
  isSelected: boolean;
  onToggleSelection: (issue: Issue) => void;
};

/**
 * Props for the StatusBadge component
 */
export type StatusBadgeProps = {
  status: Issue["status"];
};

/**
 * Props for the TableHeader component
 */
export type TableHeaderProps = {
  selectedCount: number;
  totalValue: number;
  openIssuesCount: number;
  selectedIssuesCount: number;
  onSelectAll: () => void;
  selectAllChecked: boolean;
  selectAllIndeterminate: boolean;
};

/**
 * Props for the custom Checkbox component
 */
export type CheckboxProps = {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  indeterminate?: boolean;
  className?: string;
  id?: string;
};
