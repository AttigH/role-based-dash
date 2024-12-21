import TableLayout from '@/components/Table/TableLayout';

export default function UsersPage() {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-xl font-bold mb-4">User management </h1>
        <TableLayout />
      </div>
    </>
  );
}
