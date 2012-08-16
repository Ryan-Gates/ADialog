//A simple plug for creating a pop window that contains a form

//todo: create form listiner
var $ADailog;
function getbuttions(options)
{
	//do logic to figure out if there are any buttons in the options
	
	// if form is true
	
	// but submit is undifened create a buttion for that
	
	//default button is just cancel
}
function setBinds()
{
}
(function( $ ) {

var methods ={
	
	// Options: url:string,buttons:data,title:string,form:bool, submit:element, post:bool, data:data
	init : function( options){
	debugger;
		if(options.url!==undefined)
		{
		$ADailog = $(this);
		$ADailog.data('options', options);

			if(options.post !==  undefined)
			{
					$.ajax({
						url:options.url
					}).done(function (data) {
						$ADailog.html(data);
						$ADailog.dailog();
					});
			}
			else
			{
				
			}
		}
		else
		{
			// $.error( You need to set the URL before create a dailog );
		}
	},
	destroy : function (){
	
	},
	submit: function(){
	
	},
	hide: function(){
	
	}
};

jQuery.fn.ADialog = function(method) {

	if ( methods[method] ) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.ADialog' );
    }  
};
})( jQuery );