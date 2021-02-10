module.exports = function check(str, bracketsConfig) {
  let stack = [],
      open = [],
      map = new Map(),
      sameArr = new Set(),
      sameSet = new Set();

  for (let i = 0; i < bracketsConfig.length; i++){
    open.push(bracketsConfig[i][0]);
    map.set(bracketsConfig[i][0],bracketsConfig[i][1]);
    if (bracketsConfig[i][0] == bracketsConfig[i][1]){
      sameArr.add(bracketsConfig[i][0]);
    }
  }

  for (let i = 0; i<str.length; i++){
    if(sameArr.has(str[i])){
      if(sameSet.has(str[i])){
        let temp = stack.pop();
        sameSet.delete(str[i]);
        if (str[i] === map.get(temp)){
          continue;
        }else{
          return false;
        }
      }else{
        stack.push(str[i]);
        sameSet.add(str[i]);
      }
    }else if (open.includes(str[i])){
      stack.push(str[i]);
    }else{
      let temp = stack.pop();
      if (str[i] === map.get(temp)){
        continue;
      }else{
        return false;
      }
    }
  }
  if (stack.length !== 0){
      return false;
  }else{
      return true;
  }
};
