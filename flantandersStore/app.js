(function(){
	var gems =
	[
		{
			name:'Azurite',
			price:'2.95',
			description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget molestie risus. Donec non nibh mattis, venenatis odio a, mollis ex. Etiam imperdiet orci id imperdiet sodales.',
			canPurchase:true,
				images:[
					"images/gem-01.gif",
      				"images/gem-03.gif",
      				"images/gem-04.gif"
				]
		},
		{
			name:'Pentagon Gem',
			price:'5.95',
			description:'Vivamus justo dolor, molestie sed pellentesque id, sodales id turpis. Vestibulum eu justo molestie, pulvinar ex sagittis, efficitur nibh.',
			canPurchase:false,
				images:[
					"images/gem-06.gif",
      				"images/gem-07.gif",
      				"images/gem-09.gif"
				]
		},
		{
			name:'Crazy Gem',
			price:'12.95', 
			description:'Proin nunc tellus, finibus interdum tortor quis, varius vehicula urna.',
			canPurchase:true,
				images:[
					 "images/gem-02.gif",
      				 "images/gem-05.gif",
      				 "images/gem-08.gif"
				]
		}
	];
	var app =angular.module('gemStore',[]);
	app.controller('StoreController',function(){
		this.products=gems;
	});
})();