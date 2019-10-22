import React, { useState, useEffect } from 'react';
import UsersForm from '../../../users_form/users_form';

const UsersFormContainer = props => {
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentUsers, setCurrentUsers] = useState([]);

  useEffect(() => {
    if (currentPage === 1 && currentUsers.length != 0) return;

    const totalPage = Math.ceil(props.users.length / pageSize);

    if (currentPage <= totalPage) {
      const startNumber = (currentPage - 1) * pageSize;
      let endNumber = currentPage * pageSize;
      const maxNumber = props.users.length;

      if (endNumber > maxNumber) {
        endNumber = maxNumber;
      }

      setCurrentUsers([...currentUsers, ...props.users.slice(startNumber, endNumber)]);
    }
  }, [currentPage, props.users]);

  return (
    <UsersForm
      users={currentUsers}
      pageSize={pageSize}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      follow={props.follow}
      unfollow={props.unfollow}
      isFollowing
    />
  );
};

export default UsersFormContainer;
