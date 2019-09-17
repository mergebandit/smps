export default function formHasErrors(fields) {
  return Object.keys(fields).some(field => fields[field]);
}