      const getElementByIdManual = function(id) {
            const children = document.body.children;

            for(let i = 0; i < children.length; i++){
                if(children[i].id === id){
                    return children[i]
                }
            }

            return null;
        }

        const getElementsByClassName = function(className){
            const children = document.body.children;
            const elements = []

            for(let i = 0; i < children.length; i++){
                if(children[i].className === className){
                    elements.push(children[i])
                }
            }

            return elements.length === 1 ? elements[0] : elements;
        }

        const getElementsByTagName = function(tagName){
            const children = document.body.children;
            const elements = []

            for(let i = 0; i < children.length; i++){
                if(children[i].tagName === tagName){
                    elements.push(children[i])
                }
            }

            return elements.length === 1 ? elements[0] : elements;
        }

        const manualQuerySelector = function(searchQuery) {
            if(searchQuery[0] === "#") {
                return getElementByIdManual(searchQuery.slice(1, searchQuery.length))
            } else if(searchQuery[0] === "."){
                return getElementsByClassName(searchQuery.slice(1, searchQuery.length));
            } else {
                return getElementsByTagName(searchQuery);
            }
        }
