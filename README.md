# clientStorage.js

A useful wrapper class around local/sessionStorage.

ClientStorage stores your data in an object, keeping the local/sessionStorage
synced with changes made through the API.

## Benefits

- [x] Same interface as local/sessionStorage
- [x] Accepts Objects, Arrays, Strings, Numbers and Booleans
- [x] Only updates local/sessionStorage when the data has changed
- [x] Each instance has it's own local/sessionStorage entry

## Methods

### `constructor(name [, options])`

The **constructor()** method of the ClientStorage interface, Sets the key name
and the storage type, either localStorage or sessionStorage, and loads the data
object if it exists in the storage.

```js
// localStorage
const client = new ClientStorage("app-state");

// sessionStorage
const client = new ClientStorage("app-state", { persist: false });
```

#### Parameters

`keyName` - A `DOMString` containing the name of the key you want to
create/update.

`options` _(optional)_ - An options `Object` specifies characteristics about
the ClientStorage. The available options are:

- `persist` - A `Boolean` indicating whether to persist the data between
  sessions. If false, ClientStorage uses sessionStorage, otherwise localStorage
  is used. Defaults to `true`.

#### Return

`undefined`

---

### `key()`

The **key()** method of the ClientStorage interface, returns the name of the key
given in the constructor.

```js
const key = client.key();
```

#### Return

A `DOMString` of the key that was defined in the `constructor`.

---

### `getItem(keyName)`

The **getItem()** method of the ClientStorage interface, when passed a key name,
will return that key's value, or null if the key does not exist, in the given
Storage object.

```js
const darkMode = client.getItem("darkMode");
```

#### Parameters

`keyName` - A `DOMString` containing the name of the key you want to retrieve
the value of.

#### Return

The value of the key. If the key does not exist, `null` is returned.

---

### `setItem(keyName, keyValue)`

The **setItem()** method of the ClientStorage interface, when passed a key name
and value, will add that key to the given Storage object, or update that key's
value if it already exists.

```js
client.setItem("darkMode", true);
```

#### Parameters

`keyName` - A `DOMString` containing the name of the key you want to
create/update.
`keyValue` - The value you want to give the key you are creating/updating.

#### Return

`undefined`

---

### `removeItem(keyName)`

The **removeItem()** method of the ClientStorage interface, when passed a key
name, will remove that key from the given Storage object if it exists. If
there is no item associated with the given key, this method will do nothing.

```js
client.removeItem("darkMode");
```

#### Parameters

`keyName` - A `DOMString` containing the name of the key you want to remove.

#### Return

`undefined`

---

### `clear()`

The **clear()** method of the ClientStorage interface clears the key stored in a
given Storage object.

```js
client.clear();
```

#### Return

`undefined`
