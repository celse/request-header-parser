var express =  require("express"),
    app = express(),
    dataSyst= {};
    
    
app.get('/', function(req, res){
    
    var forwardedIpsStr = req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        language = req.headers["accept-language"],
        agent = req.headers['user-agent'],
        software = agent.slice(agent.indexOf('(') + 1, agent.indexOf(')'));
    
    if (forwardedIpsStr) {
        var IP = forwardedIpsStr;
        dataSyst['ipaddress'] = IP;
    }
    
    dataSyst['language'] = language.split(';')[0].split(',')[0];
    dataSyst['software'] = software;
    
    res.send(dataSyst);
    
});    
app.get('http://ipinfo.io', function(res){
        console.log(res.ip);
    });
app.listen('8080', function(){
	console.log('This app listen port 8080');
})