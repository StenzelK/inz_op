document.addEventListener('DOMContentLoaded', () => {
    let scene, camera, renderer, figure; // Declare figure at the top level

    function init() {
        // Set up the scene
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xdddddd);

        // Set up the camera
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // Set up the renderer
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(document.getElementById('canvas-container').clientWidth, document.getElementById('canvas-container').clientHeight);
        document.getElementById('canvas-container').appendChild(renderer.domElement);

        // Add ambient light
        let ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);

        // Add directional light
        let directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(0, 1, 0);
        scene.add(directionalLight);

        // // Add a cube to the scene
        // let geometry = new THREE.BoxGeometry();
        // let material = new THREE.MeshPhongMaterial({ color: 0xff0000 });
        // cube = new THREE.Mesh(geometry, material);
        // scene.add(cube);

        // Initialize figure selector and attach event listener
        initFigureSelector();

        initColorPicker();

        // Start the animation loop
        animate();
    }

    function initFigureSelector() {
        const figureSelector = document.getElementById('figure-selector');
        figureSelector.addEventListener('change', changeFigure);

        // Initialize with the default figure
        changeFigure({ target: { value: figureSelector.value } });
    }

    function createSlider(id, min, max, step, defaultValue, labelText) {
        const slidersContainer = document.getElementById('sliders');
    
        // Create a wrapper for each slider and label pair
        const sliderWrapper = document.createElement('div');
        sliderWrapper.classList.add('slider-container'); // Add a class for potential styling
    
        // Create the label element
        const label = document.createElement('label');
        label.setAttribute('for', id);
        label.textContent = labelText;
    
        // Create the slider element
        const slider = document.createElement('input');
        slider.setAttribute('type', 'range');
        slider.setAttribute('id', id);
        slider.setAttribute('min', min);
        slider.setAttribute('max', max);
        slider.setAttribute('step', step);
        slider.setAttribute('value', defaultValue);

        // Create the value display span
        const valueDisplay = document.createElement('span');
        valueDisplay.setAttribute('id', id + '-value');
        valueDisplay.textContent = parseFloat(defaultValue).toFixed(1); // Format default value

        // Append the label and slider to the wrapper
        sliderWrapper.appendChild(label);
        sliderWrapper.appendChild(slider);
        sliderWrapper.appendChild(valueDisplay);
    
        // Append the wrapper to the sliders container
        slidersContainer.appendChild(sliderWrapper);
    
        // Event listener to update the value display and figure dimensions
        slider.addEventListener('input', function() {
            // Format the value as a fixed-point notation with 1 decimal place
            document.getElementById(id + '-value').textContent = parseFloat(this.value).toFixed(1);
            updateFigureDimensions();
        });

    }

    function initSliders(figureType) {
        let slidersContainer = document.getElementById('sliders');
        slidersContainer.innerHTML = ''; // Clear existing sliders
    
        switch (figureType) {
            case 'cube':
                createSlider('width-slider', 0.1, 5, 0.1, 1, 'Width');
                createSlider('height-slider', 0.1, 5, 0.1, 1, 'Height');
                createSlider('depth-slider', 0.1, 5, 0.1, 1, 'Depth');
                break;
            case 'sphere':
                createSlider('radius-slider', 0.1, 5, 0.1, 1, 'Radius');
                break;
            case 'cylinder':
                createSlider('radius-top-slider', 0.1, 5, 0.1, 1, 'Width');
                createSlider('radius-bottom-slider', 0.1, 5, 0.1, 1, 'Depth');
                createSlider('height-slider', 0.1, 5, 0.1, 1, 'Height');
                break;
            case 'cone':
                createSlider('radius-slider', 0.1, 5, 0.1, 1, 'Radius');
                createSlider('height-slider', 0.1, 5, 0.1, 1, 'Height');
                break;
            // Include additional cases for other figure types if needed
            default:
                console.log('Unknown figure type:', figureType);
                break;
        }
    }

    function changeFigure(event) {
        const figureType = event.target.value;
        if (figure) scene.remove(figure); // Remove the previous figure
    
        const colorValue = document.getElementById('color-picker').value;
        const material = new THREE.MeshPhongMaterial({ color: colorValue });
        let geometry;
    
        switch (figureType) {
            case 'cube':
                geometry = new THREE.BoxGeometry(1, 1, 1);
                break;
            case 'sphere':
                geometry = new THREE.SphereGeometry(1, 32, 32);
                break;
            case 'cylinder':
                geometry = new THREE.CylinderGeometry(1, 1, 1, 32);
                break;
            case 'cone':
                geometry = new THREE.ConeGeometry(1, 1, 32);
                break;
            // Add cases for other figures here
            default:
                console.error('Unsupported figure type:', figureType);
                return;
        }
    
        figure = new THREE.Mesh(geometry, material);
        scene.add(figure); // Add the new figure to the scene
        initSliders(figureType); // Update sliders for the new figure
        updateFigureDimensions(); // Set dimensions for the new figure
    }

    function updateFigureDimensions() {
        if (!figure) return;
    
        // Update the figure's dimensions based on the sliders' values
        const figureType = document.getElementById('figure-selector').value;
        switch (figureType) {
            case 'cube':
                const width = document.getElementById('width-slider').value;
                const height = document.getElementById('height-slider').value;
                const depth = document.getElementById('depth-slider').value;
                figure.scale.set(width, height, depth);
                break;
            case 'sphere':
                const radius = document.getElementById('radius-slider').value;
                figure.scale.set(radius, radius, radius);
                break;
            case 'cylinder':
                const radiusTop = document.getElementById('radius-top-slider').value;
                const radiusBottom = document.getElementById('radius-bottom-slider').value;
                const cylinderHeight = document.getElementById('height-slider').value;
                figure.scale.set(radiusTop, cylinderHeight, radiusBottom);
                break;
            case 'cone':
                const coneRadius = document.getElementById('radius-slider').value;
                const coneHeight = document.getElementById('height-slider').value;
                figure.scale.set(coneRadius, coneHeight, coneRadius);
                break;
            // Add cases for other figures' dimensions here
            default:
                console.error('Unsupported figure type:', figureType);
        }
    }

    // Function to initialize color picker
    function initColorPicker() {
        // Get the color picker element
        const colorPicker = document.getElementById('color-picker');

        // Attach event listener to the color picker
        colorPicker.addEventListener('input', updateFigureColor);
    }

    // Function to update cube color
    function updateFigureColor(event) {
        // If there is no cube, return early
        if (!figure) return;

        // Set the cube's material color to the value from the color picker
        figure.material.color.set(event.target.value);
    }

    function animate() {
        requestAnimationFrame(animate);

        // Rotate the figure if it exists
        if (figure) {
            figure.rotation.x += 0.01;
            figure.rotation.y += 0.01;
        }

        // Always render the scene again
        renderer.render(scene, camera);
    }

    init();
});