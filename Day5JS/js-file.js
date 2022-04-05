
 function Point(x,y,x1,y1)
 {
     this.x = parseInt(x);
     this.y = parseInt(y);
     this.x1 = parseInt(x1);
     this.y1 = parseInt(y1);
     this.distanceTo = function()
      {
         return Math.sqrt((Math.pow(this.x1-this.x, 2))+(Math.pow(this.y1-this.y, 2)));
     }
  }

 var points = new Point ('5','10','10','8');
 console.log(points.distanceTo());
 
