function Jquery(selector){
    this.nodes = document.querySelectorAll(selector)
    this.length = this.nodes.length
}

Jquery.prototype.each = function(callback){
    for(let i=0;i<this.length;i++){
        callback.call(this,this.nodes[i],i)
    }
    return this
}

Jquery.prototype.show =function(){
    return toggle.call(this, this.nodes,true)
}

Jquery.prototype.hide =function(){
    return toggle.call(this, this.nodes)
}

function toggle(elements, flag){
    for(let i=0;i<elements.length;i++){
        let item=elements[i];
        if(flag){
            item.style.visibility="visible";
        }
        else{
            item.style.visibility ='hidden';
        }
    }
    return this
}

function $(selector){
    return new Jquery(selector);
}

export default $;