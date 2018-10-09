var uColor = [0.10,1.0,0.10,1.0];
var gl;
var points;
var mSin;
var mCos;
var x
var y;

var direction = 0.0;
var judge = 1.0;
var uColorLoc;

var ux = 0.0;
var uy = 0.0;
var uxLoc;
var uyLoc;

var speed = 0.1;



window.onload = function init(){
var canvas = document.getElementById( "gl-canvas" );
gl = WebGLUtils.setupWebGL( canvas );
gl.enable(gl.DEPTH_TEST);
if ( !gl ) { alert( "WebGL isn't available" );
}
// Four Vertices
var vertices = [];
//head
for(var a=0; a<500; ++a)
{   
    mSin = Math.sin(a*2*Math.PI/500);
    x = -0.4+0.5*mSin;
    mCos = Math.cos(a*2*Math.PI/500);
    y = 0.5*mCos;
    vertices.push(x);
    vertices.push(y);
}  
//LEye
for(var a=0; a<500; ++a)
{   
    mSin = Math.sin(a*2*Math.PI/500);
    x = -0.4-0.27+0.20*mSin;
    mCos = Math.cos(a*2*Math.PI/500);
    y = 0.05+0.22*mCos;
    vertices.push(x);
    vertices.push(y);
}
//
for(var a=0; a<500; ++a)
{   
    mSin = Math.sin(a*2*Math.PI/500);
    x = -0.4-0.27+0.10*mSin;
    mCos = Math.cos(a*2*Math.PI/500);
    y = -0.04+0.12*mCos;
    vertices.push(x);
    vertices.push(y);
}

//REye
for(var a=0; a<500; ++a)
{   
    mSin = Math.sin(a*2*Math.PI/500);
    x = -0.4+0.16+0.20*mSin;
    mCos = Math.cos(a*2*Math.PI/500);
    y = -0.02+0.22*mCos;
    vertices.push(x);
    vertices.push(y);
}

for(var a=0; a<500; ++a)
{   
    mSin = Math.sin(a*2*Math.PI/500);
    x =-0.4+ 0.09+0.10*mSin;
    mCos = Math.cos(a*2*Math.PI/500);
    y = -0.04+0.11*mCos;
    vertices.push(x);
    vertices.push(y);
}
//Body
for(var a=0; a<500; ++a)
{   
    mSin = Math.sin(a*2*Math.PI/500);
        x = -0.4+0.13+0.30*mSin;
    mCos = Math.cos(a*2*Math.PI/500);
    y = -0.47+0.30*mCos;
    vertices.push(x);
    vertices.push(y);
}
for(var a=0; a<500; ++a)
{   
    mSin = Math.sin(a*2*Math.PI/500);
        x = -0.4+0.33+0.25*mSin;
    mCos = Math.cos(a*2*Math.PI/500);
    y = -0.63+0.25*mCos;
    vertices.push(x);
    vertices.push(y);
}
for(var a=0; a<500; ++a)
{   
    mSin = Math.sin(a*2*Math.PI/500);
        x =-0.4+ 0.57+0.25*mSin;
    mCos = Math.cos(a*2*Math.PI/500);
    y = -0.57+0.25*mCos;
    vertices.push(x);
    vertices.push(y);
}

for(var a=0; a<500; ++a)
{   
    mSin = Math.sin(a*2*Math.PI/500);
        x =-0.4+ 0.79+0.25*mSin;
    mCos = Math.cos(a*2*Math.PI/500);
    y = -0.57+0.25*mCos;
    vertices.push(x);
    vertices.push(y);
}
//Nose
for(var a=0; a<500; ++a)
{   
    mSin = Math.sin(a*2*Math.PI/500);
        x =-0.6+0.10*mSin;
    mCos = Math.cos(a*2*Math.PI/500);
    y = -0.24+0.10*mCos;
    vertices.push(x);
    vertices.push(y);
}
//Mouth
for(var a=0; a<500; ++a)
{   
    mSin = Math.sin(a*2*Math.PI/500);
        x =-0.6+0.03*mSin;
    mCos = Math.cos(a*2*Math.PI/500);
    y = -0.29+0.08*mCos;
    vertices.push(x);
    vertices.push(y);
}
//Body
for(var a=0; a<500; ++a)
{   
    mSin = Math.sin(a*2*Math.PI/500);
        x =-0.4+ 0.99+0.25*mSin;
    mCos = Math.cos(a*2*Math.PI/500);
    y = -0.57+0.25*mCos;
    vertices.push(x);
    vertices.push(y);
}
//Eye
for(var a=0; a<500; ++a)
{   
    mSin = Math.sin(a*2*Math.PI/500);
    x = -0.4-0.19+0.05*mSin;
    mCos = Math.cos(a*2*Math.PI/500);
    y = -0.05+0.07*mCos;
    vertices.push(x);
    vertices.push(y);
}
for(var a=0; a<500; ++a)
{   
    mSin = Math.sin(a*2*Math.PI/500);
    x = -0.4+0.03+0.05*mSin;
    mCos = Math.cos(a*2*Math.PI/500);
    y = -0.06+0.07*mCos;
    vertices.push(x);
    vertices.push(y);
}
//Antenna
mSin = Math.sin(15*2*Math.PI/500);
    x = -0.4+0.5*mSin;
    mCos = Math.cos(15*2*Math.PI/500);
    y = 0.5*mCos;
    vertices.push(x);
    vertices.push(y);
    y= y+0.3;
    vertices.push(x);
    vertices.push(y);
    var w=x;
    var z=y;
    for(var a=0; a<500; ++a)
{   
    mSin = Math.sin(a*2*Math.PI/500);
    x = w-0.05+0.05*mSin;
    mCos = Math.cos(a*2*Math.PI/500);
    y = z+0.07*mCos;
    vertices.push(x);
    vertices.push(y);
}


mSin = Math.sin(-15*2*Math.PI/500);
    x = -0.4+0.5*mSin;
    mCos = Math.cos(15*2*Math.PI/500);
    y = 0.5*mCos;
    vertices.push(x);
    vertices.push(y);
    y= y+0.3;
    vertices.push(x);
    vertices.push(y);
   w=x;
   z=y;
    for(var a=0; a<500; ++a)
{   
    mSin = Math.sin(a*2*Math.PI/500);
    x = w-0.05+0.05*mSin;
    mCos = Math.cos(a*2*Math.PI/500);
    y = z+0.07*mCos;
    vertices.push(x);
    vertices.push(y);
}

//foot    
    x = -0.4+0.33+0.25;
    y = -0.63-0.25;
    vertices.push(x);
    vertices.push(y);
    x=x - 0.2;
    y=y - 0.3;
    vertices.push(x);
    vertices.push(y);
for(var a=0; a<500; ++a)
{   
    mSin = Math.sin(a*2*Math.PI/500);
        x =-0.4+ 0.57+0.25*mSin;
    mCos = Math.cos(a*2*Math.PI/500);
    y = -0.57+0.25*mCos;
    vertices.push(x);
    vertices.push(y);
}

for(var a=0; a<500; ++a)
{   
    mSin = Math.sin(a*2*Math.PI/500);
        x =-0.4+ 0.79+0.25*mSin;
    mCos = Math.cos(a*2*Math.PI/500);
    y = -0.57+0.25*mCos;
    vertices.push(x);
    vertices.push(y);
}
for(var a=0; a<500; ++a)
{   
    mSin = Math.sin(a*2*Math.PI/500);
        x =-0.4+ 0.99+0.25*mSin;
    mCos = Math.cos(a*2*Math.PI/500);
    y = -0.57+0.25*mCos;
    vertices.push(x);
    vertices.push(y);
}



// Configure WebGL
gl.viewport( 0, 0, canvas.width, canvas.height );
gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
// Load shaders and initialize attribute buffers
var program = initShaders( gl, "vertex-shader", "fragment-shader" );
gl.useProgram( program );
// Load the data into the GPU
var bufferId = gl.createBuffer();
gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW );
// Associate out shader variables with our data buffer
var vPosition = gl.getAttribLocation( program, "vPosition" );
uColorLoc = gl.getUniformLocation( program, "uColor");
uxLoc = gl.getUniformLocation( program, "ux");
uyLoc = gl.getUniformLocation( program, "uy");

