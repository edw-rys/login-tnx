var openBtn=document.getElementById('icon-open');
      var open=false;
      openBtn.addEventListener('click',function(){
        console.log('click');
        container=document.getElementById('container-signup');
        content=document.getElementById('content-signup');
        icon=document.getElementById('fas');
        
        if(!open){
          container.classList.add('active');
          content.classList.add('active');
          icon.classList.add('fa-times');
          icon.classList.remove('fa-user-plus');
        }else{
          container.classList.remove('active');
          content.classList.remove('active');
          icon.classList.remove('fa-times');
          icon.classList.add('fa-user-plus');
        }
        open=!open;
      });