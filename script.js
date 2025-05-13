function indexOfIgnoreCase(str: string, subStr: string): number {
    const lowerStr = str.toLowerCase();
    const lowerSubStr = subStr.toLowerCase();
    return lowerStr.indexOf(lowerSubStr);
}
{
console.log(indexOfIgnoreCase("Hello World", "world")); 
console.log(indexOfIgnoreCase("apple", "Ple"));         
console.log(indexOfIgnoreCase("test", "aaa"));                
}

  
	
