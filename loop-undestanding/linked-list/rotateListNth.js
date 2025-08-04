// ROTATE LIST NTH TIME
let rotateNth = (head,k) => {
    if (!head || !head.next || k === 0) return head;
    let curr = head;
    let length = 0;
    while (curr) {
        curr = curr.next;
        length++;
    }
    k = k % length;

    if (k === 0) return head;

    let first = head;
    let second = head;

    for (let i = 0; i < k; i++){
        first = first.next;
    }
    
    while (first.next) {
        first = first.next;
        second = second.next;
    }
    first.next = head;
    let newHead = second.next;
    second.next = null;


    return newHead;
}


// my solution
var rotateRight = function (head, k) {
    if (!head || k === 0) return head;
    let curr = head;
    let length = 0;

    while (curr) {
        curr = curr.next;
        length++;
    }
    if (length === 1) return head;

    let n = k % length;

    if (n === 0) return head;

    let first = head;
    let second = head;
    for (let i = 0; i < n; i++) {
        first = first.next;
    }

    while (first && first.next) {
        first = first.next;
        second = second.next;
    }

    let startNode = second.next;
    second.next = null;
    first.next = head;
    head = startNode;


    return head;

};