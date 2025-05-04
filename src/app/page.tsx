// import Table, { Issue } from "./components/table";
// import issuesData from "./constants/issues.json";

// export default function Home() {
//   const issues: Issue[] = issuesData as Issue[];
//   return <Table issues={issues} />;
// }
import IssueTable from "./components/issues/IssueTable";
import issuesData from "./data/issues.json";
import { Issue } from "./types/issues";

/**
 * Home page component that displays the issue tracker
 */
export default function Home() {
  const issues: Issue[] = issuesData as Issue[];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Issue Tracker</h1>
      <IssueTable issues={issues} />
    </div>
  );
}
