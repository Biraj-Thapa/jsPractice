function checkAnagram(firstString, secondString) {
    let a = firstString.replace(/\s+/g, '');
    let b = secondString.replace(/\s+/g, '');
    
    a = a.toLowerCase().split('').sort().join('');
    b = b.toLowerCase().split('').sort().join('');
    
    return a === b ? true : false;
  }
  
  console.log(checkAnagram('Listen', 'Silent'));
  console.log(checkAnagram('ama','maa'));
  console.log(checkAnagram('hey','bey'));