const w = window,
  j = JSON,
  g = "getItem",
  u = "setItem",
  r = "removeItem";

export default class ClientStorage {
  constructor(name, persist = true) {
    this.n = name;
    this.f = persist ? "localStorage" : "sessionStorage";
    this.d = this.l();
  }
  [g](key) {
    return this.d[key];
  }
  [u](key, value) {
    this.d[key] = value;
    this.s();
  }
  [r](key) {
    delete this.d[key];
    this.s();
  }
  clear() {
    w[this.f][r](this.n);
  }
  l(d) {
    d = w[this.f][g](this.n);
    return d ? j.parse(d) : {};
  }
  s() {
    w[this.f][u](this.n, j.stringify(this.d));
  }
}
