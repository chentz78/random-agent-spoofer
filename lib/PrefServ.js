var PrefServ = require("sdk/preferences/service");


exports.getter =function(preference){
	return PrefServ.get(preference);
};

exports.setter = function(preference,value){
	PrefServ.set(preference,value);
};

exports.resetter = function(preference){
	PrefServ.reset(preference);
};


exports.resetExtras = function(){

	PrefServ.reset("dom.storage.enabled");
	PrefServ.reset("browser.cache.memory.enable");
	PrefServ.reset("browser.cache.memory.disk");
	PrefServ.reset("browser.sessionhistory.max_entries");
	PrefServ.reset("browser.display.use_document_fonts");
	PrefServ.reset("geo.enabled");
	PrefServ.reset("geo.wifi.uri");
	PrefServ.reset("network.dns.disablePrefetch");
	PrefServ.reset("network.prefetch-next");
	PrefServ.reset("places.history.enabled");
};

exports.setExtras = function(){

	if (PrefServ.get("extensions.agentSpoof.dom") == true){
    	PrefServ.set("dom.storage.enabled",false);
  	}
  	if (PrefServ.get("extensions.agentSpoof.geo") == true){
    	PrefServ.set("geo.enabled",false);
      	PrefServ.set("geo.wifi.uri","");
  	}
  	if (PrefServ.get("extensions.agentSpoof.cache") == true){
    	PrefServ.set("browser.cache.memory.enable", false);
      	PrefServ.set("browser.cache.memory.disk", false);
  	}
  	if (PrefServ.get("extensions.agentSpoof.tabHistory") == true){
    	PrefServ.set("browser.sessionhistory.max_entries",2);
  	}
  	if (PrefServ.get("extensions.agentSpoof.fonts") == true){
      	PrefServ.set("browser.display.use_document_fonts",0);
  	}
  	if (PrefServ.get("extensions.agentSpoof.dns") == true){
      	PrefServ.set("network.dns.disablePrefetch",true);
  	}
  	if (PrefServ.get("extensions.agentSpoof.link") == true){
	    PrefServ.set("network.prefetch-next",false);
  	}
	if(PrefServ.get("extensions.agentSpoof.browsingHistory") == true){
  		PrefServ.set("places.history.enabled",false);
  	}

};


//Reset any UA related attributes
exports.resetAgentInfo =function(){

	PrefServ.reset("general.appname.override");
  	PrefServ.reset("general.platform.override");
  	PrefServ.reset("general.appversion.override");
  	PrefServ.reset("general.useragent.vendorsub");
  	PrefServ.reset("general.useragent.vendor");
  	PrefServ.reset("general.useragent.override");
  	PrefServ.reset("general.oscpu.override");
  	PrefServ.reset("general.buildID.override");
  	PrefServ.reset("network.http.accept.default");
  	PrefServ.reset("network.http.accept-encoding");
  	PrefServ.reset("intl.accept_languages");

};

exports.createPrefs = function(){

	//create prefs if they are not set
	if (!(PrefServ.has("extensions.agentSpoof.enabled"))) {
		PrefServ.set("extensions.agentSpoof.enabled", false);
	}
	if (!(PrefServ.has("extensions.agentSpoof.timeInterval"))){
		PrefServ.set("extensions.agentSpoof.timeInterval", "none");
	}
	if (!(PrefServ.has("extensions.agentSpoof.uaChosen"))){
		PrefServ.set("extensions.agentSpoof.uaChosen", "default");
	}
	if (!(PrefServ.has("extensions.agentSpoof.notify"))){
		PrefServ.set("extensions.agentSpoof.notify", true);
	}
	if (!(PrefServ.has("extensions.agentSpoof.dom"))){
		PrefServ.set("extensions.agentSpoof.dom", false);
	}
	if (!(PrefServ.has("extensions.agentSpoof.cache"))){
		PrefServ.set("extensions.agentSpoof.cache", false);
	}
	if (!(PrefServ.has("extensions.agentSpoof.tabHistory"))){
		PrefServ.set("extensions.agentSpoof.tabHistory", false);
	}
	if (!(PrefServ.has("extensions.agentSpoof.fonts"))){
		PrefServ.set("extensions.agentSpoof.fonts", false);
	}
	if (!(PrefServ.has("extensions.agentSpoof.geo"))){
		PrefServ.set("extensions.agentSpoof.geo", false);
	}
	if (!(PrefServ.has("extensions.agentSpoof.xff"))){
		PrefServ.set("extensions.agentSpoof.xff", false);
	}
	if (!(PrefServ.has("extensions.agentSpoof.via"))){
		PrefServ.set("extensions.agentSpoof.via", false);
	}
	if (!(PrefServ.has("extensions.agentSpoof.ifnone"))){
		PrefServ.set("extensions.agentSpoof.ifnone",false);
	}
	if (!(PrefServ.has("extensions.agentSpoof.dns"))){
		PrefServ.set("extensions.agentSpoof.dns",false);
	}
	if (!(PrefServ.has("extensions.agentSpoof.link"))){
		PrefServ.set("extensions.agentSpoof.link",false);
	}
	if (!(PrefServ.has("extensions.agentSpoof.acceptDefault"))){
		PrefServ.set("extensions.agentSpoof.acceptDefault",false);
	}
	if (!(PrefServ.has("extensions.agentSpoof.acceptEncoding"))){
		PrefServ.set("extensions.agentSpoof.acceptEncoding",false);
	}
	if (!(PrefServ.has("extensions.agentSpoof.acceptLang"))){
		PrefServ.set("extensions.agentSpoof.acceptLang",false);
	}
	if (!(PrefServ.has("extensions.agentSpoof.xffdd"))){
		PrefServ.set("extensions.agentSpoof.xffdd","random");
	}
	if (!(PrefServ.has("extensions.agentSpoof.viadd"))){
		PrefServ.set("extensions.agentSpoof.viadd","random");
	}
	if (!(PrefServ.has("extensions.agentSpoof.xffip"))){
		PrefServ.set("extensions.agentSpoof.xffip","1.1.1.1");
	}
	if (!(PrefServ.has("extensions.agentSpoof.viaip"))){
		PrefServ.set("extensions.agentSpoof.viaip","1.1.1.1");
	}
	if (!(PrefServ.has("extensions.agentSpoof.browsingHistory"))){
		PrefServ.set("extensions.agentSpoof.browsingHistory",false);
	}
	if (!(PrefServ.has("extensions.agentSpoof.tzOffset"))){
		PrefServ.set("extensions.agentSpoof.tzOffset","default");
	}
	if (!(PrefServ.has("extensions.agentSpoof.screenSize"))){
		PrefServ.set("extensions.agentSpoof.screenSize","default");
	}
	if (!(PrefServ.has("extensions.agentSpoof.excludeList"))){
		PrefServ.set("extensions.agentSpoof.excludeList","abU,abV"); //exclude IE6,IE7 from random selection by default
	}
	if (!(PrefServ.has("extensions.agentSpoof.randomDesktopCount"))){
		PrefServ.set("extensions.agentSpoof.randomDesktopCount",2); //number of excluded desktop profiles
	}
	if (!(PrefServ.has("extensions.agentSpoof.randomOtherCount"))){
		PrefServ.set("extensions.agentSpoof.randomOtherCount",0); //number of the rest of the profiles
	}
	if (!(PrefServ.has("extensions.agentSpoof.totalRandomDesktopCount"))){
		PrefServ.set("extensions.agentSpoof.totalRandomDesktopCount",228); //total number of available desktop profiles
	}
	if (!(PrefServ.has("extensions.agentSpoof.totalRandomAllCount"))){
		PrefServ.set("extensions.agentSpoof.totalRandomAllCount",373); //total number of available other profiles
	}

};

