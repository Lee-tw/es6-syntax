const parseData = input => {
    const result = [];
    for (let data of input.data) {
        const inner = {};
        let number = 0;
        for (let format of input.column) {
            const label = Object.values(format);
            label[1] = data[number];
            inner[label[0]] = label[1];
            number++;
        }
        result.push(inner)
    }
    return result;
}
export { parseData };
