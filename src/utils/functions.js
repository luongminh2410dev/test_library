export function objectMove(object, from, to) {
    const newObject = Object.assign({}, object);
    for (const id in object) {
        if (object[id] === from) {
            newObject[id] = to;
        }
        if (object[id] === to) {
            newObject[id] = from;
        }
    }

    return newObject;
}

export function listToObject(list) {
    const values = Object.values(list);
    const object = {};

    for (let i = 0; i < values.length; i++) {
        object[values[i].id] = i;
    }

    return object;
}

export function swapElements(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return [...array];
};

export const containsMathjax = (target) => {
    return ['$', '\\(', '\\[', '\`'].some(word => target.includes(word))
}