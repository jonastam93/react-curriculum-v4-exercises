export default function SnackList() {
  // array from least favorite to most favorite
  const snacks = [
    { name: 'Popcorn', rank: 5 },
    { name: 'Candy', rank: 4 },
    { name: 'Cookies', rank: 3 },
    { name: 'Ice Cream', rank: 2 },
    { name: 'Chips', rank: 1 },
  ];

  // sort from most favorite (rank 1) to least favorite
  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <div>
      <h2>My Favorite Snacks</h2>
      <ol>
        {sortedSnacks.map((snack, index) => (
          <li key={index}>
            {snack.name} (Rank: {snack.rank})
          </li>
        ))}
      </ol>
    </div>
  );
}
