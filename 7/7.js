function add(figure){
	switch (figure){
        case 's':
            for (let i = 0; i < document.querySelector("input").value; i++) {
                var used = document.createElement("div");
                used.classList.add('figure');
                used.style.position = "absolute";
                used.style.opacity = "0.8";
                used.style.left = Math.random() * 1200 + 10 + "px";
                used.style.top = Math.random() * 500 + 10 + "px";
		        used.style.border = "1px solid black";
		        used.style.width = Math.random() * 200 + 10 + "px";
                used.style.height = used.style.width;
		        used.style.background = "red";
                document.body.append(used)}
            break;
    case 't':
		for (let i = 0; i < document.querySelector("input").value; i++) {
            var used = document.createElement("div");
            used.classList.add('figure');
			used.style.position = "absolute";
			used.style.opacity = "0.8";
			used.style.left = Math.random() * 1200 + 10 + "px";
			used.style.top = Math.random() * 500 + 10 + "px";
                used.style.borderLeft = "0 solid transparent";
                used.style.borderRight = "0 solid transparent";
                used.style.borderBottom = "0 solid blue";
                used.style.borderLeftWidth = Math.random() * 200 + 10 + "px";
                used.style.borderRightWidth = used.style.borderLeftWidth;
				used.style.borderBottomWidth = used.style.borderLeftWidth;
                document.body.append(used)}
                break;
    case 'c':
			for (let i = 0; i < document.querySelector("input").value; i++) {
                var used = document.createElement("div");
                used.classList.add('figure');
				used.style.position = "absolute";
				used.style.opacity = "0.8";
				used.style.left = Math.random() * 1200 + 10 + "px";
				used.style.top = Math.random() * 500 + 10 + "px";
                used.style.width = Math.random() * 200 + 10 + "px";
                used.style.height = used.style.width;
                used.style.borderRadius = "50%";
				used.style.background = "green";
				document.body.append(used)
            }
            break;
		};
        
        document.querySelectorAll('.figure').forEach((used) =>{
              used.addEventListener("click", (event) => {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {color = color + letters[Math.floor(Math.random() * 16)];}
            if (figure == "t")
                event.target.style.borderBottomColor = color
            else
                event.target.style.background = color;});
            used.addEventListener("dblclick", (event) => event.target.remove());
        })
                document.body.append(used)
            };
        
		
