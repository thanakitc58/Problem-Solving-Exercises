// **Optional: Palindrome Checker**

// - ให้เขียน Function ที่ชื่อว่า `isPalindrome` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 1 ตัวคือ `word` มี Value Type เป็น `String`
//     - Function นี้จะ Return ค่า `true` ถ้า `word` เป็น Palindrome
//     - หากไม่ใช่ ให้ Return `false`
//     - Palindrome คือคำที่อ่านจากหน้าไปหลังหรือหลังไปหน้าก็ได้คำเดียวกัน เช่น `“madam”`, `“racecar”`
//     - เช่น

// แบบใช้ method
// function isPalindrome(word) {
//     // ประกาศตัวแปรและเก็บค่าที่สลับแล้ว
//    let reverseWord = word.split("").reverse().join("")

//     //เช็คค่าว่าตรงไหม
//     return word === reverseWord;
// };
 


function isPalindrome(word) {
    // ประกาศตัวแปรมาเก็บคำที่สลับ
    let reverseWord = "";
    for (let i =   word.length -1 ;i >=0 ; i--) {
        reverseWord += word[i];
    }
    // เช็คว่าคำเหมือนกันไหม
    if(word === reverseWord) {
        return true
    }else{
        return false
    }
}

let result1 = isPalindrome("madam");
console.log(result1); // true

let result2 = isPalindrome("hello");
console.log(result2); // false
