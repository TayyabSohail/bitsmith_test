import { useState, useMemo, useCallback } from "react";
import { Issue } from "../types/issues";
import { calculateTotalValue } from "../utils/selection";

/**
 * Custom hook to manage selection state for issues
 * Handles all selection-related logic to keep components clean
 */
export function useSelection(issues: Issue[]) {
  // Track selected issues by ID
  const [selectedIssues, setSelectedIssues] = useState<Record<string, boolean>>(
    {}
  );

  // Get open issues count for select all logic
  const openIssues = useMemo(() => {
    return issues.filter((issue) => issue.status === "open");
  }, [issues]);

  const openIssuesCount = openIssues.length;

  // Count of selected issues
  const selectedIssuesCount = useMemo(() => {
    return Object.keys(selectedIssues).filter((id) => selectedIssues[id])
      .length;
  }, [selectedIssues]);

  // Calculate total value of selected items
  const totalSelectedValue = useMemo(() => {
    return calculateTotalValue(issues, selectedIssues);
  }, [issues, selectedIssues]);

  // Determine if an issue is selected
  const isIssueSelected = useCallback(
    (issueId: string) => {
      return !!selectedIssues[issueId];
    },
    [selectedIssues]
  );

  // Toggle selection for a single issue
  const toggleIssueSelection = useCallback((issue: Issue) => {
    if (issue.status !== "open") return;

    setSelectedIssues((prev) => ({
      ...prev,
      [issue.id]: !prev[issue.id],
    }));
  }, []);

  // Handle select/deselect all
  const toggleSelectAll = useCallback(() => {
    const allSelected = selectedIssuesCount === openIssuesCount;
    const newSelections: Record<string, boolean> = {};

    if (allSelected) {
      // If all are selected, deselect all
      setSelectedIssues({});
    } else {
      // Otherwise select all open issues
      openIssues.forEach((issue) => {
        newSelections[issue.id] = true;
      });
      setSelectedIssues(newSelections);
    }
  }, [selectedIssuesCount, openIssuesCount, openIssues]);

  // SelectAll checkbox states
  const selectAllState = useMemo(() => {
    const checked =
      selectedIssuesCount > 0 && selectedIssuesCount === openIssuesCount;
    const indeterminate =
      selectedIssuesCount > 0 && selectedIssuesCount < openIssuesCount;

    return { checked, indeterminate };
  }, [selectedIssuesCount, openIssuesCount]);

  return {
    selectedIssues,
    selectedIssuesCount,
    totalSelectedValue,
    openIssuesCount,
    isIssueSelected,
    toggleIssueSelection,
    toggleSelectAll,
    selectAllChecked: selectAllState.checked,
    selectAllIndeterminate: selectAllState.indeterminate,
  };
}
