"use strict";
Package('cl.quickcorp.controller',[
	Class('MainController',Object,{
		component:null,
		_new_:function (o){
			logger.debug('MainController Element Initialized');
			this.component = o.component;
		},
		done: function (){

		}
	}),
	Class('SideNavController',Object,{
		_new_:function (){
			//TODO: Implement
			logger.debug('SideNavController Element Initialized');
			this.component = Tag('component[name="nav"]')[0].Cast(Component);
		}
	}),
	Class('ProgressBarController',Object,{
		_new_:function (){
			//TODO: Implement
			logger.debug('ProgressBarController Element Initialized');
		},
		done: function (){
				this.component.body.style.display='none';
				this.component.body.setAttribute('loaded',true);
		}
	}),
	Class('ThankyouController',Object,{
		_new_:function (){
			//TODO: Implement
			logger.debug('ThankyouController Element Initialized');
		},
		done: function (){
				this.component.body.style.display='none';
				this.component.body.setAttribute('loaded',true);
		}
	}),
	Class('GridBoxController',Object,{
		component: null,
		processbar:null,
		thankyou:null,
		dependencies:[
			New(SourceJS,{external:false,url:'js/gallery.min.opt.js',done:function(){}})
    ],
		_new_:function (o){
			//TODO: Implement
			this.component = o.component;

		},
		done:function (){
			logger.debug('GridBoxController Element Initialized');
			this.component.body.setAttribute('loaded',true);

		}
	}),
	Class('CarouselController',Object,{
		component: null,
		processbar:null,
		thankyou:null,
		dependencies:[],
		_new_:function (o){
			//TODO: Implement
			this.component = o.component;

		},
		done:function (){
			logger.debug('GridBoxController Element Initialized');
			this.component.body.setAttribute('loaded',true);
			var controller = this;
			controller.dependencies.push(New(SourceJS,{external:false,url:'js/gallery.min.opt.js',done:function(){}}));

		}
	}),
	Class('ContactFormController',Object,{
		component: null,
		processbar:null,
		thankyou:null,
		done:function (){
			logger.debug('ContactFormController Element Initialized');
			this.component.body.setAttribute('loaded',true);

		},
		_new_:function (o){
			//TODO: Implement
			this.component = o.component;

		}
	}),

]);
