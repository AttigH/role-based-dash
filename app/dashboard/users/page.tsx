'use client';

import { useEffect, useState } from 'react';
import { Button, Select, TextInput } from '@mantine/core';
import UserModal from '@/components/Modal/UserModal';
import TableLayout from '@/components/Table/TableLayout';
import { useRole } from '@/context/RoleContext';
import IoAddIcon from '@/icons/IoAdd';
import IoDeleteIcon from '@/icons/IoDelete';
import { User } from '@/types/userTypes';
import { getUsers } from '@/utils/api';

const recordsPerPage = 5;

const UserTablePage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [filterCity, setFilterCity] = useState<string | null>(null);
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [modalOpened, setModalOpened] = useState(false);
  const { role } = useRole();
  const [userToEdit, setUserToEdit] = useState<User | null>(null); // New state for the user being edited

  const handleOpenModal = () => setModalOpened(true);
  const handleCloseModal = () => setModalOpened(false);
  const handleFormSubmit = (newUser: User) => {
    setUsers((prevUsers) => [{ ...newUser, id: prevUsers.length + 1 }, ...prevUsers]);
    handleCloseModal();
  };
  const handleDeleteSelected = () => {
    setUsers((prevUsers) => prevUsers.filter((user) => !selectedUsers.includes(user.id)));
    setSelectedUsers([]);
  };
  const handleDeleteUser = (id: number) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    setSelectedUsers((prev) => prev.filter((userId) => userId !== id));
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      (!search || user.name.includes(search) || user.email.includes(search)) &&
      (!filterCity || user.address.city === filterCity)
  );
  const handleEditUser = (user: User) => {
    setModalOpened(true);
    setUserToEdit(user); // Set the user to be edited
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">User management </h1>

      <div className="space-y-4">
        {/* Search, Filter, and Add New User Button  */}
        <div className="flex items-center gap-4 ">
          <TextInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by Name or Email"
            style={{ width: '250px' }}
          />
          <Select
            value={filterCity}
            onChange={setFilterCity}
            data={Array.from(new Set(users.map((user) => user.address?.city))).map((city) => ({
              label: city,
              value: city,
            }))}
            placeholder="Select City"
            style={{ width: '200px' }}
          />
          {role === 'admin' && (
            <Button
              type="button"
              onClick={handleOpenModal}
              rightSection={<IoAddIcon width={20} height={20} />}
            >
              Add New User
            </Button>
          )}
          {role === 'admin' && (
            <Button
              color="red"
              onClick={handleDeleteSelected}
              disabled={selectedUsers.length === 0}
              rightSection={<IoDeleteIcon width={20} height={20} />}
            >
              Delete Selected ({selectedUsers.length})
            </Button>
          )}
        </div>
        {/* Modal component */}
        <UserModal
          opened={modalOpened}
          onClose={handleCloseModal}
          onSubmit={handleFormSubmit}
          userToEdit={userToEdit} // Pass the selected user to the modal
        />
        <TableLayout
          data={filteredUsers}
          currentPage={currentPage}
          recordsPerPage={recordsPerPage}
          onPageChange={(page) => setCurrentPage(page)}
          onDeleteUser={handleDeleteUser}
          selectedUsers={selectedUsers}
          setSelectedUsers={setSelectedUsers}
          onEditUser={handleEditUser}
        />
      </div>
    </div>
  );
};

export default UserTablePage;
