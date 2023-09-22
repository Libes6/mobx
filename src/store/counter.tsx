import {action, computed, makeObservable, observable} from "mobx";

class Counter{
    count=0


    get total(){
        return this.count
    }
    constructor() {
        makeObservable(this,{
            count:observable,
            increment:action,
            decrement:action,
            total:computed
        })
    }

    increment = (values:number)=>{
        this.count+=values
    }
    decrement =(values:number)=>{
        this.count-=values
    }
}

export default  new Counter()