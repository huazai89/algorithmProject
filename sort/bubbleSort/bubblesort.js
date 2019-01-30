function bubbleSort(arr) {
    let len1 = arr.length;
    for (let i = 0; i < len1; i++) {
        for (let j = i + 1; j < len1; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }

    console.info(arr)
}

bubbleSort([0, 1, 3, 1, 2, 5, 0, 1])
