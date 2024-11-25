function filterArray(arr: number[], callback: (x: number) => boolean): number[] {
  const modifiedArray = arr.filter(callback);
  return modifiedArray;
}

export {filterArray};

function findMinMax(array: number[]): object {
    
    const minimum = Math.min(...array);
    const maximum = Math.max(...array);

    let result = {
        min: minimum,
        max: maximum
    }
    return result;
  }

export {findMinMax};