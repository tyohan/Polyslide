    var max = document.querySelectorAll('section').length-1;
    function nextPage(){
    	var p = document.querySelector('core-animated-pages');
    	if(p.selected<max)
    		p.selected += 1;

    }

    function prevPage(){
  		var p = document.querySelector('core-animated-pages');
  		if(p.selected!==0)
	    	p.selected -= 1;

    }
    
   addEventListener('template-bound', function(ev) {
      ev.target.navigate = function(ev) {
        if(ev.detail.key==='right' || ev.detail.key==='pageup' || ev.detail.key==='up')
           nextPage();
         else
          prevPage();
      }
    });