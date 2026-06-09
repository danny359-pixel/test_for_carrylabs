export function slug(text) {
  return text.replace(/[：？\s]/g, '-').replace(/-+/g, '-');
}
