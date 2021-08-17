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

const quickSort = (array, l = 0, r = array.length - 1) => {
  if (array.length < 2) {
    return array;
  }
  if (l >= r) {
    return;
  }
  const mid = Math.floor((l + r) / 2);
  const pivot = array[mid];
  const stand = divide(l, r, pivot);
  quickSort(array, l, stand - 1);
  quickSort(array, stand, r);

  function divide(l, r, pivot) {
    while (l <= r) {
      if (array[l] < pivot) {
        l++;
      }
      if (array[r] > pivot) {
        r--;
      }
      if (l <= r && array[l] >= pivot && array[r] <= pivot) {
        const tmp = array[l];
        array[l] = array[r];
        array[r] = tmp;
        l++;
        r--;
      }
    }
    return l;
  }

  return array;
};
