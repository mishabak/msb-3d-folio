// Predefined configurations
const configurations = [
  [
      { id: 1, position: [0.16, 0.468, 0] },
      { id: 2, position: [0.32, 0.468, 0] },
      { id: 3, position: [0, 0.308, 0] },
      { id: 4, position: [0, 0.468, 0] },
      { id: 5, position: [0.32, 0.308, 0] },
      { id: 6, position: [0, 0.148, 0] },
      { id: 7, position: [0.16, 0.148, 0] },
      { id: 8, position: [0.16, 0.308, 0] }
  ],
  [
      { id: 1, position: [0, 0.468, 0] },
      { id: 2, position: [0, 0.148, 0] },
      { id: 3, position: [0.16, 0.148, 0] },
      { id: 4, position: [0.32, 0.468, 0] },
      { id: 5, position: [0, 0.308, 0] },
      { id: 6, position: [0.32, 0.308, 0] },
      { id: 7, position: [0.16, 0.468, 0] },
      { id: 8, position: [0.16, 0.308, 0] }
  ],
  [
      { id: 1, position: [0.32, 0.308, 0] },
      { id: 2, position: [0.16, 0.308, 0] },
      { id: 3, position: [0.16, 0.148, 0] },
      { id: 4, position: [0, 0.148, 0] },
      { id: 5, position: [0.32, 0.468, 0] },
      { id: 6, position: [0.16, 0.468, 0] },
      { id: 7, position: [0, 0.308, 0] },
      { id: 8, position: [0, 0.468, 0] }
  ]
];

// Function to select a random configuration
export const selectRandomConfiguration = () => {
  const randomIndex = Math.floor(Math.random() * configurations.length);
  return configurations[randomIndex];
};
