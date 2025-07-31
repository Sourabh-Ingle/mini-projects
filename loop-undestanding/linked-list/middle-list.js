// two-pointer technique to find the middle node in a single traversal, a popular pattern used in many Linked List problems.

var middleNode = function (head) {
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next
    }
    return slow;
};