import Checkbox from "../../components/ui/Checkbox";
import { TableHeaderProps } from "../../types/issues";

/**
 * Header component for the issues table
 * Includes the select all checkbox and selection count
 */
const TableHeader = ({
  totalValue,
  onSelectAll,
  selectAllChecked,
  selectAllIndeterminate,
}: TableHeaderProps) => {
  return (
    <thead>
      <tr className="border-2 border-gray-200">
        <th className="py-6 pl-6 text-left w-[48px]">
          <Checkbox
            checked={selectAllChecked}
            indeterminate={selectAllIndeterminate}
            onChange={onSelectAll}
            id="select-all-checkbox"
          />
        </th>
        <th className="py-6 min-w-[8rem] text-left text-black">
          {totalValue > 0 ? `Selected ${totalValue}` : "None selected"}
        </th>
        <th colSpan={2} />
      </tr>
      <tr className="border-2 border-gray-200">
        <th className="py-6 pl-6" />
        <th className="py-6 text-left font-medium text-black">Name</th>
        <th className="py-6 text-left font-medium text-black">Message</th>
        <th className="py-6 text-left font-medium text-black">Status</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
