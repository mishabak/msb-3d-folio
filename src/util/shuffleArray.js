function countInversions(arr) {
  let inversions = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].name > arr[j].name) {
        inversions++;
      }
    }
  }
  return inversions;
}

function isSolvable(pieces) {
  const inversions = countInversions(pieces);
  return inversions % 2 === 0;
}

export const shuffleArray = (pieces) => {
  const tiles = [...pieces];

  for (let i = tiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
  }

  if (!isSolvable(tiles)) {
    [tiles[0], tiles[1]] = [tiles[1], tiles[0]];
  }

  return tiles;
};
