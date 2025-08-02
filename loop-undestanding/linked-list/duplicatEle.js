// Remove Duplicates from Sorted List


function noDuplicate(head) {
    let curr = head;
    while (curr && curr.next) {
        if (curr.val === curr.next.val) {
            curr.next = curr.next.next;
        }
        else {
            curr = curr.next;
        }
    }
    return head;
        
}