import FullList from "../data/FullList"

interface DOMList{
    ul:HTMLUListElement,
    clear():void
    render(fullList: FullList):void

}

export default class ListTemplates implements DOMList{
    ul: HTMLUListElement

    private constructor(){
        this.ul = document.getElementById("listItems") as HTMLUListElement
    }

        clear():void{
            this.ul.innerHTML=''
        }
        
        render(fullList:FullList):void{

            fullList.list.forEach(item=>{
                const li = document.createElement("li") as HTMLLIElement
                li.className="item"

                const check = document.createElement("input") as HTMLInputElement
                check.type = "checkbox"
                check.id= item.id
                check.tabIndex=0
                check.checked = item.checked
                li.append(check)

                check.addEventListener("change",()=>{
                    item.checked = !item.checked
                    fullList.save()
                })
                // <label htmlfor="rt" textContent=""></label>
                const label = document.createElement("label") as HTMLLabelElement
                label.htmlFor = item.id
                label.textContent = item.item
                li.append(label)

                
            })
        }
}