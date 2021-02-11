/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: Node | null): Node | null {
    if (head === null) return null;
    
    // first pass: copy values next to the original node
    let iterator = head;
    while (iterator !== null) {
        // copy the value of the node and the  next pointer
        const copy = new Node(iterator.val, iterator.next, null);
        
        // place the original node next to the copied one
        iterator.next = copy;
        
        // go on
        iterator = copy.next;
    }
    
    // second pass: copy random pointers
    iterator = head;
    while (iterator !== null) {
        
        // if there's a random pointer on the original,
        // assign it's next (the copy) to the copy's random
        iterator.next.random = iterator.random ? iterator.random.next : null;
        
        // go on, skipping copies
        iterator = iterator.next.next;
    }
    
    // third pass: unweave the lists
    iterator = head;
    let newListIterator = head.next;
    let returnHead = head.next;
    while (iterator !== null) {
        // link alternate nodes from head
        iterator.next = iterator.next.next;
        
        // link alternate nodes starting from head.next
        newListIterator.next = newListIterator.next ? newListIterator.next.next : null;
        
        // go on with both
        iterator = iterator.next;
        newListIterator = newListIterator.next;
    }
    
    return returnHead;
};
