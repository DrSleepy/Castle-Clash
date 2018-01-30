import Vue from 'vue'

Vue.directive('away',{
  bind(el, binding){
    function selection() {
      if (!el == event.target || !el.contains(event.target)) {
        binding.value();
      }
    };
    
    window.addEventListener('click', selection);
  },

  unbind(el) {
    $(el).unbind()
  },
});
