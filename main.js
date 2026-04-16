// 1-mashq
let nums = [2,7,11,15], target = 9;

let map = {};
for(let i=0;i<nums.length;i++){
  let diff = target - nums[i];
  if(map[diff] !== undefined){
    console.log([map[diff], i]);
  }
  map[nums[i]] = i;
}
// 2-mashq
let s = "()[]{}";
let stack = [];
let map = {")":"(", "]":"[", "}":"{"};

for(let c of s){
  if(c in map){
    if(stack.pop() !== map[c]) console.log(false);
  } else stack.push(c);
}
console.log(stack.length === 0);
// 3-mashq
let s = "abcabcbb";
let set = new Set(), l=0, max=0;

for(let r=0;r<s.length;r++){
  while(set.has(s[r])){
    set.delete(s[l]);
    l++;
  }
  set.add(s[r]);
  max = Math.max(max, r-l+1);
}
console.log(max);
// 4-mashq
let a=[1,3,5], b=[2,4,6];
let res=[], i=0,j=0;

while(i<a.length && j<b.length){
  if(a[i]<b[j]) res.push(a[i++]);
  else res.push(b[j++]);
}
console.log(res.concat(a.slice(i), b.slice(j)));
// 5-mashq
let arr = [-2,1,-3,4,-1,2,1,-5,4];
let max = arr[0], cur = arr[0];

for(let i=1;i<arr.length;i++){
  cur = Math.max(arr[i], cur+arr[i]);
  max = Math.max(max, cur);
}
console.log(max);
