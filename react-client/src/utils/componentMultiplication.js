const componentMultiplication = (value, component) => {
    const list = [];
    for (let i = 0; i < value; i++) {
        list.push(component);
    }
    return list.map(i => i);
};

export default componentMultiplication;
