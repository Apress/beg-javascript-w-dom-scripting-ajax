bh = {
  triggerClass:'show',
  init : function() {   
    var listitems, i, content;
	bh.headings = document.getElementById('headlines');
    if( !bh.headings ){ return; }  
    listitems = bh.headings.getElementsByTagName( 'h3' );
    for( i = 0; i < listitems.length; i++ ) {
      content = listitems[i].parentNode.getElementsByTagName( 'p' )[0];
      content.defaultHeight = content.offsetHeight;
	  listitems[i].content=content;
      YAHOO.util.Event.addListener( listitems[i], 'click', bh.toggle);
    }
  },
  toggle : function() {
    var attributes, anim;
	var c = this.content;
    if( !c.shown ) {
      YAHOO.util.Dom.addClass( c, 'shown' );
      attributes = {
        height: { from:0, to:c.defaultHeight },
        opacity: { from:0, to:1 }
      };
      anim = new YAHOO.util.Anim( c, attributes, .6, YAHOO.util.Easing.backOut );
      anim.animate();
      anim.onComplete.subscribe( bh.toggleCustom );
    } else {
      attributes = {
        height: {from:c.defaultHeight, to:0},
        opacity: {from:1, to:0}
      };
      anim = new YAHOO.util.Anim( c, attributes, .6, YAHOO.util.Easing.easeBoth );
      anim.animate();
      anim.onComplete.subscribe( bh.toggleCustom );
    }
  },
  toggleCustom:function() {
  	var c=this.getEl();
 	c.shown = c.shown ? false : true;
  },
  hideContents : function() {
    YAHOO.util.Dom.addClass( 'headlines', 'dynamic' );
	bh.init();
  }
}
YAHOO.util.Event.onAvailable( 'headlines', bh.hideContents );
