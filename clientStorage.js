const w = window,
  j = JSON,
  g = "getItem",
  u = "setItem",
  r = "removeItem";

export default class ClientStorage {
  constructor(name, o = { persist: true }) {
    this.n = name;
    this.f = o.persist ? "localStorage" : "sessionStorage";
    this.d = this.l();
  }
  key() {
    return this.n;
  }
  [g](k) {
    return this.d[k];
  }
  [u](k, v) {
    this.d[k] = v;
    this.s();
  }
  [r](k) {
    delete this.d[k];
    this.s();
  }
  clear() {
    this.d = {};
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
