// Remove Duplicates from Sorted List


function noDuplicate(head) {
    let curr = head;
    while (curr && curr.next) {
        if (curr.val === curr.next.val) {
            // here we are directy goes to next to next node
            curr.next = curr.next.next;
        }
        else {
            // goes to next node
            curr = curr.next;
        }
    }
    return head;
}