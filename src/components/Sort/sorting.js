export const sort = arr => {
  const checkedArr = check(arr);
  return quickSort(checkedArr);
};

const check = arr => {
  const checkedArr = arr.filter(data => {
    return !data.includes(" ") && data !== "" && !isNaN(data);
  });
  return checkedArr.map(data => data * 1);
};

const quickSort = (arr, l = 0, r = arr.length - 1) => {
  if (l >= r) {
    return;
  }
  const mid = Math.floor((l + r) / 2);
  const pivot = arr[mid];
  const [array, stand] = divide(arr, l, r, pivot);
  quickSort(array, l, stand - 1);
  quickSort(array, stand, r);

  return array;
};

const divide = (arr, l, r, pivot) => {
  while (l <= r) {
    if (arr[l] < pivot) {
      l++;
    }
    if (arr[r] > pivot) {
      r--;
    }
    if (l <= r && arr[l] >= pivot && arr[r] <= pivot) {
      const tmp = arr[l];
      arr[l] = arr[r];
      arr[r] = tmp;
      l++;
      r--;
    }
  }
  return [arr, l];
};
