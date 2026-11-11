document.getElementById('yr').textContent=new Date().getFullYear();
(function(){
  var root=document.documentElement, btn=document.querySelector('.theme-toggle');
  function label(){btn.setAttribute('aria-label', root.getAttribute('data-theme')==='dark'?'Switch to light mode':'Switch to dark mode')}
  label();
  btn.addEventListener('click',function(){
    var t=root.getAttribute('data-theme')==='dark'?'light':'dark';
    root.setAttribute('data-theme',t); label();
    try{localStorage.setItem('theme',t)}catch(e){}
  });
  var mq=matchMedia('(prefers-color-scheme: dark)');
  mq.addEventListener&&mq.addEventListener('change',function(e){
    var s=null; try{s=localStorage.getItem('theme')}catch(err){}
    if(s!=='light'&&s!=='dark'){root.setAttribute('data-theme',e.matches?'dark':'light'); label();}
  });
})();
// contact form: opens a ready-to-send Gmail message (no server needed)
var enq=document.getElementById('enquiry'); if(enq) enq.addEventListener('submit',function(e){
  e.preventDefault();
  var f=e.target, name=f.name.value.trim(), email=f.email.value.trim(), msg=f.message.value.trim();
  var body='Name: '+name+'\nEmail: '+email+'\n\n'+msg;
  var url='https://mail.google.com/mail/?view=cm&fs=1&to=dataversezm@gmail.com&su='+encodeURIComponent('Website enquiry from '+name)+'&body='+encodeURIComponent(body);
  window.open(url,'_blank','noopener');
});

