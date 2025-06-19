# Simple PWA

This project contains a minimal Progressive Web App with a single welcome page.

## Running

Serve the files from a local web server. One option is to use Python:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser that supports PWAs.

## Usage

- Click **Add Recipe** to open a form for entering a new recipe.
- Fill in the name and type fields and click **Save** to store it in IndexedDB.
- Use the trash can icon next to a recipe to delete it from the list and IndexedDB.


## Testing

Run `npm install` to install development dependencies, then execute:

```bash
npm test
```

This runs the Jest test suite using a fake IndexedDB implementation.
