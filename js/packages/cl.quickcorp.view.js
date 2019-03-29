"use strict";

Package('cl.quickcorp.view',[
	Class('MainContainer',Object,{
		__new__:function (){
			//TODO: Implement
			console.log('Main Canvas Initialized');
		}
	}),
	Class('ContactFormView',Object,{
		sponsors:New(ArrayCollection),
		service:null,
		lastLogoUploaded:null,
		previewLogoChanged:function (){
			var preview = Tag('#logoPreview')[0];
		  var file    = Tag('#logoFile')[0].files[0];
		  var reader  = new FileReader();

		  reader.onloadend = function () {
		    preview.src = reader.result;
				GLOBAL.contactFormViewInstance.lastLogoUploaded=reader.result;
		  }

		  if (file) {
		    reader.readAsDataURL(file);
		  } else {
		    preview.src = "";
		  }
		},
		_new_:function (o){
			//TODO: Implement

			this.component = o.component;
			logger.debug('Contact Form View Initialized');
			GLOBAL.previewLogoChanged=this.previewLogoChanged;
			GLOBAL.subscribeSponsor=this.subscribeSponsor;
			GLOBAL.contactFormViewInstance = this;
			Tag('component[name=progressbar]')[0].style.display='none';
			Tag('component[name=thankyou]')[0].style.display='none';
			Tag('component[name=contact_form_fields]')[0].style.display='block';

		},
		done:function (){
			CONTACTVIEW = this;
			var component = this.component;

		},
		getSponsorsList:function (){
			this.sponsors=New(ArrayCollection);
			var view=this;
			firebase.firestore().collection("companies").get().then(
				function (q){
					q.forEach(function (doc){
						view.sponsors.push(doc.data());
					})});
		},
		watchSponsorsListChanges:function (){
			var view=this;
			var db = firebase.firestore();
			db.collection("companies").onSnapshot(function(querySnapshot) {
			        view.sponsors = New(ArrayCollection);
			        querySnapshot.forEach(function(doc) {
			            view.sponsors.push(doc.data());
			        });
			    });
		},
		subscribeSponsor: function (){
			Tag('component[name=progressbar]')[0].style.display='block';
			Tag('component[name=contact_form_fields]')[0].style.display='none';
			Tag('component[name=thankyou]')[0].style.display='none';
			logger.debug('SUBSCRIBING THE SPONSOR');
			var component = GLOBAL.contactFormViewInstance.component;
			component.executeBindings(); //recovers component form data
			var data = component.data;
			data.lastLogoUploaded = GLOBAL.contactFormViewInstance.lastLogoUploaded;
			logger.debug(component);

			GLOBAL.loadFirebase();

			var newSponsorRef = firebase.firestore().collection("companies").doc();
			newSponsorRef.set(data).then(function (){
				Tag('component[name=progressbar]')[0].style.display='none';
				Tag('component[name=contact_form_fields]')[0].style.display='none';
				Tag('component[name=thankyou]')[0].style.display='block';
			});

		}
	}),
]);
var CONTACT;
var CONTACTFORMFIELDS;
var CONTACTVIEW;
