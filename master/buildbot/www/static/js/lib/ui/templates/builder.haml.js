define([],function(){function anonymous(locals){function _e(e){return(e+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;")}with(locals||{})try{var _$output='<div class="container-fluid"><ul class="breadcrumb"><li><a href="#/builders">Builders</a></li><span class="divider">'+_e("/")+"</span><li>"+'<a href="'+_e("#/builders/"+this.builderName)+'" class="active">'+""+_e(this.builderName)+'</a></li><div class="pull-right">'+function(){return builder.pendingBuilds>0?'<div class="span">'+_e(builder.pendingBuilds)+' pending build(s)</div><span class="divider">'+_e("|")+"</span>":""}.call(this)+"<b>Status:</b>"+'<div class="'+_e("label pull-right "+builder.state_class)+'">'+""+_e(builder.state)+'</div></div></ul><div data-dojo-attach-point="buildersgrid_node" class="buildersgrid"></div></div>';return _$output}catch(e){return"\n<pre class='error'>"+_e(e.stack)+"</pre>\n"}}return anonymous})