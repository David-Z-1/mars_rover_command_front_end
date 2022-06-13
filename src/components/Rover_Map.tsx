import React,{useState,useEffect,useRef,useCallback} from 'react'
import axios from 'axios'
var x_previous: number;
//x_previous=5;
var y_previous: number;
//y_previous=5;
var rover_x: number;
var rover_y: number;
var alien_x: number;
var alien_y: number;
var color: string;

var id_rover_array = new Array<number>();
var id_alien_array = new Array<number>();

//force useEffect to render (useful because useRef will prevent the change being noticed)
export function useForceUpdate() {
  const [, setTick] = useState(0);
  const update = useCallback(() => {
    setTick(tick => tick + 1);
  }, [])
  return update;
}

//define canvas
interface CanvasProps {
    width: number;
    height: number;
}

//main function
const Rover_Map = ({ width, height }: CanvasProps) => {

    const forceUpdate = useForceUpdate();

    const [roverlocatex, setRoverlocateX] = useState<number[]>([0]);
    const [roverlocatey, setRoverlocateY] = useState<number[]>([0]);

    const [alienlocatex, setAlienlocateX] = useState<number[]>([0]);
    const [alienlocatey, setAlienlocateY] = useState<number[]>([0]);
    const [aliencolor, setAliencolor] = useState<string[]>([]);

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {

        //obtain coordinates from database --------- rover location
        const FetchRoverData = async () => {
            try {
                const res = await axios.get('http://localhost:8000/rover')

                setRoverlocateX((res.data)[0]['x-axis'])
                setRoverlocateY((res.data)[0]['y-axis'])

                // if(id_rover_array.indexOf((res.data)[0]['id']) == -1){
                //     console.log("rover id update")
                //     id_rover_array.push((res.data)[0]['id'])
                //     forceUpdate();
                // }
                // else {
                //     console.log("rover id exist")
                // }
            } 
            catch (error) {
                console.log(error)
            }
        }

        //obtain coordinates from database --------- alien location
        const FetchAlienData = async () => {
            try {
                const res1 = await axios.get('http://localhost:8000/mapalien')
                setAlienlocateX((res1.data)[0]['x-axis'])
                setAlienlocateY((res1.data)[0]['y-axis'])
                setAliencolor((res1.data)[0]['color'])
                // if(id_alien_array.indexOf((res1.data)[0]['id']) == -1){
                //     forceUpdate();
                //     id_alien_array.push((res1.data)[0]['id'])
                // }
                // else {
                //     console.log("alien id exist")
                // }
            }
            catch (error) {
                console.log(error)
            }
        }

        //obtain coordinates where image is displayed --------- rover location
        var roverlocate_x = roverlocatex.toString().split("")
        var roverlocate_y = roverlocatey.toString().split("")
        if (rover_x!==5+parseInt(roverlocate_x.join("")) || rover_y!==5+parseInt(roverlocate_y.join("")) ){
           // if (5+parseInt(roverlocate_x.join(""))-x_previous>=20 || 5+parseInt(roverlocate_y.join(""))-y_previous>=20 ) {
            x_previous=rover_x
            y_previous=rover_y}
        //}
        rover_x = 5+parseInt(roverlocate_x.join(""))    //+5: make sure full image/circle is displayed
        rover_y = 5+parseInt(roverlocate_y.join(""))

        //obtain coordinates where image is displayed --------- alien location
        var alienlocate_x = alienlocatex.toString().split("")
        var alienlocate_y = alienlocatey.toString().split("")
        alien_x = 5+parseInt(alienlocate_x.join(""))
        alien_y = 5+parseInt(alienlocate_y.join(""))
        var alien_color = aliencolor.toString().split("")
        color = alien_color.join("")


        //clear previous image & draw new image --------- rover location
        if (canvasRef.current) {
            var canvas = canvasRef.current;
            var rover_position = canvas.getContext('2d');  
            var tmp = {     //use to resize image
                width: 0,
                height:0 }
            forceUpdate();
            var img = new Image();
            img.src = 'image.png';
            tmp.width=Math.floor(img.width * 0.03)
            tmp.height=Math.floor(img.height * 0.03)
            rover_position!.clearRect(x_previous, y_previous, tmp.width, tmp.height);
            console.log('clear: x_pre-',x_previous, 'y_pre-', y_previous)  // for debug
            img.onload = function() {
                // if(rover_x!==5 && rover_y!==5){
                // if (rover_x-x_previous>=20 || rover_y-y_previous>=20 || rover_y==5 && rover_x==5 ) {
                    rover_position!.drawImage(img, rover_x, rover_y, tmp.width,  tmp.height);
                    console.log('draw: x-',rover_x, 'y-', rover_y);  // for debug
                //}
            };
            //console.log('image width * height', tmp.width, tmp.height);
           

            //clear previous image & draw new image --------- alien location
            if(rover_position && (alien_x!=5 || alien_y!=5)){
                rover_position.beginPath();
                rover_position.arc(alien_x, alien_y, 5, 0, 2*Math.PI);
                console.log('color', color);  // for debug
                rover_position.fillStyle = color
                rover_position.fill();
                rover_position.stroke();
            }   else {console.log('error loading context')}

        }       
        FetchRoverData()
        FetchAlienData()
    } );

    return (
        <div>
            <canvas ref={canvasRef} height={height} width={width} />
            {/* <h1> {roverlocatex}, {roverlocatey} </h1>*/}
        </div>
    );
};

//canvas size
Rover_Map.defaultProps = {
    width: 400,
    height: 500,
};

export default Rover_Map;