function cache(...args) {
  return cache.addOrGet(...args);
}
cache.cache = {};

export default cache;

cache.init = () => {
  // if (!cache.cache) {
  //   cache.cache = {};
  // }
};

cache.addOrGet = (name, obj) => {
  // cache.init();
  if (typeof obj === 'undefined') {
    // Get
    return cache.get(name);
  }

  // Set
  cache.add(name, obj);

  return obj;
};

cache.get = name => {
  // cache.init();
  return cache.cache[name];
};

cache.add = (name, obj) => {
  // cache.init();
  cache.cache[name] = obj;
  return obj;
};
cache.set = cache.add;

cache.remove = name => {
  // cache.init();
  if (name) delete cache.cache[name];
};

cache.clear = () => {
  // cache.init();
  for (const c of cache.cache) {
    cache.cache[c] = undefined;
  }
};

cache.default = (name, defaultFn) => {
  const obj = cache(name);

  if (obj === undefined) return cache(name, defaultFn.call());
  return obj;
};

cache.all = () => {
  // cache.init();
  return cache.cache;
};

cache.allArray = () => {
  // cache.init();
  const elms = [];
  for (const key in cache.cache) {
    if (Object.prototype.hasOwnProperty.call(cache.cache, key)) {
      elms.push({ key: cache.cache[key] });
    }
  }

  return elms;
};
