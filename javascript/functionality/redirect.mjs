export function redirect(path) {
  try {
    const url = new URL(path);
    location.assign(url.href);
  } catch {
    console.error("Could not redirect to", path);
  }
}
