export class Router {
  constructor(basePath) { this.basePath = basePath; this.routes = []; }
  get(path, fn) { this.routes.push({ method: 'GET', path, fn }); return this; }
  post(path, fn) { this.routes.push({ method: 'POST', path, fn }); return this; }
}
