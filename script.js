// declare two variables for container and material
var container, material;

// declare two variables for depth and fluid viscosity
var deep = 1, fluid = 0.015;

// declare an object with two key-value pairs for speed and volatility
var uniforms = {
    speed: 0,
    volatility: 0
};

// the initialize function
function init() 
{
    // container gets the main element
    container = document.getElementById('main');

    // material calls LiquidDistortMaterial function from Blotter.js 
    material = new Blotter.LiquidDistortMaterial();

    // declare a Blotter text field with properties
    var text = new Blotter.Text("REALITY", {
        weight: 800,
        size: 80,
        fill: 'green',
        paddingLeft: 80,
        paddingRight: 80,
        paddingBottom: 80,
        paddingTop: 80
    });

    /*
    * https://blotter.js.org
    */

    var blotter = new Blotter(material, {
        texts: text
    });

    // declare a canvas variable that uses the text from Blotter
    var canvas = blotter.forText(text).domElement;

    // append the canvas to the container (main)
    container.appendChild(canvas);

    /*
    * https://pressurejs.com
    */

    Pressure.set(container, {
        change: function(force, event) {
            deep = force;
            fluid: 0.015;
        },
        end: function() {
            fluid: 0.15;
            deep: 0;
        }
    });
}

// declare an animate function
function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {
    uniforms.volatility += ((deep *0.5) - uniforms.volatility) * fluid;
    uniforms.speed += ((deep * 0.5) - uniforms.speed) * fluid;

    material.uniforms.uVolatility.value = uniforms.volatility;
    material.uniforms.uSpeed.value = uniforms.speed                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
}

init();
animate();