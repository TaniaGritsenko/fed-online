window.onload = function(){
    //1
    //console.log('Завдання 1.');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.fillRect(50, 50, 150, 100); 
    ctx.fillStyle = 'pink';
    ctx.fillRect(110, 80, 150, 100); 
    ctx.fillStyle = 'green';
    ctx.fillRect(180, 140, 150, 100); 

    //2
    function gradientCanvas(color1, color2){
    const canvas = document.querySelector('#secondCanvas');
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    gradientCanvas('red', 'blue');

    //3
    function drawLine(x1, y1, x2, y2, color, width){
        const lineCanvas = document.querySelector('#lineCanvas');
        const ctx = lineCanvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.stroke();
    }
    drawLine(0, 100, 500, 100, 'red', 2);

    //4
    let svgLine = document.querySelector('.svgContent');
    let svgNS = "http://www.w3.org/2000/svg";
    function createSvgLine(x1, y1, x2, y2, color, width) {
        const svg = document.createElementNS(svgNS, 'svg');
        svg.setAttribute('width', '500');
        svg.setAttribute('height', '300');
        svg.style.display = 'block';

        let line = document.createElementNS(svgNS, 'line');
        line.setAttribute('x1', x1);
        line.setAttribute('y1', y1);
        line.setAttribute('x2', x2);
        line.setAttribute('y2', y2);
        line.setAttribute('stroke', color);
        line.setAttribute('stroke-width', width);

        svg.appendChild(line);
        svgLine.appendChild(svg);
    }
    createSvgLine(50, 50, 450, 250, 'yellow',5);

    //5
    let svgRectContent = document.querySelector('.svgRectContent');
    function createSvgRect(width, height, fillColor, strokeColor, strokeWidth){;
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('width', '500');
    svg.setAttribute('height', '300');
    svg.style.display = 'block';
    const rect = document.createElementNS(svgNS, 'rect');
        rect.setAttribute('x', '150');
        rect.setAttribute('y', '70');
        rect.setAttribute('width', width);
        rect.setAttribute('height', height);
        rect.setAttribute('fill', fillColor);
        rect.setAttribute('stroke', strokeColor);
        rect.setAttribute('stroke-width', strokeWidth);
        svg.appendChild(rect);
        svgRectContent.appendChild(svg);
    }
        createSvgRect(200, 150, 'pink', 'red', 5);
}