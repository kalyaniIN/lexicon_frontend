function figure_Area(w, h, W, H) 
{
    var a1 = w * h;
    var a2 = parseInt(W) * parseInt(H);
    var a3 = Math.min(w, W) * Math.min(h, H);
    var area= a1+ a2 -a3;
    console.log(area);
}

 
figure_Area('2','4','5','3');
 






