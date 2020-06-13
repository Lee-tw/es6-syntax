const inject = (items, sections) => {
    for (let i = sections.length - 1; i >= 0; i--) {
        let item = sections[i];
        let eachValue = Object.entries(item);
        let value = eachValue[0][1];
        let index = eachValue[1][1];
        items.splice(index, 0, value);
    }
    return items;
}
export { inject };
