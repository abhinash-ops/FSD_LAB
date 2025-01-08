const nums = [10, 20, 30, 40, 50];


// Swap the first and third, and second and fourth elements
[nums[0], nums[2]] = [nums[2], nums[0]];
[nums[1], nums[3]] = [nums[3], nums[1]];

console.log(nums); 