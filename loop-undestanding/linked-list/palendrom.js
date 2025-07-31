// is linked list is having palendrom number or not

function isPalendrom(head) {
    // 1. find middle of link list 
    // here we are using slow and fast method to find middle node in linked list
    let slow = fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // 2. now revese linked list from middle
    let curr = slow;
    let prev = null;
    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    // 3.compaire nodes value 
    let first = head;
    let second = prev;
    while (second) {
        if (first.val !== second.val) return false;
        first = first.next;
        second = second.next;
    }
    return true;

}












//  WE CAN DO THIS , FIRST CONVERT LINKED LIST INTO ARRAY AND THEN FIND PALENDROM NUMBER
// BUT HERE SPACE COMPLECITY IS O(N) TIME COMPLEXITY=O(N)
function isPalandrom(head) {
    let curr = head;
    let arr = [];
    while (curr) {
        arr.push(curr.val);
        curr = curr.next;
    }
    let left = 0; let right = arr.length - 1;
    while (left < right) {
        if (arr[left] !== arr[right]) {
            return false;
        } 
        i++; j--;
    }
    return true
}