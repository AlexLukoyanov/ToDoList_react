export function loadState() {
  try {
    const localStore = localStorage.getItem('localStore');
    if (!localStore) return undefined;
    return JSON.parse(localStore);
  } catch (e) {
    return undefined;
  }
}

export async function saveState(state: any) {
  try {
    const localStore = JSON.stringify(state);
    localStorage.setItem('localStore', localStore);
  } catch (e) {}
}
