/**
 * 
给定一个二叉树，计算 整个树 的坡度 。

一个树的 节点的坡度 定义即为，该节点左子树的节点之和和右子树节点之和的 差的绝对值 。如果没有左子树的话，左子树的节点之和为 0 ；没有右子树的话也是一样。空结点的坡度是 0 。

整个树 的坡度就是其所有节点的坡度之和。

 

示例 1：


输入：root = [1,2,3]
输出：1
解释：
节点 2 的坡度：|0-0| = 0（没有子节点）
节点 3 的坡度：|0-0| = 0（没有子节点）
节点 1 的坡度：|2-3| = 1（左子树就是左子节点，所以和是 2 ；右子树就是右子节点，所以和是 3 ）
坡度总和：0 + 0 + 1 = 1
示例 2：


输入：root = [4,2,9,3,5,null,7]
输出：15
解释：
节点 3 的坡度：|0-0| = 0（没有子节点）
节点 5 的坡度：|0-0| = 0（没有子节点）
节点 7 的坡度：|0-0| = 0（没有子节点）
节点 2 的坡度：|3-5| = 2（左子树就是左子节点，所以和是 3 ；右子树就是右子节点，所以和是 5 ）
节点 9 的坡度：|0-7| = 7（没有左子树，所以和是 0 ；右子树正好是右子节点，所以和是 7 ）
节点 4 的坡度：|(3+5+2)-(9+7)| = |10-16| = 6（左子树值为 3、5 和 2 ，和是 10 ；右子树值为 9 和 7 ，和是 16 ）
坡度总和：0 + 0 + 0 + 2 + 7 + 6 = 15
示例 3：


输入：root = [21,7,14,1,1,2,2,3,3]
输出：9
 

提示：

树中节点数目的范围在 [0, 104] 内
-1000 <= Node.val <= 1000
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function (root) {
	let ans = 0;
	const dfs = (l, r) => {
		let lVal = l?.val ?? 0,
			rVal = r?.val ?? 0;
		if (l?.left || l?.right) {
			lVal += dfs(l?.left, l?.right);
		}
		if (r?.left || r?.right) {
			rVal += dfs(r?.left, r?.right);
		}
		ans += Math.abs(lVal - rVal);
		return lVal + rVal;
	};
	dfs(root?.left, root?.right);
	return ans;
};

// 一个节点比两个节点参数的查找要简单
var findTilt = function (root) {
	let ans = 0;
	const dfs = (node) => {
		if (!node) {
			return 0;
		}
		let sumLeft = dfs(node.left);
		let sumRight = dfs(node.right);
		ans += Math.abs(sumLeft - sumRight);
		return sumLeft + sumRight + node.val;
	};
	dfs(root);
	return ans;
};

// 参考 三叶的递归
var findTilt = function (root) {
	if (!root) return 0;
	return (
		findTilt(root.left) +
		findTilt(root.right) +
		Math.abs(getSum(root.left) - getSum(root.right))
	);
};
var getSum = function (node) {
	if (!node) return 0;
	return node.val + getSum(node.left) + getSum(node.right);
};
// [4,2,9,3,5,null,7]
//     4
//   2,  9
// 3,5   null,7
// 2+7+

// []
