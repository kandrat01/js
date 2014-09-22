$.fn.simpSelect = function(options){
	if(typeof(options)=='undefined'){
		options={};
	}
	if(options=='refresh'){
		
	}
	
	if(typeof(options.class)=='undefined'){
		options.class ="";
	}
	options.class+= ' simpSelectCont';
	var searchBox = $("<input class='form-control input-sm simpSelectSearch' />");
	var simpSelectObj={};
	
	var txt  = "";
	
	this.find('option').each(function(){
	     txt+="<li class='"+$(this).attr('class')+"'><a class='simpSelectItm' data_val='"+$(this).attr('value')+"'>"+$(this).text()+"</a></li>";
	});

	var container = $( "<div class='"+options.class+" collapsed' ></div>");
		container.append("<span class='icon  toggle-simpSelect'></span>");
		container.append(searchBox);

	var list = "<ul class='simpSelectList'>{{cont}}</ul>";	
		list= list.replace("{{cont}}",txt);
		list = $(list);	

	container.append(list);
	this.after(container);
	this.hide();
	var currentSelectBox = this; 

	simpSelectObj  = {
		'selectElement' : currentSelectBox,
		'container' : container,
		'list'		:list,
		'searchBox':searchBox,
		clear:function(){
				this.list.find('li').show();			
		},
		search:function(val){
			val = val.trim();
			val = val.toLowerCase();
			if(val==''){
				this.clear();
			}
			this.showList();
			this.list.find('li').each(function(){
				var curr_txt = $(this).text();
					curr_txt = curr_txt.toLowerCase();
				if(curr_txt.indexOf(val)== -1){
					$(this).hide();
				}else{
					$(this).show();
				}
			});
		},
		setValue:function(value, text){
			text = text.trim();
			this.selectElement.val(value);
			this.searchBox.val(text);
			this.hideList();
		}
	};
	simpSelectObj.hideList = function(){
		simpSelectObj.list.slideUp(250,function(){
			simpSelectObj.container.removeClass('expanded').addClass('collapsed');				
			simpSelectObj.clear();
		});
	};
	simpSelectObj.showList=function(){
			simpSelectObj.list.slideDown(250,function(){
				simpSelectObj.container.removeClass('collapsed').addClass('expanded');	
				simpSelectObj.clear();
			});
	};
	/*
	 * set events
	 */
	$(document).on('click','.toggle-simpSelect',function(){
		if(simpSelectObj.list.is(":visible")){
			simpSelectObj.hideList();
		}else{
			simpSelectObj.showList();
		}
	});

	$(document).click(function(e) {
		var target = e.target;
		if (!$(target).parents().is('.simpSelectCont')){
			simpSelectObj.hideList();
		}
	});
	simpSelectObj.searchBox.keyup(function(){
		simpSelectObj.search($(this).val());	
	});
	$(document).on('click','.simpSelectItm',function(){
		var val = $(this).attr('data_val');
		var txt = $(this).text();
		simpSelectObj.setValue(val,txt);
		if(typeof(options.select)=='function'){
			options.select(val,txt);
		}
	});
	return simpSelectObj;
};