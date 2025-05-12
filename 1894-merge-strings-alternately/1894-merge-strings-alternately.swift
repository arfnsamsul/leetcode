class Solution {
    func mergeAlternately(_ word1: String, _ word2: String) -> String {
        let chars1 = Array(word1)
        let chars2 = Array(word2)
        var newChars: [Character] = []
        
        var idx = 0
        while idx < chars1.count || idx < chars2.count {
            if idx < chars1.count {
                newChars.append(chars1[idx])
            }
            if idx < chars2.count {
                newChars.append(chars2[idx])
            }
            idx += 1
        }
        return String(newChars)
    }
}