# clientStorage.js

A useful wrapper class around local/sessionStorage.

ClientStorage stores your data in an object, keeping the local/sessionStorage
synced with changes made through the API.

## Benefits

- [x] Same interface as local/sessionStorage
- [x] Accepts Objects, Arrays, Strings and Numbers
- [x] Only updates local/sessionStorage when the data has changed
- [x] Each instance has it's own local/sessionStorage entry

## Installation

```js
import ClientStorage from "../clientStorage.js";

const client = new ClientStorage("app-state", { persist: true });
```

## Methods

### `key()`

The **key()** method of the ClientStorage interface, returns the name of the key
given in the constructor.

```js
const key = client.key();
```

### `getItem(key)`

The **getItem()** method of the ClientStorage interface, when passed a key name,
will return that key's value, or null if the key does not exist, in the given
Storage object.

```js
const darkMode = client.getItem("darkMode");
```

### `setItem(key, value)`

The **setItem()** method of the ClientStorage interface, when passed a key name
and value, will add that key to the given Storage object, or update that key's
value if it already exists.

```js
client.setItem("darkMode", true);
```

### `removeItem(key)`

The **removeItem()** method of the ClientStorage interface, when passed a key
name, will remove that key from the given Storage object if it exists. If
there is no item associated with the given key, this method will do nothing.

```js
client.removeItem("darkMode");
```

### `clear()`

The **clear()** method of the ClientStorage interface clears the key stored in a
given Storage object.

```js
client.clear();
```
