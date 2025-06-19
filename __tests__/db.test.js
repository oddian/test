const { openDB, getRecipes, addRecipe, deleteRecipe } = require('../db');
const FDBFactory = require('fake-indexeddb/lib/FDBFactory');

describe('db helpers', () => {
  beforeEach(() => {
    // reset the IndexedDB implementation for isolation
    global.indexedDB = new FDBFactory();
  });

  test('addRecipe and getRecipes', async () => {
    await addRecipe({ name: 'Test', type: 'Type' });
    const recipes = await getRecipes();
    expect(recipes.length).toBe(1);
    expect(recipes[0].name).toBe('Test');
  });

  test('deleteRecipe removes an item', async () => {
    await addRecipe({ name: 'ToDelete', type: 'Type' });
    const recipes = await getRecipes();
    const id = recipes[0].id;
    await deleteRecipe(id);
    const remaining = await getRecipes();
    expect(remaining.length).toBe(0);
  });
});
