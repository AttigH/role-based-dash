'use client';

import React, { useState } from 'react';
import { Button, Select, Table, TextInput } from '@mantine/core';
import Pagination from '@/components/Pagination/Pagination';
import { User, usersData } from '@/utils/users';

const recordsPerPage = 10;

const UserTable = () => {
  const [users, setUsers] = useState<User[]>(usersData);
  const [search, setSearch] = useState('');
  const [filterCity, setFilterCity] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

  // Handle search
  const filteredUsers = users.filter((user) => {
    const searchTerm = search.toLowerCase();
    return (
      user.name.toLowerCase().includes(searchTerm) || user.email.toLowerCase().includes(searchTerm)
    );
  });

  // Handle city filter
  const cityFilteredUsers = filterCity
    ? filteredUsers.filter((user) => user.city === filterCity)
    : filteredUsers;

  // Pagination logic
  const startIndex = (currentPage - 1) * recordsPerPage;
  const paginatedUsers = cityFilteredUsers.slice(startIndex, startIndex + recordsPerPage);

  // Calculate the total number of pages
  const totalPages = Math.ceil(cityFilteredUsers.length / recordsPerPage);

  // Handle deleting selected users
  const handleDeleteSelected = () => {
    setUsers((prev) => prev.filter((user) => !selectedUsers.includes(user.id)));
    setSelectedUsers([]);
  };

  // Handle selecting/deselecting all users
  const handleSelectAll = () => {
    if (selectedUsers.length === paginatedUsers.length) {
      setSelectedUsers([]);
    } else {
      const currentPageIds = paginatedUsers.map((user) => user.id);
      setSelectedUsers(currentPageIds);
    }
  };

  // Check if all or some rows are selected
  const isAllSelected = paginatedUsers.length > 0 && selectedUsers.length === paginatedUsers.length;
  const isSomeSelected = selectedUsers.length > 0 && selectedUsers.length < paginatedUsers.length;

  // Handle individual row selection
  const handleRowSelection = (id: number) => {
    setSelectedUsers((prev) =>
      prev.includes(id) ? prev.filter((userId) => userId !== id) : [...prev, id]
    );
  };
  // Handle individual row deletion
  const handleRowDelete = (id: number) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
    setSelectedUsers((prev) => prev.filter((userId) => userId !== id)); // Remove from selected users if it's the last one selected
  };
  return (
    <div className="space-y-4">
      {/* Search, Filter, and Add New User Button in Inline Layout */}
      <div className="flex items-center gap-4">
        <TextInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by Name or Email"
          style={{ width: '250px' }}
        />
        <Select
          value={filterCity}
          onChange={setFilterCity}
          data={Array.from(new Set(users.map((user) => user.city))).map((city) => ({
            label: city,
            value: city,
          }))}
          placeholder="Select City"
          style={{ width: '200px' }}
        />
        <Button>Add New User</Button>
        <Button color="red" onClick={handleDeleteSelected} disabled={selectedUsers.length === 0}>
          Delete Selected ({selectedUsers.length})
        </Button>
      </div>

      {/* Table */}
      <Table.ScrollContainer minWidth={500}>
        <Table striped highlightOnHover withTableBorder>
          <Table.Thead className="h-14">
            <Table.Tr>
              <Table.Th>
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  ref={(el) => {
                    if (el) {
                      el.indeterminate = isSomeSelected; // Correct usage of the indeterminate property
                    }
                  }}
                  onChange={handleSelectAll}
                />
              </Table.Th>
              <Table.Th className="w-1/4 md:w-1/6">Name</Table.Th>
              <Table.Th className="w-1/4 md:w-1/6">Email</Table.Th>
              <Table.Th className="w-1/4 md:w-1/6">Company</Table.Th>
              <Table.Th className="w-1/4 md:w-1/6">Website</Table.Th>
              <Table.Th className="w-1/4 md:w-1/6">City</Table.Th>
              <Table.Th className="w-1/4 md:w-1/6">Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody className="h-[500px]">
            {cityFilteredUsers.length === 0 ? (
              <Table.Tr>
                <Table.Td colSpan={7} className="text-center text-gray-500 py-10">
                  No records found
                </Table.Td>
              </Table.Tr>
            ) : (
              <>
                {paginatedUsers.map((user) => (
                  <Table.Tr
                    key={user.id}
                    className="h-12 cursor-pointer"
                    onClick={() => handleRowSelection(user.id)}
                  >
                    <Table.Td>
                      <input
                        type="checkbox"
                        checked={selectedUsers.includes(user.id)}
                        onClick={(e) => e.stopPropagation()}
                        onChange={() => handleRowSelection(user.id)}
                      />
                    </Table.Td>
                    <Table.Td>{user.name}</Table.Td>
                    <Table.Td>{user.email}</Table.Td>
                    <Table.Td>{user.companyName}</Table.Td>
                    <Table.Td>{user.website}</Table.Td>
                    <Table.Td>{user.city}</Table.Td>
                    <Table.Td>
                      <Button
                        color="red"
                        size="xs"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent row click from triggering checkbox selection
                          handleRowDelete(user.id);
                        }}
                      >
                        Delete
                      </Button>
                    </Table.Td>
                  </Table.Tr>
                ))}
                {/* Add empty rows if the number of paginated users is less than the recordsPerPage */}

                {cityFilteredUsers.length > 0 &&
                  paginatedUsers.length < recordsPerPage &&
                  Array.from({ length: recordsPerPage - paginatedUsers.length }).map((_, index) => (
                    <Table.Tr key={`empty-row-${index}`} className="h-12">
                      <Table.Td colSpan={7}>&nbsp;</Table.Td>
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
        onPageChange={(page) => setCurrentPage(page)}
        hasData={cityFilteredUsers.length > 0}
      />
    </div>
  );
};

export default UserTable;
