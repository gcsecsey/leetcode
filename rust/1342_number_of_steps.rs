impl Solution {
    pub fn number_of_steps (num: i32) -> i32 {
        let mut number: i32 = num;
        let mut steps: i32 = 0;
        while (number > 0) {
            // even numbers have 0 at the end so logical "and" returns 0
            if (number & 1 == 0) {
                // bitwise right discards the lowest bit
                number = number >> 1;
            } else {
                number -= 1;
            }
            steps += 1;
        }
        
        return steps;
    }
}