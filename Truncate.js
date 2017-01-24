
function truncateString(str, num) {
  // Clear out that junk in your trunk
  
  if (str.length > num) {
    
    if (num <=3) {
      
     newStr = str.slice(0, num) + "...";
    return newStr;
      
    }
    newStr1 = str.slice(0, num-3) + "...";
    return newStr1;
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
