import { Component,OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	@ViewChild('myvideo') myVideo:any;
  peer;
  anotherid;
   mypeerid;
  
  cunstructor()
  { 
  
  }
  ngOnInit()
  {
	  let video =this.myVideo.nativeElement;
	  this.peer = new Peer({key: '1bt688xyr0xgk3xr'},{host: '172.21.12.235', port: 4200});
	  setTimeout(()=>{
		  this.mypeerid =this.peer.id;
	  },3000);
	  
	 this.peer.on('connection', function(conn) {
  conn.on('data', function(data){
   
    console.log(data);
  });
});
var n = <any>navigator;
     n.getUsermedia = n.getUserMedia ||n.webkitGetUserMedia ||n.mozGetUserMedia;
this.peer.on('call',function(call){
	n.getUserMedia({video:true, audio:true},function(stream){
	call.answer(stream);
call.on('stream',function(remotestream){
	video.src =URL.createObjectURL(remotestream);
 video.play();
 
	});
	},function(err){
		console.log('failed',err);
	} );
});

	 
	 }
connect()
{
	var conn =this.peer.connect('this.anotherid');
conn.on('open', function(){
  conn.send('message from that id');
});
}
videoconnect()
{
	let video =this.myVideo.nativeElement;
	var localvar = this.peer;
	var fname    = this.anotherid;
	//var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
  var n = <any>navigator;
     n.getUsermedia = n.getUserMedia ||n.webkitGetUserMedia ||n.mozGetUserMedia;
n.getUserMedia({video: true,audio:true},function(stream) {
var call=localvar.call(fname,stream);
call.on('stream',function(remotestream){
video.src = URL.createObjectURL(remotestream);
video.play();
});
},function(err){
	console.log('failed to get stream',err);
});   
}
}	
