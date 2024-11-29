type TableProps = {
  title: string;
  children: React.ReactNode;
};

function TableWrapper({ title, children }: TableProps) {
  return (
    <div className="px-6 my-8 max-h-[80vh] overflow-y-auto rounded-lg shadow-md border bg-primary-foreground dark:bg-secondary">
      <div className="px-10 py-5 sticky top-0 z-10">
        <h2 className="text-2xl text-center font-bold tracking-tight capitalize">
          {title}
        </h2>
      </div>
      <div className="relative overflow-x-auto">{children}</div>
    </div>
  );
}

export default TableWrapper;
