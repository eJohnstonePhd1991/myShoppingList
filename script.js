      const list = document.querySelector("#list");
        const input = document.querySelector("input");
        const button = document.querySelector("button");
        const dbutton = document.querySelector("#del");
        const sbutton = document.querySelector('#sel');
        const bdiv = document.querySelector('#btab');
        // Drag and drop functions

        function allowDrop(ev){
            //console.log("drop ready");
                ev.stopPropagation();
                ev.preventDefault();
            }
            
        function drag(ev){
                ev.dataTransfer.setData("Text",ev.target.id);
            }
            
        function drop(ev,el){
                ev.preventDefault();
                //const el = ev.target;
                const data = ev.dataTransfer.getData("Text");
                
             el.parentNode.insertBefore(document.getElementById(data),el);
        }

        function clicked() {
            //console.log("clicked!");
            
            let inValue = input.value;
            
            if (inValue.length == 0){
             alert("Please input text");
            
            }
            else{
            //console.log(inValue);
            input.value = '';
            
            let listItem = document.createElement('li');
            // add draggable functionality
            listItem.draggable = true;
            listItem.addEventListener("dragstart",drag,false);
            listItem.addEventListener("drop",function(){drop(event,this);},false);
            listItem.addEventListener("dragover",allowDrop,false);
            
            // creates dynamic id
            listItem.id = "drag"+list.childNodes.length; 
                
            let spanItem = document.createElement('span');
            let buttonItem = document.createElement('input');
            buttonItem.type = "checkbox";
            spanItem.textContent = inValue;
            
            
            listItem.appendChild(spanItem);
            listItem.appendChild(buttonItem);
            
            list.appendChild(listItem);
          
            input.focus();
            
            if (dbutton.style.display == "none"){
                for (let i = 0; i < bdiv.children.length;i++ ){
                    bdiv.children[i].style.display = "inline-block";
                }
            }
        }
               
        }
        
        

        function deleteItems() {
            for (let i = list.childNodes.length - 1; i>=0; i--){
                let child = list.childNodes[i];
                
                if (child.nodeType == 1){
                   if (child.childNodes[1].checked == true){
                      child.parentElement.removeChild(child);
                   }    
                }
            }
            // hides delete button depending on if there are items to delete
            if (list.childNodes.length == 1){
                for (let i = 0; i < bdiv.children.length;i++ ){
                    bdiv.children[i].style.display = "none";
                }
               
            }
        }
            
        function selectAll() {
            for (let i = list.childNodes.length - 1; i>=0; i--){
                let child = list.childNodes[i];
                if (child.nodeType == 1){
                   child.childNodes[1].checked = true }
                }   
        }    
            
            
           
        
         
        