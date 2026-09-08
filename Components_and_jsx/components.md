# React Components & Rendering

Reference: React — Your First Component
https://react.dev/learn/your-first-component

---

## 1. What is a Component?

React lets you create **components**, which are reusable UI elements for your application.

In a React app, **every piece of UI can be represented as a component**.

A component is a regular JavaScript function with two important characteristics:

1. Its name starts with a **capital letter**.
2. It returns **JSX markup**.

### Example

```jsx
function Title() {
  return <h1>Hello World!</h1>;
}
```

Here:

* `Title` → Component name
* `function Title()` → JavaScript function
* `<h1>Hello World!</h1>` → JSX returned by the component

---

# 2. Component Naming

React components should always start with a **capital letter**.

```jsx
function Title() {
  return <h1>Hello World!</h1>;
}
```

The capital letter helps React distinguish your component from normal HTML elements.

### HTML element

```jsx
<h1>Hello World!</h1>
```

### React component

```jsx
<Title />
```

React treats lowercase names as HTML/custom markup tags and capitalized names as React components.

### Correct

```jsx
function Header() {
  return <h1>My Website</h1>;
}
```

### Incorrect

```jsx
function header() {
  return <h1>My Website</h1>;
}
```

Prefer:

```jsx
<Header />
```

instead of:

```jsx
<header />
```

when you mean to render your own React component.

---

# 3. Rendering a Component

Once you create a component, you can render it inside another component using JSX.

For example:

```jsx
function Title() {
  return <h1>Hello World!</h1>;
}
```

You can render it using:

```jsx
<Title />
```

or:

```jsx
<Title></Title>
```

Both are valid.

### Self-closing syntax

```jsx
<Title />
```

### Opening and closing syntax

```jsx
<Title></Title>
```

For components that don't have children, the self-closing version is commonly preferred.

---

# 4. Example

```jsx
function Title() {
  return <h1>Hello World!</h1>;
}

function App() {
  return (
    <div>
      <Title />
    </div>
  );
}
```

Here:

```text
App
 └── Title
      └── <h1>Hello World!</h1>
```

`App` renders the `Title` component.

---

# 5. Can a Component Return Multiple Elements?

A React component must return **one JSX root**.

For example, this is **not valid**:

```jsx
function App() {
  return (
    <h1>Hello</h1>
    <p>Welcome!</p>
  );
}
```

There are two sibling elements without a common root.

---

## 6. Using a `<div>` Container

You can wrap multiple elements inside a `<div>`:

```jsx
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <p>Welcome!</p>
    </div>
  );
}
```

Now the component has one root element:

```text
<div>
 ├── <h1>
 └── <p>
```

---

# 7. Using React Fragments

You don't always need a `<div>`.

You can use a **Fragment**:

```jsx
function App() {
  return (
    <>
      <h1>Hello</h1>
      <p>Welcome!</p>
    </>
  );
}
```

`<>...</>` is called a **Fragment**.

It lets you group multiple JSX elements without adding an extra HTML element to the DOM.

---

# 8. Important Points

### Components are reusable

You can use the same component multiple times:

```jsx
function Title() {
  return <h1>Hello World!</h1>;
}

function App() {
  return (
    <>
      <Title />
      <Title />
      <Title />
    </>
  );
}
```

This renders the `Title` component three times.

---

### Component names start with capital letters

```jsx
function Title() {
  return <h1>Hello</h1>;
}
```

Use:

```jsx
<Title />
```

---

### Components return JSX

```jsx
function Welcome() {
  return <h1>Welcome to React!</h1>;
}
```

---

### Components need one root JSX element

Use a container:

```jsx
<div>
  <h1>Hello</h1>
  <p>React</p>
</div>
```

or a Fragment:

```jsx
<>
  <h1>Hello</h1>
  <p>React</p>
</>
```

---

# 9. Component vs HTML Element

| React Component | HTML Element |
| --------------- | ------------ |
| `Title`         | `h1`         |
| `Header`        | `header`     |
| `Button`        | `button`     |
| `Profile`       | `div`        |
| `Navbar`        | `nav`        |

Example:

```jsx
<Title />
```

is a React component.

```jsx
<h1>Hello</h1>
```

is an HTML element.

---

# 10. Complete Example

```jsx
function Header() {
  return <h1>My Website</h1>;
}

function Content() {
  return <p>Welcome to my website!</p>;
}

function App() {
  return (
    <>
      <Header />
      <Content />
    </>
  );
}
```

### Component hierarchy

```text
App
 ├── Header
 │    └── <h1>
 │
 └── Content
      └── <p>
```

---

# Quick Revision

> **React component = JavaScript function + JSX**

Remember:

```jsx
function ComponentName() {
  return <div>Hello</div>;
}
```

Render it:

```jsx
<ComponentName />
```

### Key Rules

* ✅ Component names start with a **capital letter**.
* ✅ Components return **JSX**.
* ✅ Components can be **reused**.
* ✅ Use `<Component />` or `<Component></Component>` to render a component.
* ✅ A component needs a **single root JSX element**.
* ✅ Use `<div>` or `<>...</>` to group multiple elements.
* ✅ `<>...</>` is a **React Fragment**.
