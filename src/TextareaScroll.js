import './Components/Asidetop'

/*var textarea = document.querySelector('textarea')
textarea.addEventListener('keydown', autosize)*/

export default function autosize(ev){
console.log(ev.target)
  setTimeout(function(){
    ev.target.style.cssText = 'height:auto; padding:0';
    ev.target.style.cssText = 'height:' + ev.scrollHeight + 'px';
  },1);
}
 