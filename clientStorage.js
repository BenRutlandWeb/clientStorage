/**
 * A useful wrapper class around local/sessionStorage.
 *
 * ClientStorage stores your data in an object, keeping the local/sessionStorage
 * synced with changes made through the API.
 */
export default class ClientStorage {
  /**
   * Sets the key name and the storage type, either localStorage or
   * sessionStorage, and loads the data object if it exists in the storage.
   *
   * @param {string} keyName The name of the key you want to create/update.
   * @param {object} options Specifies characteristics about the ClientStorage.
   *
   * @return {undefined}
   */
  constructor(keyName, options = { persist: true }) {
    this.keyName = keyName;
    this.func = options.persist ? "localStorage" : "sessionStorage";
    this.data = this._load();
  }

  /**
   * Returns the name of the key given in the constructor.
   *
   * @return {string} The key that was defined in the constructor.
   */
  key() {
    return this.keyName;
  }

  /**
   * When passed a key name, will return that key's value, or null if the key
   * does not exist, in the given Storage object.
   *
   * @param {string} keyName The name of the key you want to retrieve the value
   *                         of.
   *
   * @return {mixed}         The value of the key. If the key does not exist,
   *                         null is returned.
   */
  getItem(keyName) {
    return this.data[keyName];
  }

  /**
   * When passed a key name and value, will add that key to the given Storage
   * object, or update that key's value if it already exists.
   *
   * @param {string} keyName  The name of the key you want to create/update.
   * @param {mixed}  keyValue The value you want to give the key you are
   *                          creating/updating.
   *
   * @return {undefined}
   */
  setItem(keyName, keyValue) {
    this.data[keyName] = keyValue;
    this._save();
  }

  /**
   * When passed a key name, will remove that key from the given Storage object
   * if it exists. If there is no item associated with the given key, this
   * method will do nothing.
   *
   * @param {string} keyName The key you want to remove.
   *
   * @return {undefined}
   */
  removeItem(keyName) {
    delete this.data[keyName];
    this._save();
  }

  /**
   * Clears the key stored in a given Storage object.
   *
   * @return {undefined}
   */
  clear() {
    this.data = {};
    window[this.func].removeItem(this.keyName);
  }

  /**
   * Private: Load the instance data from the Storage object or return an empty
   * object if no value is found.
   *
   * @return {object} The data object that is stored in the Storage object, or
   *                  an empty object if no data is found.
   */
  _load() {
    const data = window[this.func].getItem(this.keyName);
    return data ? JSON.parse(data) : {};
  }

  /**
   * Private: Save the instance data to the Storage object.
   *
   * @return {undefined}
   */
  _save() {
    window[this.func].setItem(this.keyName, JSON.stringify(this.data));
  }
}
