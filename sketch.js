let points;
let slider;

function setup() {
  createCanvas(displayWidth, displayHeight);   
    slider = createSlider(0, 100, 50, 1)
    slider.position(10, 10)
  points = []
//   frameRate(2)
  for(let i =0; i < 50; i++){
    points.push(new Node(random(0, width), random(0, height )))
  }
  
  
  
  
  
}

function draw() {
  background(51);
  noFill()
  stroke(250,50,50)
//   strokeWeight(0.3)
  
  for(let i =0; i < 50; i++){
    points[i].show()
    points[i].update()  

    for(let j = 0; j < 48; j += 1){
        

        if(checkTriangle(points[i], points[j], points[j + 1])){
            triangle(points[i].pos.x, points[i].pos.y, points[j].pos.x, points[j].pos.y, points[j+1].pos.x, points[j+1].pos.y)
        }
        // points[j].show()
        // points[j].update()

        
  }
    
  }
  

  
  
  
}

function checkTriangle(x, y, z){
    let relax = map(slider.value(), 0, 100, 0, 0.1)
    let firstDist = dist(x.pos.x, x.pos.y, y.pos.x, y.pos.y);
    let secondDist = dist(y.pos.x, y.pos.y, z.pos.x, z.pos.y);
    let thirdDist = dist(z.pos.x, z.pos.y, x.pos.x, x.pos.y);

    let meanSide = (firstDist + secondDist + thirdDist) / 3;

    firstDist /= meanSide;
    secondDist /= meanSide;
    thirdDist /= meanSide;

    let sigma = sqrt(((firstDist-1)*(firstDist-1)+(secondDist-1)*(secondDist-1)+(thirdDist-1)*(thirdDist-1))/2)

    if(sigma < relax){
        return true
    }   
    return false
}