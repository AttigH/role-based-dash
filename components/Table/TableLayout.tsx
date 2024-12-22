'use client';

import React from 'react';
import { Table } from '@mantine/core';
import Pagination from '@/components/Pagination/Pagination';
import { useRole } from '@/context/RoleContext';
import IoDeleteIcon from '@/icons/IoDelete';
import IoEditIcon from '@/icons/IoEdit';
import { User } from '@/types/userTypes';

type TableLayoutProps = {
  data: User[];
  currentPage: number;
  recordsPerPage: number;
  onPageChange: (page: number) => void;
  onDeleteUser: (id: number) => void;
  onEditUser: (user: User) => void;
  selectedUsers: number[];
  setSelectedUsers: React.Dispatch<React.SetStateAction<number[]>>;
};

const TableLayout: React.FC<TableLayoutProps> = ({
  data,
  currentPage,
  recordsPerPage,
  onPageChange,
  onDeleteUser,
  selectedUsers,
  setSelectedUsers,
  onEditUser,
}) => {
  const startIndex = (currentPage - 1) * recordsPerPage;
  const paginatedUsers = data.slice(startIndex, startIndex + recordsPerPage);
  const totalPages = Math.ceil(data.length / recordsPerPage);

  const isAllSelected = paginatedUsers.every((user) => selectedUsers.includes(user.id));
  const isSomeSelected = paginatedUsers.some((user) => selectedUsers.includes(user.id));
  const { role } = useRole();

  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedUsers((prev) =>
        prev.filter((id) => !paginatedUsers.some((user) => user.id === id))
      );
    } else {
      setSelectedUsers((prev) => [...new Set([...prev, ...paginatedUsers.map((user) => user.id)])]);
    }
  };

  const handleRowSelection = (id: number) => {
    setSelectedUsers((prev) =>
      prev.includes(id) ? prev.filter((userId) => userId !== id) : [...prev, id]
    );
  };

  return (
    <>
      {/* Table */}
      <Table.ScrollContainer minWidth={500}>
        <Table striped highlightOnHover withTableBorder>
          <Table.Thead className="h-9">
            <Table.Tr>
              {/* Conditionally render the checkbox column only for admin */}
              {role === 'admin' && (
                <Table.Th>
                  <input
                    type="checkbox"
                    checked={isAllSelected}
                    ref={(el) => {
                      if (el) {
                        el.indeterminate = isSomeSelected;
                      }
                    }}
                    onChange={handleSelectAll}
                  />
                </Table.Th>
              )}
              <Table.Th className="w-1/4 md:w-1/6">Name</Table.Th>
              <Table.Th className="w-1/4 md:w-1/6">Email</Table.Th>
              <Table.Th className="w-1/4 md:w-1/6">Company</Table.Th>
              <Table.Th className="w-1/4 md:w-1/6">Website</Table.Th>
              <Table.Th className="w-1/4 md:w-1/6">City</Table.Th>
              {/* Conditionally render the Actions column only for admin */}
              {role === 'admin' && <Table.Th className="w-1/4 md:w-1/6">Actions</Table.Th>}
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody className="h-[230px]">
            {data.length === 0 ? (
              <Table.Tr>
                <Table.Td
                  colSpan={role === 'admin' ? 8 : 7}
                  className="text-center text-gray-500 py-10"
                >
                  No records found
                </Table.Td>
              </Table.Tr>
            ) : (
              <>
                {paginatedUsers.map((user) => (
                  <Table.Tr
                    key={user.id}
                    className="cursor-pointer text-ellipsis"
                    onClick={() => handleRowSelection(user.id)}
                  >
                    {/* Conditionally render the checkbox column only for admin */}
                    {role === 'admin' && (
                      <Table.Td>
                        <input
                          type="checkbox"
                          checked={selectedUsers.includes(user.id)}
                          onClick={(e) => e.stopPropagation()}
                          onChange={() => handleRowSelection(user.id)}
                        />
                      </Table.Td>
                    )}
                    <Table.Td>{user.name}</Table.Td>
                    <Table.Td>{user.email}</Table.Td>
                    <Table.Td>{user.company.name}</Table.Td>
                    <Table.Td>{user.website}</Table.Td>
                    <Table.Td>{user.address.city}</Table.Td>
                    {/* Conditionally render the Actions column only for admin */}
                    {role === 'admin' && (
                      <Table.Td>
                        <div className="flex items-center gap-2 ">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onDeleteUser(user.id);
                            }}
                          >
                            <IoDeleteIcon width={30} height={30} color="red" />
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onEditUser(user);
                            }}
                          >
                            <IoEditIcon width={25} height={25} color="gray" />
                          </button>
                        </div>
                      </Table.Td>
                    )}
                  </Table.Tr>
                ))}

                {/* Add empty rows if the number of paginated users is less than the recordsPerPage */}
                {data.length > 0 &&
                  paginatedUsers.length < recordsPerPage &&
                  Array.from({ length: recordsPerPage - paginatedUsers.length }).map((_, index) => (
                    <Table.Tr key={`empty-row-${index}`} className="h-12">
                      <Table.Td colSpan={role === 'admin' ? 8 : 7}>&nbsp;</Table.Td>
                    </Table.Tr>
                  ))}
              </>
            )}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>

      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        hasData={data.length > 0}
      />
    </>
  );
};

export default TableLayout;
