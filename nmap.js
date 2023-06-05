var nmap = require('node-sudo-nmap');
 
nmap.nmapLocation = "E:/Softwares/Nmap/nmap.exe"; //default
 
//    Accepts array or comma separated string of NMAP acceptable hosts
var quickscan = new nmap.NmapScan("172.16.0.0/24", '-sn');//, { sudo: 'sudo' });

quickscan.on('complete', function(data){
  console.log(data);
});
 
quickscan.on('error', function(error){
  console.log(error);
});
 
quickscan.startScan();