'use strict';
Package('org.quickcorp.custom.effects',[
  Class('MainTransitionEffect',Effect,{
    duration:385,
    defaultParams:{
      alphaFrom:0,
      alphaTo:1
    },
    _new_:function (o){
      logger.info('DECLARING MAIN EFFECT ');
      this.component.defaultParams = this.defaultParams;
    },
    apply: function ({alphaFrom,alphaTo}){
      logger.info('EXECUTING MAIN EFFECT ');
      this.component.body.height = this.component.body.offsetParent.scrollHeight;
      this.component.body.style.display = 'block';
      _super_('Fade','apply').call(this,this.component.body,alphaFrom,alphaTo);
      _super_('MoveYInFromBottom','apply').call(this,this.component.body);

    }
  })
]);
