# Default Export vs Named Export in React JS

## 1. Default Export

- Each file can have **only one** default export.
- You can import it using **any name** you like (no curly braces).
- Good for exporting the "main" thing a file provides — like a single component.

**Exporting:**
```js
// Button.js
function Button() {
  return <button>Click me</button>;
}

export default Button;
```

**Importing:**
```js
import Button from './Button';
// import MyButton from './Button'; // also works — name doesn't need to match
```

---

## 2. Named Export

- A file can have **multiple** named exports.
- You must import them using the **exact same name**, wrapped in curly braces `{ }`.
- Good for exporting multiple utilities, constants, or components from one file.

**Exporting:**
```js
// utils.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export const PI = 3.14;
```

**Importing:**
```js
import { add, subtract, PI } from './utils';
```

You can also rename a named import using `as`:
```js
import { add as sum } from './utils';
```

---

## 3. Mixing Both in One File

```js
// MathUtils.js
export const square = (x) => x * x;
export const cube = (x) => x * x * x;

export default function MathUtils() {
  // main component or main function
}
```

```js
import MathUtils, { square, cube } from './MathUtils';
```

---

## 4. Key Differences Table

| Feature | Default Export | Named Export |
|---|---|---|
| Number per file | Only 1 | Multiple allowed |
| Import syntax | `import X from './file'` | `import { X } from './file'` |
| Import name | Can be renamed freely | Must match exactly (or use `as`) |
| Common use case | Main component of a file | Utility functions, constants, multiple components |

---

## 5. Which One Should You Use in React?

- **Default export** — commonly used for React components, since each component file usually exports one main component.
  ```js
  export default function App() { ... }
  ```
- **Named export** — commonly used for exporting multiple hooks, helper functions, or context values from a single utility file.
  ```js
  export const useAuth = () => { ... };
  export const useTheme = () => { ... };
  ```

Many real-world codebases use **named exports for everything** (including components) because it makes refactoring and auto-imports more predictable — editors can autocomplete named exports accurately, but default exports can be imported under inconsistent names across a project.