
export function store(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}


export function get(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}
