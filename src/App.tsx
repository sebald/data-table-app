import { payments, columns } from "@/data/payments";
import { DataTable } from "@/components/ui/data-table";
import { MarigoldProvider } from "@marigold/components";
import theme from "@marigold/theme-b2b";

const App = () => {
  return (
    <MarigoldProvider theme={theme}>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={payments} />
      </div>
    </MarigoldProvider>
  );
};

export default App;
