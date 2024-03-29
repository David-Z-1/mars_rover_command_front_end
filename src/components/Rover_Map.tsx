import React,{useState,useEffect,useRef,useCallback} from 'react'
import axios from 'axios'
import moment from "moment"
var x_previous: number;
var y_previous: number;
var rover_x: number;
var rover_y: number;
var alien_x: number;
var alien_y: number;
var radar_x: number;
var radar_y: number;
var color: string;

var canvas_initial_offset: number;     // ensure @ (0,0) image of rover can fully displayed
canvas_initial_offset=5;
//x_previous=canvas_initial_offset;
//y_previous=canvas_initial_offset;

// var id_rover_array = new Array<number>();
// var id_alien_array = new Array<number>();

/* ------------- force useEffect to render (useful because useRef will prevent the change being noticed) ------------- */
export function useForceUpdate() {
  const [, setTick] = useState(0);
  const update = useCallback(() => {
    setTick(tick => tick + 1);
  }, [])
  return update;
}

/* -------------------------------------------------  define canvas  ------------------------------------------------- */
interface CanvasProps {
    width: number;
    height: number;
}

/* ----------------------------------------------  main function  start  ---------------------------------------------- */
const Map = ({ width, height }: CanvasProps) => {

    const forceUpdate = useForceUpdate();

    const [roverlocatex, setRoverlocateX] = useState<number[]>([0]);
    const [roverlocatey, setRoverlocateY] = useState<number[]>([0]);

    const [alienlocatex, setAlienlocateX] = useState<number[]>([0]);
    const [alienlocatey, setAlienlocateY] = useState<number[]>([0]);
    const [aliencolor, setAliencolor] = useState<string[]>([]);

    const [radarlocatex, setRadarlocateX] = useState<number[]>([0]);
    const [radarlocatey, setRadarlocateY] = useState<number[]>([0]);

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {

        const intervalId = setInterval(() => {

        /* ------------------------------   obtain data from database - rover location   ------------------------------ */
        const FetchRoverData = async () => {
            try {
                const res = await axios.get('https://us-central1-rover-back-end.cloudfunctions.net/rover_1')
                setRoverlocateX((res.data)[0])
                setRoverlocateY((res.data)[1])
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
                console.log("error @ FetchRoverData @ map", error)
            }
        }

        /* ------------------------------   obtain data from database - alien location   ------------------------------ */
        const FetchAlienData = async () => {
            try {
                const res1 = await axios.get('https://us-central1-rover-back-end.cloudfunctions.net/new_alien_app')
                setAlienlocateX((res1.data)['x-axis'])
                setAlienlocateY((res1.data)['y-axis'])
                setAliencolor((res1.data)['color'])
                console.log("check_alien_data", (res1.data)['color'])
                // if(id_alien_array.indexOf((res1.data)[0]['id']) == -1){
                //     forceUpdate();
                //     id_alien_array.push((res1.data)[0]['id'])
                // }
                // else {
                //     console.log("alien id exist")
                // }
            }
            catch (error) {
                console.log("error @ FetchAlienData @ map", error)
            }
        }

        const FetchRadarData = async () => {
            try {
                const res1 = await axios.get('https://us-central1-rover-back-end.cloudfunctions.net/radar')
                setRadarlocateX((res1.data)['x-axis'])
                setRadarlocateY((res1.data)['y-axis'])
                console.log("check_map_rover_data", (res1.data)['x-axis'], (res1.data)['y-axis'])
            }
            catch (error) {
                console.log("error @ FetchRoverData @ map", error)
            }
        }

        /* ----------------------   obtain coordinates where image is displayed - rover location   ---------------------- */
        var roverlocate_x = roverlocatex.toString().split("")
        var roverlocate_y = roverlocatey.toString().split("")
        if (rover_x!==5+parseInt(roverlocate_x.join("")) || rover_y!==5+parseInt(roverlocate_y.join("")) ){
           // if (5+parseInt(roverlocate_x.join(""))-x_previous>=20 || 5+parseInt(roverlocate_y.join(""))-y_previous>=20 ) {
            x_previous=rover_x
            y_previous=rover_y}
        //}
        rover_x = canvas_initial_offset+Math.abs(parseInt(roverlocate_x.join(""))*15)    //+5: make sure full image/circle is displayed
        rover_y = canvas_initial_offset+Math.abs(parseInt(roverlocate_y.join(""))*15)

        /* ----------------------   obtain coordinates where image is displayed - alien location   ---------------------- */
        var alienlocate_x = alienlocatex.toString().split("")
        var alienlocate_y = alienlocatey.toString().split("")
        alien_x = canvas_initial_offset+parseInt(alienlocate_x.join(""))
        alien_y = canvas_initial_offset+parseInt(alienlocate_y.join(""))
        var alien_color = aliencolor.toString().split("")
        color = alien_color.join("")

        /* -------------------------   radar   ------------------------*/
        var radarlocate_x = radarlocatex.toString().split("")
        var radarlocate_y = radarlocatey.toString().split("")
        radar_x = canvas_initial_offset+parseInt(radarlocate_x.join(""))
        radar_y = canvas_initial_offset+parseInt(radarlocate_y.join(""))
        console.log("radar location to be drawn: ", radar_x, radar_y)

        /* -------------------------   clear previous image & draw new image - rover location   -------------------------*/
        if (canvasRef.current) {
            var canvas = canvasRef.current;
            var map_drawing = canvas.getContext('2d');  
            var tmp_1 = {     //use to resize image
                width: 0,
                height:0 }
            //forceUpdate();
            var img = new Image();
            img.src = 'image.png';
            tmp_1.width=Math.floor(img.width * 0.04)
            tmp_1.height=Math.floor(img.height * 0.04)
            img.onload = function() {
                // if(rover_x!==5 && rover_y!==5){
                // if (rover_x-x_previous>=20 || rover_y-y_previous>=20 || rover_y==5 && rover_x==5 ) {
                    map_drawing!.clearRect(x_previous, y_previous, tmp_1.width, tmp_1.height);
                    console.log('clear: x_pre-',x_previous, 'y_pre-', y_previous)  // for debug
                    map_drawing!.drawImage(img, rover_x, rover_y, tmp_1.width,  tmp_1.height);
                    console.log('draw: x-',rover_x, 'y-', rover_y);  // for debug
                //}
            };

            /* ------------------------   radar   -------------------------*/
            var tmp_2 = {width: 0, height:0 }
            var img_radar = new Image();
            img_radar.src = 'alien_base.png';
            tmp_2.width=Math.floor(img_radar.width * 0.05)
            tmp_2.height=Math.floor(img_radar.height * 0.05)
            img_radar.onload = function() {
                if (radar_x!==canvas_initial_offset || radar_y!==canvas_initial_offset ) {
                    map_drawing!.drawImage(img_radar, radar_x, radar_y, tmp_2.width,  tmp_2.height);
                    console.log('radar_draw: x-',radar_x, 'y-', radar_y);  // for debug
                }
            };
           
            /* ------------------------   clear previous image & draw new image - alien location   ------------------------ */
            if(map_drawing && (alien_x!==canvas_initial_offset || alien_y!==canvas_initial_offset)){
                map_drawing.beginPath();
                // console.log('color', color);  // for debug
                if (color==='BUILDING'){
                    map_drawing.rect(alien_x, alien_y, 5, 5);     //rectangular OR bulding drawing
                    map_drawing.fillStyle = 'white'
                } else {
                    map_drawing.arc(alien_x, alien_y, 5, 0, 2*Math.PI);     //circle drawing
                    map_drawing.fillStyle = color
                }
                map_drawing.fill();
                map_drawing.stroke();
            }   else {console.log('error loading contents')}
        }       
        FetchRadarData()
        FetchRoverData()
        FetchAlienData()
        }, 250);
        return () => clearInterval(intervalId); //This is important
    } );

    return (
        <div>
            <canvas ref={canvasRef} height={height} width={width} />
        </div>
    );
};

/* -------------------------------------------------  canvas size  ------------------------------------------------- */
Map.defaultProps = {
    width: 600,
    height: 400,
};

export default Map;