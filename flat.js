var flatFunction = (obj) => {
    let result = {};
    
    const dfs = (currentObj, result, path) => {
        for ( let key in currentObj) {
            if (typeof currentObj[key] === 'object') {
                dfs(currentObj[key], result, path.concat(key));
            } else {
                result[path.concat(key).join('.')] = currentObj[key];
            }
        }
    }
    dfs(obj, result, []);
    return result;
}

console.log(flatFunction({ a: { b: { c: 1 } }, d: { e: 2 } }));