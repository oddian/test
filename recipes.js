const recipes = [
  { type: 'Whiskey', name: 'Defective Jean', icon: '🥃' },
  { type: 'Whiskey', name: "Rebecca's Revengs", icon: '🥃' },
  { type: 'Mead', name: 'Wulfhel', icon: '🍯' }
];

if (typeof window !== 'undefined') {
  window.recipes = recipes;
}

// Export for Node.js environments so tests can require this file
if (typeof module !== 'undefined') {
  module.exports = recipes;
}
