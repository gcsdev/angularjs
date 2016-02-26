(function(){
	var gems =
	[
		{
			name:'Azurite',
			price:'2.95',
			description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
			canPurchase:true,
			specifications:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.',
			reviews:'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.',
			images:
			[
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
			specifications:' At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.',
			reviews:'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam',
				images:[
					"images/gem-06.gif",
      				"images/gem-07.gif",
      				"images/gem-09.gif"
				]
		},
		{
			name:'Crazy Gem',
			price:'12.95', 
			description:'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',
			canPurchase:true,
			specifications:'Vel in, massa blandit parturient pede. Accumsan ultrices dui massa nunc in dignissim, id at est et, congue facilisis metus.',
			reviews:'Nisl wisi a vel, condimentum blandit amet odio turpis sed cras, non id nunc platea hac suscipit sed, nullam fusce aliquet. Auctor sit malesuada justo malesuada quis fusce.',
				images:[
					 "images/gem-02.gif",
      				 "images/gem-05.gif",
      				 "images/gem-08.gif"
				]
		}
	]

	var app = angular.module('gemStore',[]);
	app.controller('generalController',function(){
		this.products=gems;	
	});	
	app.controller('navController',function(){
		this.tab=1;
		this.setTab=function(newTab){
			this.tab=newTab;
		};
		this.isSelect=function(checkTab){
			return this.tab==checkTab;
		};
	});


})();



