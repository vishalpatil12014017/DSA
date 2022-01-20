
const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};
var addTwoNumbers = function (l1, l2) {
    const sum = Total(l1, l2);
    let head;
    let curr;
    sum.forEach(
        num => {
            if (!head) {
                head = new ListNode(Number(num), null);
                curr = head;
            } else if (!curr.next) {
                curr.next = new ListNode(Number(num), null);
                curr = curr.next;
            }
        }
    );
    return head;
};

function Total(L1, L2) {
    let carry = 0;
    const ans = []
    while (L1 || L2) {
        let val1 = 0;
        let val2 = 0;
        if (L1) {
            val1 = L1.val;
            L1 = L1.next
        }
        if (L2) {
            val2 = L2.val;
            L2 = L2.next
        }
        let sum = val1 + val2 + carry;
        if (sum >= 10) {
            carry = 1;
            sum = sum % 10;
        } else {
            carry = 0;
        }
        ans.push(sum)
        if (!L1 && !L2 && carry) {
            ans.push(carry)
        }
    }
    return ans;
};

