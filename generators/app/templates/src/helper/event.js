export function stop(e) {
  if (!e) {
    return
  }
  if (e.preventDefault) {
    e.preventDefault()
  }
  if (e.stopPropagation) {
    e.stopPropagation()
  }
}
