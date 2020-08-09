## 面试题 17.12. BiNode

 > 难度 - 简单 树

## 题目描述
二叉树数据结构TreeNode可用来表示单向链表（其中left置空，right为下一个链表节点）。实现一个方法，把二叉搜索树转换为单向链表，要求依然符合二叉搜索树的性质，转换操作应是原址的，也就是在原始的二叉搜索树上直接修改。

返回转换后的单向链表的头节点。

注意：本题相对原题稍作改动

示例:
```markdown
输入： [4,2,5,1,3,null,6,0]
输出： [0,null,1,null,2,null,3,null,4,null,5,null,6]
```


提示：
- 节点数量不会超过 100000。

## 题目解析 方法一

<img :src="$withBase('/imgs/itv-01_a.png')" alt="itv-01_a">

解题思路
1. js中序遍历
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBiNode = function(root) {
    if(!root)
        return null;
    preNode = new TreeNode(0);
    let dummyRoot = preNode;
    function dfs(root){
        if(!root)
            return null;
        dfs(root.left);
        root.left = null;
        if(preNode){
            preNode.right = root;
            preNode  = preNode.right;
        }
        dfs(root.right)
    }
    dfs(root);
    return dummyRoot.right;
};
```

## 测试用例
> 可能有些朋友不知道解题中的TreeNode是哪里来的，实际上就是题干中预设的构造函数，下面是还原数的过程，方便理解题目。

```javascript
function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
}

var convertBiNode = function(root) {
  if(!root) return null;
  let preNode = new TreeNode(0);
  //用于存放最后的结果
  let dummyRoot = preNode;
  function bfs(root){
      if(!root) return null;
      //中序遍历 ,左-根-右
      bfs(root.left);
      //将当前结点的左子节点置空
      root.left = null;
      //将上一个结点的由结点指向当前结点
      preNode.right = root;
      //上一个结点下移到当前结点
      preNode  =root;
      bfs(root.right)
  }
  bfs(root);
  return dummyRoot.right;
};

const node1 =  new TreeNode(4);
const node2 =  new TreeNode(2);
const node3 =  new TreeNode(5);
const node4 =  new TreeNode(1);
const node5 =  new TreeNode(3);
const node6 =  new TreeNode(null);
const node7 =  new TreeNode(6);
const node8 =  new TreeNode(0);

node1.left = node2;
node1.right = node3;

node2.left = node4;
node2.right = node5;

node3.left = null;
node3.right = node7;

node4.left = node8;
node4.right = null;

const restree = convertBiNode(node1);

const resultArray = [];

let temp = restree;

const resFun = node => {
  if (node.right === null) {
    resultArray.push(node.val)
    return;
  }

  resultArray.push(node.val);
  resultArray.push(node.left);
  resFun(node.right)
}

resFun(temp)
console.log('resultArray:', resultArray);
```
