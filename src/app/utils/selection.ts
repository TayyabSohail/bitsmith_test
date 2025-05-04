import { Issue } from "../types/issues";

/**
 * Calculate the total value of selected issues
 */
export function calculateTotalValue(
  issues: Issue[],
  selectedIssues: Record<string, boolean>
): number {
  return issues.reduce((sum, issue) => {
    if (selectedIssues[issue.id]) {
      return sum + issue.value;
    }
    return sum;
  }, 0);
}

/**
 * Check if an issue is selectable (open status)
 */
export function isIssueSelectable(issue: Issue): boolean {
  return issue.status === "open";
}
