import { action, computed, makeObservable, observable } from 'mobx';

class UiTag {
    tag: number[] = [];

    get totalUiTag() {
        return this.tag;
    }
    constructor() {
        makeObservable(this, {
            tag: observable,
            incrementTag: action,
            decrementTag: action,
            totalUiTag: computed,
        });
    }

    incrementTag = (values: number) => {
        if (this.tag.includes(values)) {
            // this.tag.filter(item => item !== values);  скажите этому гению что filter не мутирует стейт
            this.tag = this.tag.filter(item => item !== values);
        } else {
            this.tag.push(values);
        }
    };
    decrementTag = (values: number) => {
        this.tag.filter(item => item !== values);
    };
}

const uiTag = new UiTag();
export default uiTag;
export { UiTag };
