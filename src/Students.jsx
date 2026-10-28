
function Students() {
  const students = [
    {
      id: 1,
      name: "Iragena ",
      trade: "Software Development"
    },
    {
      id: 2,
      name: "irakoze",
      trade: "Software Development"
    },
    {
      id: 3,
      name: "luna",
      trade: "Software Development"
    },
    {
      id: 4,
      name: "moon",
      trade: "Software Development"
    },
    {
      id: 5,
      name: "kevine",
      trade: "Software Development"
    }
  ];

  return (
    <div>
      <h1>Our Students</h1>

      {students.map((student) => (
        <div key={student.id}>
          <h3>Student ID: {student.id}</h3>

          <p>Name: {student.name}</p>

          <p>Trade: {student.trade}</p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Students;
