(function($){
  console.log('hello world', $);
  var data = [1,2,3,4,5,6,7,8,9].map(d => "Item " +d);
  var container = $('.container-draggable-list');
  var list = $("<ul class='draggable-list'>");
  var list_items = data.map(createItem);
  list_items.forEach(d => list.append(d));
  container.append(list);

  function createItem(name) {

    function dragStarted () {
      console.log('dragStarted');
    }

    function dragStopped () {
      console.log('dragStopped');
    }

    var _item = $(`<li class='draggable-list__list-item'> ${name} </li>`);
    _item.draggable({
      start: dragStarted,
      stop: dragStopped
    })
    _item.on('dragstart', function(event, ui) {
      console.log('dragStart', event, ui);
      // $(this).addClass('draggable-list__list-item--dragged');
    });
    _item.on('dragstop', function(event, ui) {
      console.log('dragStop', event, ui);
      $(this).removeClass('draggable-list__list-item--dragged');
    })
    _item.click(function(){
      $(this).toggleClass('draggable-list__list-item--dragged');
    })
    _item.on('mousedown', function(){
      $(this).addClass('draggable-list__list-item--dragged');
    })


    

    return _item;
  }
})(jQuery);