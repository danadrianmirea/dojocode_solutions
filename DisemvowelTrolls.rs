pub fn disemvowel(s: &str) -> String {
    // Define a set of characters representing both lowercase and uppercase vowels
    let vowels = "aeiouAEIOU";

    // Filter out the vowels and collect the remaining characters into a new string
    s.chars().filter(|c| !vowels.contains(*c)).collect()
}
