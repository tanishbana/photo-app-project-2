function preload()
{

}

function setup()
    {
        canvas = createCanvas(640,480);
        canvas.position(640,480);
video = createCapture(VIDEO);
tint_color="";
    }
    function draw()
    {
        image=(video,640,480,640,480)
        tint=(tint_color)
    }

    function take_snapshot(){
        save('student_name.png')
    }

    function filter_tint(){
        tint_color = document.getElementById("color_name").value
    }