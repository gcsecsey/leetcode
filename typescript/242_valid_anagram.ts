function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }
    
    const dict: {[char: string]: number} = {};
    
    for (let c of s) {
        if (!dict[c]) {
            dict[c] = 0;
        }
        dict[c]++;
    }
    
    for (let c of t) {
        if (!dict[c]) {
            return false;  
        }
        
        dict[c]--;
        
        if (dict[c] < 0) {
            return false;
        }
    }
    
    return true;
};
