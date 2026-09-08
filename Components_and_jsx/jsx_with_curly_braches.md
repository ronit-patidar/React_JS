# JSX: Curly Braces and Passing Values

## Passing strings with quotes

When you want to pass a string attribute to JSX, you put it in single or double quotes:

```jsx
export default function Avatar() {
  return (
    <img
      className="avatar"
      src="https://react.dev/images/docs/scientists/7vQD0fPs.jpg"
      alt="Gregorio Y. Zara"
    />
  );
}
```

Here, `"https://react.dev/images/docs/scientists/7vQD0fPs.jpg"` and `"Gregorio Y. Zara"` are being passed as strings.

But what if you want to dynamically specify the `src` or `alt` text? You could use a value from JavaScript by replacing `"` and `"` with `{` and `}`:

```jsx
export default function Avatar() {
  const avatar = 'https://react.dev/images/docs/scientists/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  return (
    <img
      className="avatar"
      src={avatar}
      alt={description}
    />
  );
}
```

Notice the difference between `className="avatar"`, which specifies an "avatar" CSS class name that makes the image round, and `src={avatar}` that reads the value of the JavaScript variable called `avatar`. That's because curly braces let you work with JavaScript right there in your markup!

---

## How to call a JavaScript function inside JSX with curly braces

```jsx
const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

export default function TodoList() {
  return (
    <h1>To Do List for {formatDate(today)}</h1>
  );
}
```

---

## Where to use curly braces

You can only use curly braces in two ways inside JSX:

1. **As text directly inside a JSX tag:**
   `<h1>{name}'s To Do List</h1>` works, but `<{tag}>Gregorio Y. Zara's To Do List</{tag}>` will not.

2. **As attributes immediately following the `=` sign:**
   `src={avatar}` will read the `avatar` variable, but `src="{avatar}"` will pass the string `"{avatar}"`.

---

## Using "double curlies": CSS and other objects in JSX

In addition to strings, numbers, and other JavaScript expressions, you can even pass objects in JSX. Objects are also denoted with curly braces, like `{ name: "Hedy Lamarr", inventions: 5 }`. Therefore, to pass a JS object in JSX, you must wrap the object in another pair of curly braces: `person={{ name: "Hedy Lamarr", inventions: 5 }}`.

You may see this with inline CSS styles in JSX. React does not require you to use inline styles (CSS classes work great for most cases). But when you need an inline style, you pass an object to the `style` attribute:

```jsx
export default function TodoList() {
  return (
    <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}
```

Inline style properties are written in camelCase. For example, HTML `<ul style="background-color: black">` would be written as `<ul style={{ backgroundColor: 'black' }}>` in your component.

---

## Recap

Now you know almost everything about JSX:

- JSX attributes inside quotes are passed as strings.
- Curly braces let you bring JavaScript logic and variables into your markup.
- They work inside the JSX tag content or immediately after `=` in attributes.
- `{{` and `}}` is not special syntax: it's a JavaScript object tucked inside JSX curly braces.