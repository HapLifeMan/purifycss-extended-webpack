var purify = require('purify-css');

module.exports = function(input){
  if(typeof this._compilation._purifycss_content === 'undefined'){
    console.log('SEE ME PLEASE');
    return input;
  }
  
  var content = this._compilation._purifycss_content;
  // this._compilation._purifycss_callback();

  return purify(content, input);
};