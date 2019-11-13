class BinarySearchTree {
    constructor(key = null, value = null, parent = null){
        this.value = value
        this.key = key
        this.parent = parent
        this.right = null
        this.left = null
    }
    insert(key, value) {
         // If the tree is empty then this key being inserted is the root node of the tree
        if(this.key == null){
            this.key = key;
            this.value = value;
        }
         /* If the tree already exists, then start at the root, 
           and compare it to the key you want to insert.
           If the new key is less than the node's key 
           then the new node needs to live in the left-hand branch */
        else if ( key < this.key){ // FOR THE LEFT
            /* If the existing node does not have a left child, 
               meaning that if the `left` pointer is empty, 
               then we can just instantiate and insert the new node 
               as the left child of that node, passing `this` as the parent */
               if (this.left == null) {
                   this.left = new BinarySearchTree(key, value, this);
               }
               /* If the node has an existing left child, 
               then we recursively call the `insert` method 
               so the node is added further down the tree */
               else {
                   this.left.insert(key, value)
               }
        } 
        else {
            if(this.right == null) {
                this.right = new BinarySearchTree(key, value, this)
            }
            else {
                this.right.insert(key, value);
            }
        }  
    }
    find(key) { //2
        if(this.key == key) { 
            console.log(this.key)
            return this.value
        }
        else if (key < this.key && this.left) { //else if the key is less than the root and there is a node to the left
            return this.left.find(key)
        }
        else if(key > this.key && this.right) {
            return this.right.find(key);
        }
        else {
            throw new Error('Key Error')
        }
    }
    remove(key){
        if(this.key == key) { //current key is equal to the key you want to delete
            if(this.left && this.right) { //theres 2 children
                const successor = this.right._findMin();
                this.key = successor.key
                this.value = successor.value
                successor.remove(successor.key) // what
            }
            else if(this.left){
                this._replaceWith(this.left);
            }
            else if(this.right){
                this._replaceWith(this.right);
            }
            else{
                this._replaceWith(null);
            }
        }
        else if (key < this.key && this.left) {
            this.left.remove(key)
        }
        else if (key > this.key && this.right) {
            this.right.remove(key)
        }
        else {
            throw new Error('Key Error')
        }
    }
    _replaceWith(node) {
        if(this.parent) {
            if(this == this.parent.left) {
                this.parent.left = node;
            }
            else if (this == this.parent.right) {
                this.parent.right = node;
            }
            if(node) {
                node.parent = this.parent;
            }
        }
        else {
            if(node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }
    _findMin() {
        if(!this.left) {
            return this; 
        }
        return this.left._findMin();
    }
}

module.exports = BinarySearchTree