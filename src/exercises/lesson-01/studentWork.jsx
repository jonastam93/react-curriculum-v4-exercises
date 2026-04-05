//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  const name = 'Jonathan';
  const age = 32;
  const hobbiesList = ['soccer', 'music', 'coding'];
  return (
    <div>
      {/* add JSX here */}
      <h1>About Me </h1>
      <p>
        Hi, my name is {name} and I am {age} years old. These are the things I
        enjoy doing in my spare time.
      </p>
      <ul>
        {hobbiesList.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
