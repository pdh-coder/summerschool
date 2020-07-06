    !function resizeScale(id){
        var dom = document.getElementById(id);
        var domW = dom.clientWidth;
        var domH = dom.clientHeight;
        setScale();
        window.addEventListener('resize',function(){
            setScale();
        },false);
        function setScale(){
            var winW = window.innerWidth,
                winH = window.innerHeight,
                scaleX = winW/domW,
                scaleY = winH/domH;
            dom.style.transform = 'scale('+ scaleX +') translate(0%, 0%)';
		    /*if(scaleX>=scaleY){
				dom.style.transform = 'scale('+ scaleY +') translate(30%, 50%)';
		    }
		    else{
			 	dom.style.transform = 'scale('+ scaleX +') translate(30%, 50%)';  
		    }*/
        }
    }('dashbox');