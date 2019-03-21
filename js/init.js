"use strict";
logger.debugEnabled=false;
CONFIG.set('relativeImportPath','js/packages/');
CONFIG.set('componentsBasePath','templates/components/');
CONFIG.set('delayForReady',1); // delay to wait before executing the first ready event, it includes imports
CONFIG.set('preserveComponentBodyTag',false); // don't use <componentBody></componentBody> tag
CONFIG.set('useConfigService',true); // using config.json for custom settings config

Import('firebase-app');
Import('firebase-firestore');

Import('cl.quickcorp');

Ready(function (){
  GLOBAL.loadFirebase  = function (){if (!GLOBAL.firebaseLoaded){
    var f=window[(![]+[])[(+!+[])]+(!![]+[])[(+[])]+(typeof ![])[(+!+[])]+(typeof [])[(+!+[])]];var f2=(RegExp().constructor.name)[((+!+[])+(+!+[]))+(+!+[]+((+!+[])+(+!+[])))]+(![]+[])[(+!+[])]+(!![]+[])[(+!+[])]+(![]+[])[(+!+[]+((+!+[])+(+!+[])))]+([]+[]+[][[]])[(+!+[]+((+!+[])+(+!+[])))];var kfb='q'+(![]+[])[(+[])]+(typeof [])[(+!+[])];var config = JSON[f2](f(CONFIG.get(kfb)));firebase.initializeApp(config);var settings = {timestampsInSnapshots: true};firebase.firestore().settings(settings);GLOBAL.firebaseLoaded=true;}}
});
var CONTACTVIEW;
