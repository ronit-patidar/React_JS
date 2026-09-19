avoid (mutates the array)	prefer (returns a new array)
adding	push, unshift	concat, [...arr] spread syntax (example)
removing	pop, shift, splice	filter, slice (example)
replacing	splice, arr[i] = ... assignment	map (example)
sorting	reverse, sort	copy the array first (example)

Unfortunately, slice and splice are named similarly but are very different:

slice lets you copy an array or a part of it.
splice mutates the array (to insert or delete items).
In React, you will be using slice (no p!) a lot more often because you don’t want to mutate objects or arrays in state. Updating Objects explains what mutation is and why it’s not recommended for state.

Instead, create a new array which contains the existing items and a new item at the end. There are multiple ways to do this, but the easiest one is to use the ... array spread syntax:

setArtists( // Replace the state
  [ // with a new array
    ...artists, // that contains all the old items
    { id: nextId++, name: name } // and one new item at the end
  ]
);

Removing from an array 
The easiest way to remove an item from an array is to filter it out. In other words, you will produce a new array that will not contain that item. To do this, use the filter method, for example: