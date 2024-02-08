export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const newList: number[] = [];
    let i = 0, j = 0, k = 0;

    // Merge all 3 sorted lists
    while (i < collection_1.length && j < collection_2.length && k < collection_3.length) {
        if (collection_1[i] <= collection_2[j] && collection_1[i] <= collection_3[collection_3.length-k-1]) {
            newList.push(collection_1[i++]);
        } else if (collection_2[j] <= collection_1[i] && collection_2[j] <= collection_3[collection_3.length-k-1]) {
            newList.push(collection_2[j++]);
        } else {
            newList.push(collection_3[collection_3.length-k-1]);
            k++;
        }
    }

    // Handle cases where one of the list is empty before others
    if (i >= collection_1.length) {
        while (j < collection_2.length && k < collection_3.length) {
            if (collection_2[j] <= collection_3[collection_3.length-k-1]) {
                newList.push(collection_2[j++])
            }
            else {
                newList.push(collection_3[collection_3.length-k-1]);
                k++
            }
        }
    }
    else if (j >= collection_2.length) {
        while (i < collection_1.length && k < collection_3.length) {
            if (collection_1[i] <= collection_3[collection_3.length-k-1]) {
                newList.push(collection_1[i++])
            }
            else {
                newList.push(collection_3[collection_3.length-k-1]);
                k++
            }
        }
    }
    else {
        while (i < collection_1.length && j < collection_2.length) {
            if (collection_1[i] <= collection_2[j]) {
                newList.push(collection_1[i++])
            }
            else {
                newList.push(collection_2[j++]);
            }
        }
    }

    // Append remaining elements from collection_1
    while (i < collection_1.length) {
        newList.push(collection_1[i++]);
    }

    // Append remaining elements from collection_2
    while (j < collection_2.length) {
        newList.push(collection_2[j++]);
    }

    // Append remaining elements from collection_3 in reverse order
    while (k < collection_3.length) {
        newList.push(collection_3[collection_3.length - k - 1]);
        k++;
    }

    return newList;
}
    
