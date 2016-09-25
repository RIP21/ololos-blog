export function authorsFormattedForDropdown(authors) {
  return authors.map((author) => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName,
    };
  });
}

export function getById(entries, id) {
  if (entries[0].id) {
    const object = entries.filter(entry => entry.id == id);
    if (object.length) {
      return object[0];
    }
    return null;
  }
  console.error("Entity don't have 'id' field to do search by entries, please provide properly formatted objects only");
  return null;
}