gl.uniform1f(uxLoc, ux);
gl.uniform1f(uyLoc, uy);

gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
gl.enableVertexAttribArray( vPosition );


document.getElementById("Controls").onclick = function( event) {
        switch(event.target.index) {
          case 0:
            direction = 1.0;
            break;

         case 1:
            direction = 2.0;
            break;

         case 2:
            direction = 3.0;
            break;
         case 3:
            direction = 0.0;
            break;
       }
    };


window.onkeydown = function( event ) {
        var key = String.fromCharCode(event.keyCode);
        switch( key ) {
          case '1':
            direction = 1.0;
            break;

         case '2':
            direction = 2.0;
            break;

         case '3':
            direction = 3.0;
            break;
     
         case '4':
            direction = 0.0;
            break;
        }
    };



render();
};





function render() {
gl.clear( gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT );

switch(direction) {
          case 0.0:
             ux = 0.0;
             uy = 0.0;
             gl.uniform1f(uxLoc, ux);  
             gl.uniform1f(uyLoc, uy);             
             
            
            break;

          case 1.0:
             if(ux>-1.0){
                ux-=0.01;
                gl.uniform1f(uxLoc, ux);             
             }
            
            break;

         case 2.0:
             if(ux<1.0){
                ux+=0.01;
                gl.uniform1f(uxLoc, ux);             
             }
            
            break;

         case 3.0:  
            if (speed<=-0.095)
              speed = 0.1;
                                                      
            speed -=0.005;  
            uy += speed;
                                                     
            gl.uniform1f(uyLoc, uy);           
            break;

        
       }

uColor = [0.0,0.0,0.0,1.0];
gl.uniform4f(uColorLoc, uColor[0],uColor[1],uColor[2],uColor[3]);

gl.drawArrays( gl.TRIANGLE_FAN, 6000, 500);
gl.drawArrays( gl.TRIANGLE_FAN, 6500, 500);
uColor = [1.0,1.0,1.0,1.0];
gl.uniform4f(uColorLoc, uColor[0],uColor[1],uColor[2],uColor[3]);

gl.drawArrays( gl.TRIANGLE_FAN, 1000, 500);
gl.drawArrays( gl.TRIANGLE_FAN, 2000, 500);



uColor = [1.0,0.4,0.6,1.0];
gl.uniform4f(uColorLoc, uColor[0],uColor[1],uColor[2],uColor[3]);

gl.drawArrays( gl.TRIANGLE_FAN, 5000, 500);

uColor = [0.0,0.0,0.0,1.0];
gl.uniform4f(uColorLoc, uColor[0],uColor[1],uColor[2],uColor[3]);
gl.drawArrays(gl.LINES,4500,125);
gl.drawArrays(gl.LINES,4825,175);
uColor = [0.0,0.0,0.0,1.0];
gl.uniform4f(uColorLoc, uColor[0],uColor[1],uColor[2],uColor[3]);
gl.drawArrays( gl.TRIANGLE_FAN, 500, 500);
gl.drawArrays( gl.TRIANGLE_FAN, 1500, 500);


 uColor = [0.10,1.0,0.10,1.0];
gl.uniform4f(uColorLoc, uColor[0],uColor[1],uColor[2],uColor[3]);
gl.drawArrays( gl.TRIANGLE_FAN, 0, 500);
uColor = [0.0,0.0,0.0,1.0];
gl.uniform4f(uColorLoc, uColor[0],uColor[1],uColor[2],uColor[3]);
gl.drawArrays(gl.LINE_LOOP,0,500);

uColor = [0.30,1.0,0.30,1.0];
gl.uniform4f(uColorLoc, uColor[0],uColor[1],uColor[2],uColor[3]);
gl.drawArrays( gl.TRIANGLE_FAN, 2500, 500);
uColor = [0.0,0.0,0.0,1.0];
gl.uniform4f(uColorLoc, uColor[0],uColor[1],uColor[2],uColor[3]);
gl.drawArrays(gl.LINE_LOOP,2500,500);

uColor = [0.05,1.0,0.05,1.0];
gl.uniform4f(uColorLoc, uColor[0],uColor[1],uColor[2],uColor[3]);
gl.drawArrays( gl.TRIANGLE_FAN, 3000, 500);
uColor = [0.0,0.0,0.0,1.0];
gl.uniform4f(uColorLoc, uColor[0],uColor[1],uColor[2],uColor[3]);
gl.drawArrays(gl.LINE_LOOP,3000,500);


uColor = [0.05,1.0,0.05,1.0];
gl.uniform4f(uColorLoc, uColor[0],uColor[1],uColor[2],uColor[3]);
gl.drawArrays( gl.TRIANGLE_FAN, 3500, 500);
uColor = [0.0,0.0,0.0,1.0];
gl.uniform4f(uColorLoc, uColor[0],uColor[1],uColor[2],uColor[3]);
gl.drawArrays(gl.LINE_LOOP,3500,500);

uColor = [0.05,1.0,0.05,1.0];
gl.uniform4f(uColorLoc, uColor[0],uColor[1],uColor[2],uColor[3]);
gl.drawArrays( gl.TRIANGLE_FAN, 4000, 500);
uColor = [0.0,0.0,0.0,1.0];
gl.uniform4f(uColorLoc, uColor[0],uColor[1],uColor[2],uColor[3]);
gl.drawArrays(gl.LINE_LOOP,4000,500);

uColor = [0.05,1.0,0.05,1.0];
gl.uniform4f(uColorLoc, uColor[0],uColor[1],uColor[2],uColor[3]);
gl.drawArrays( gl.TRIANGLE_FAN, 5500, 500);
uColor = [0.0,0.0,0.0,1.0];
gl.uniform4f(uColorLoc, uColor[0],uColor[1],uColor[2],uColor[3]);
gl.drawArrays(gl.LINE_LOOP,5500,500);

gl.drawArrays(gl.LINE_LOOP,7000,2);
gl.drawArrays(gl.LINE_LOOP,7002,500);
gl.drawArrays(gl.LINE_LOOP,7502,2);
gl.drawArrays(gl.LINE_LOOP,7504,500);
       
        requestAnimationFrame( render );      
   

}