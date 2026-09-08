# JSX and React Notes

## `class` is reserved — use `className`

`class` is a reserved word in JavaScript, so JSX uses `className` instead.

---

## JSX = JavaScript + HTML

React components use a syntax extension called **JSX**.

JSX looks a lot like HTML, but it is a bit stricter and can display dynamic information.

---

## Writing Markup with JSX

JSX and React are two separate things. They're often used together, but you can use them independently of each other. JSX is a syntax extension, while React is a JavaScript library.

React is a JavaScript library for building user interfaces, created and maintained by Meta (Facebook). It's the "V" in stacks like MERN — it handles the view/UI layer while other tools handle data, routing, etc.

### Core idea

**Component-based**
You build UIs by breaking them into small, reusable pieces called components — each one is basically a JavaScript function that returns some markup (JSX).

---

## Why do multiple JSX tags need to be wrapped?

JSX looks like HTML, but under the hood it is transformed into plain JavaScript objects. You can't return two objects from a function without wrapping them into an array. This explains why you also can't return two JSX tags without wrapping them into another tag or a Fragment.

---

## camelCase all most of the things!

JSX turns into JavaScript, and attributes written in JSX become keys of JavaScript objects. In your own components, you will often want to read those attributes into variables. But JavaScript has limitations on variable names — for example, their names can't contain dashes or be reserved words like `class`.

This is why, in React, many HTML and SVG attributes are written in camelCase. For example, instead of `stroke-width` you use `strokeWidth`. Since `class` is a reserved word, in React you write `className` instead, named after the corresponding DOM property.