function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop();
  }
  
  function draw() {
    background(255);
    let colors = [color('#BBE9BC'), color('#C7E0AB'), color('#5C703D'), color('#3A511F'), color('#8BC34A')];
    noFill();
    strokeWeight(2);
  
    for (let i = 0; i < 1500; i++) {
        let x1 = random(width);
        let y1 = random(height);
        let x2 = x1 + random(-100, 100);
        let y2 = y1 + random(-100, 100);
        let col = random(colors);
        stroke(col);
        strokeWeight(1); 
        bezier(x1, y1, random(width), random(height), random(width), random(height), x2, y2);
    }
  
    for (let i = 0; i < 2000; i++) {
      let x = random(width);
      let y = random(height);
      let r = random(5, 20);
      let col = random(colors);
      fill(col);
      noStroke();
      ellipse(x, y, r, r);
    }
  
  }
  