export const getTutors = async (limit = 0) => {
  const res = await fetch(`http://localhost:8080/tutors?limit=${limit}`);

  return res.json();
};