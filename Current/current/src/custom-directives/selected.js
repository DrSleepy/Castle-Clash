import Vue from 'vue'

Vue.directive('selected',{
  bind(el, binding){
    function selected(){
      // el is container for select options
      // (el !== event.target) otherwise will cause glitch when dragging while clicked on el or on scrollbar
      if ((el.contains(event.target)) && (el !== event.target)) {
        let selector = '.' + binding.arg + ' .selected';
        var elements = document.querySelectorAll(selector);
        [].forEach.call(elements, (current) => {
          current.classList.remove("selected");
        });
        event.target.className = "selected";
      }
    }
    window.addEventListener('click', selected);
  },

  unbind(el) {
    $(el).unbind();
  },
});
