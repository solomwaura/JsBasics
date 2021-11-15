// falsey data
let falseyData=[false, "", '', ``, 0,-0, NaN, undefined, null, 0n];
// nullish data
let nullishData=[null, undefined];
//checking if a value is falsey
function isFalsey(data){
  if(data){
    return false;
  }else{
    return true;
  }
};
// short hand
function _isFaley(data){
  return data || true;
};
// nulish coalecing -> checks that a variable is null or undefined only
function isNullish(data){
  return data ?? true;
}