exports.resetPrefs = function(){
	
	PrefServ.reset("extensions.agentSpoof.enabled");
    PrefServ.reset("extensions.agentSpoof.timeInterval"); 
    PrefServ.reset("extensions.agentSpoof.uaChosen");
    PrefServ.reset("extensions.agentSpoof.notify");
    PrefServ.reset("extensions.agentSpoof.fonts");
    PrefServ.reset("extensions.agentSpoof.tabHistory");
    PrefServ.reset("extensions.agentSpoof.dom");
    PrefServ.reset("extensions.agentSpoof.cache");
    PrefServ.reset("extensions.agentSpoof.geo");
    PrefServ.reset("extensions.agentSpoof.xff");
    PrefServ.reset("extensions.agentSpoof.via");
    PrefServ.reset("extensions.agentSpoof.ifnone");
    PrefServ.reset("extensions.agentSpoof.dns");
    PrefServ.reset("extensions.agentSpoof.link");
    PrefServ.reset("extensions.agentSpoof.acceptDefault");
    PrefServ.reset("extensions.agentSpoof.acceptEncoding");
    PrefServ.reset("extensions.agentSpoof.acceptLang");
	PrefServ.reset("extensions.agentSpoof.xffdd");
	PrefServ.reset("extensions.agentSpoof.viadd");
	PrefServ.reset("extensions.agentSpoof.xffip");
	PrefServ.reset("extensions.agentSpoof.viaip");
	PrefServ.reset("extensions.agentSpoof.browsingHistory");
	PrefServ.reset("extensions.agentSpoof.tzOffset");
	PrefServ.reset("extensions.agentSpoof.screenSize");
	PrefServ.reset("extensions.agentSpoof.excludeList");
	PrefServ.reset("extensions.agentSpoof.randomDesktopCount");
	PrefServ.reset("extensions.agentSpoof.randomOtherCount");
	PrefServ.reset("extensions.agentSpoof.totalRandomDesktopCount");
	PrefServ.reset("extensions.agentSpoof.totalRandomAllCount");
};

exports.setProfilePrefs = function(key,value){
	
	//set the spoofed profile attributes
	if(key == "appname")
		PrefServ.set("general.appname.override",value);
	else if(key == "platform")
		PrefServ.set("general.platform.override",value);
	else if(key == "appversion")
		PrefServ.set("general.appversion.override",value);
	else if(key == "vendor")
		PrefServ.set("general.useragent.vendor",value);
	else if(key == "vendorsub")
		PrefServ.set("general.useragent.vendorsub",value);
	else if(key == "oscpu")
		PrefServ.set("general.oscpu.override",value);
	else if(key == "buildID")
		PrefServ.set("general.buildID.override",value);
	else if(key == "useragent")
		PrefServ.set("general.useragent.override",value);
	else if(key == "accept_default" && PrefServ.get("extensions.agentSpoof.acceptDefault") == true)
		PrefServ.set("network.http.accept.default",value);
	else if(key == "accept_encoding" && PrefServ.get("extensions.agentSpoof.acceptEncoding") == true)
		PrefServ.set("network.http.accept-encoding",value);
	else if(key == "accept_lang" && PrefServ.get("extensions.agentSpoof.acceptLang") == true)
		PrefServ.set("intl.accept_languages",value);
};