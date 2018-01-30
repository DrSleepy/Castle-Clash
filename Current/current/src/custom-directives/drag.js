import Vue from 'vue'

Vue.directive('drag', {
  bind(el){
    var dragging = false;

    function dragStart(){
      if (el === event.target) {
        event.preventDefault()
        dragging = true;
      }
    };

    function dragEnd(){
      dragging = false;
    };

    function dragMove() {
        if (dragging) {
          el.style.position = 'absolute';
          el.style.left = event.clientX + 'px';
          el.style.top = event.clientY + 'px';
        }
    };

    window.addEventListener('mousedown', dragStart);
    window.addEventListener('mouseup', dragEnd);
    window.addEventListener('mousemove', dragMove);
  },

  unbind(el){
    $(el).unbind();
  }
});
