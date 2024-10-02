import React, { useState, useEffect } from 'react';

interface UserProfileProps {
  userId: number;
}

const UserProfile: React.FC<UserProfileProps> = ({ userId }) => {
  const [userData, setUserData] = useState<null | any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserData(userId);
  }, [userId]);

  // Intentionally missing 'async' keyword, and should use 'await'
  const fetchUserData = (userId: string) => {
    setLoading(true);
    fetch(`https://api.example.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => {
        console.error('Error fetching user data:', error);
      })
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!userData) {
    return <p>User not found!</p>;
  }

  // Intentionally incorrect prop usage (userData.name might not exist)
  return (
    <div>
      <h1>{userData?.name}</h1>
      <p>Email: {userData.email}</p>
    </div>
  );
};

// Wrong export type
export default UserProfile as number;
