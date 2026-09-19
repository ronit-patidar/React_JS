# React: Updating Objects in State

## Creating a New Object

The reliable way to get the behavior you're looking for is to create a new object and pass it to `setPerson`. But here, you want to also copy the existing data into it, because only one of the fields has changed:

```jsx
setPerson({
  firstName: e.target.value, // New first name from the input
  lastName: person.lastName,
  email: person.email
});
```

## Using the Spread Syntax

You can use the `...` object spread syntax so that you don't need to copy every property separately.

```jsx
setPerson({
  ...person, // Copy the old fields
  firstName: e.target.value // But override this one
});
```

> **Note:** The `...` spread syntax is "shallow": it only copies things one level deep. This makes it fast, but it also means that if you want to update a nested property, you'll have to use it more than once.

## Dynamic Property Names

You can also use the `[` and `]` braces inside your object definition to specify a property with a dynamic name. This lets you use a single event handler instead of three different ones.

Here, `e.target.name` refers to the `name` property given to the `<input>` DOM element.

## Updating a Nested Object

Consider a nested object structure like this:

```jsx
const [person, setPerson] = useState({
  name: 'Niki de Saint Phalle',
  artwork: {
    title: 'Blue Nana',
    city: 'Hamburg',
    image: 'https://react.dev/images/docs/scientists/Sd1AgUOm.jpg',
  }
});
```

But in React, you treat state as **immutable**! In order to change `city`, you would first need to produce the new `artwork` object (pre-populated with data from the previous one), and then produce the new `person` object which points at the new `artwork`:

```jsx
const nextArtwork = { ...person.artwork, city: 'New Delhi' };
const nextPerson = { ...person, artwork: nextArtwork };
setPerson(nextPerson);
```

Or, written as a single function call:

```jsx
setPerson({
  ...person, // Copy other fields
  artwork: { // but replace the artwork
    ...person.artwork, // with the same one
    city: 'New Delhi' // but in New Delhi!
  }
});
```