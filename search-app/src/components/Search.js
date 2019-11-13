import React, { Component } from 'react'

export default class Search extends Component {
    state = {
        searchTerm: null,
        output: null

    }

    updateST = (e) => {
        e.preventDefault()
        this.setState({
            searchTerm: e.target.value
        })
    }
    array = [89, 30, 25, 32, 72, 70, 51]
        
        // 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28]
    sortedArray = this.array.sort()

    linearSearchHandler = () => {
        //e.preventDefault()
        console.log(this.state.searchTerm)
        console.log(this.linearSearch(this.state.searchTerm, this.array))
        this.setState({
            output: this.linearSearch(this.state.searchTerm, this.array)
        })
    }

    binarySearchHandler = () => {
        console.log('in binary',this.sortedArray, this.state.searchTerm)
        console.log(this.binarySearch(this.sortedArray, this.state.searchTerm))
        this.setState({
            output: this.binarySearch(this.sortedArray, this.state.searchTerm)
        })
    }
    
    linearSearch = (num, array) => {
        let value = parseInt(num)
        for(let i = 0; i < array.length; i++) {
            if(array[i] === value) {
                return i + 1
            }
        }
        return 'not found'
    }

    binarySearch = (sortedArray, target, start=0, end=sortedArray.length-1, count = 0) => {
        // console.log('in search bin')

        count++
        if(start > end) {
            return 'Not found'
        }
        let midIndex = Math.floor((start + end) / 2)
        let value = sortedArray[midIndex]
        // console.log(start, end)
        console.log(target, value)
        if (target == value) {
            console.log(count)
            return count;
        }
        else if(target > value) {
            return this.binarySearch(sortedArray, target, midIndex +1, end, count)
        }
        else if(target < value) {
            return this.binarySearch(sortedArray, target, start, midIndex -1, count)
        }

    };

    render() {
        console.log(this.state)
        let display
        if(this.state.output === 'not found'){
            display = <p>value not found</p>
        }
        if(this.state.output !== 'not found' || this.state.output !== null) {
            display = <p>The linear search took {this.state.output} times to reach the answer</p>
        }
        return (
            <div>
                <form>
                    <input type='number' ref={this.input} onChange={e => this.updateST(e)}></input>
                    <button onClick={() => this.linearSearchHandler()} type='button'>linear search</button>
                    <button onClick={() => this.binarySearchHandler()} type='button'>binary search</button>
                </form>

                {display}
            </div>
        )
    }
}
