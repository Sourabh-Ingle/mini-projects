
// Given the head of a linked list,
// remove the nth node from the end of the list and return its head.

// Input: head = [1,2,3,4,5], n = 2
// Output: [1, 2, 3, 5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1, 2], n = 1
// Output: [1]

var removeNthFromEnd = function (head, n) {
    let sentinal = new ListNode();
    sentinal.next = head;

    let len = 0
    while (head) {
        head = head.next;
        len++;
    }

    let prevDelNode = len - n;
    let prev = sentinal;
    for (let i = 0; i < prevDelNode; i++) {
        prev = prev.next
    }
    prev.next = prev.next.next;

    return sentinal.next;
};

// my soluion
var removeNthFromEnd = function (head, n) {
    let sentinal = new ListNode();
    sentinal.next = head;

    let len = 0
    while (head) {
        head = head.next;
        len++;
    }

    let prevDelNode = len - n;
    let currunt = sentinal;
    let newL = 0
    while (currunt) {
        if (newL === prevDelNode) {
            currunt.next = currunt.next.next;
        } else {
            currunt = currunt.next;
        }
        newL++;
    }

    return sentinal.next


};