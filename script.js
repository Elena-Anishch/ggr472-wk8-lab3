/*--------------------------------------------------------------------
GGR472 WEEK 8: JavaScript for Web Maps
Adding elements and interactivity to the map (JavaScript legend and events)
--------------------------------------------------------------------*/

/*--------------------------------------------------------------------
INITIALISE MAP
--------------------------------------------------------------------*/
mapboxgl.accessToken = 'pk.eyJ1IjoiZWxlbmEtYW5pc2hjaCIsImEiOiJjbTVvN2podncwanJ5Mm1wbnNuczl6c214In0.2ltrEF0cJrURbPWpaKr9bg'; //***ADD YOUR ACCESS TOKEN HERE***

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/standard', // or select existing mapbox style - https://docs.mapbox.com/api/maps/styles/
    center: [15, 18],
    zoom: 2.5,
    // maxBounds: [
    //     [140,0], // Southwest
    //     [25, 85]  // Northeast
    // ],
});


/*--------------------------------------------------------------------
MAP CONTROLS
--------------------------------------------------------------------*/
map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.FullscreenControl());

const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    countries: "dz,ao,ben,bw,bf,bi,cm,cv,cf,td,km,cd,mg,ml,mr,ma,mu,na,ne,ng,sc,sl,so,za,ss,sd,tn,ug,zw,ke,lr,ly,mz,sn,sz,tz,tg,zm,ci,gh,et,rw,gn,gw,ls,zm,mw"
});

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));


/*--------------------------------------------------------------------
ACCESS AND VISUALIZE DATA
--------------------------------------------------------------------*/
//Add data source and draw initial visiualization of layer
map.on('load', () => {
    map.addSource('africa-geojson', {
        'type': 'vector',
        'url': 'mapbox://elena-anishch.9rddum79'
    });




    map.addLayer({
        'id': 'systemperformance',
        'type': 'fill',
        'source': 'africa-geojson',
        'paint': {
            'fill-color': [
                'step', // STEP expression produces stepped results based on value pairs
                ['get', 'SP'], // GET expression retrieves property value from 'population' data field
                '#bd0026', // Colour assigned to any values < first step
                2.5, '#9B4D00', // Colours assigned to values >= each step
                5, '#FFA500',
                7.5, '#FFFF00',
                55,'#FFA500',
                90, '#32CD32'
                
            ],
            'fill-opacity': 0.5,
            'fill-outline-color': 'white'
        },
        'source-layer': 'africageojson-2nz7af',
        'layout': {
            'visibility': 'none'  // Set this layer to be hidden initially
        }
    });



    map.addLayer({
        'id': 'transitionreadiness',
        'type': 'fill',
        'source': 'africa-geojson',
        'paint': {
            'fill-color': [
                'step', // STEP expression produces stepped results based on value pairs
                ['get', 'TR'], // GET expression retrieves property value from 'population' data field
                '#bd0026', // Colour assigned to any values < first step
                2.5, '#9B4D00', // Colours assigned to values >= each step
                5, '#FFA500',
                7.5, '#FFFF00',
                90, '#32CD32'
            ],
            'fill-opacity': 0.5,
            'fill-outline-color': 'white'
        },
        'source-layer': 'africageojson-2nz7af',
        'layout': {
            'visibility': 'none'  // Set this layer to be hidden initially
        }
    });
    map.addLayer({
        'id': 'techspecifichydro',
        'type': 'fill',
        'source': 'africa-geojson',
        'paint': {
            'fill-color': [
                'step', // STEP expression produces stepped results based on value pairs
                ['get', 'TSH'], // GET expression retrieves property value from 'population' data field
                '#bd0026', // Colour assigned to any values < first step
                2.5, '#9B4D00', // Colours assigned to values >= each step
                5, '#FFA500',
                7.5, '#FFFF00',
                90, '#32CD32'
            ],
            'fill-opacity': 0.5,
            'fill-outline-color': 'white'
        },
        'source-layer': 'africageojson-2nz7af',
        'layout': {
            'visibility': 'none'  // Set this layer to be hidden initially
        }
    });
    map.addLayer({
        'id': 'techspecificccs',
        'type': 'fill',
        'source': 'africa-geojson',
        'paint': {
            'fill-color': [
                'step', // STEP expression produces stepped results based on value pairs
                ['get', 'TSCCS'], // GET expression retrieves property value from 'population' data field
                '#bd0026', // Colour assigned to any values < first step
                2.5, '#9B4D00', // Colours assigned to values >= each step
                5, '#FFA500',
                7.5, '#FFFF00',
                90, '#32CD32'
            ],
            'fill-opacity': 0.5,
            'fill-outline-color': 'white'
        },
        'source-layer': 'africageojson-2nz7af',
        'layout': {
            'visibility': 'none'  // Set this layer to be hidden initially
        }
    });
    map.addLayer({
        'id': 'compositehydro',
        'type': 'fill',
        'source': 'africa-geojson',
        'paint': {
            'fill-color': [
                'step', // STEP expression produces stepped results based on value pairs
                ['get', 'CIH'], // GET expression retrieves property value from 'population' data field
                '#bd0026', // Colour assigned to any values < first step
                2.5, '#9B4D00', // Colours assigned to values >= each step
                5, '#FFA500',
                7.5, '#FFFF00',
                90, '#32CD32'
            ],
            'fill-opacity': 0.5,
            'fill-outline-color': 'white'
        },
        'source-layer': 'africageojson-2nz7af',
        'layout': {
            'visibility': 'none'  // Set this layer to be hidden initially
        }
    });
    map.addLayer({
        'id': 'compositeccs',
        'type': 'fill',
        'source': 'africa-geojson',
        'paint': {
            'fill-color': [
                'step', // STEP expression produces stepped results based on value pairs
                ['get', 'CICCS'], // GET expression retrieves property value from 'population' data field
                '#bd0026', // Colour assigned to any values < first step
                2.5, '#9B4D00', // Colours assigned to values >= each step
                5, '#FFA500',
                7.5, '#FFFF00',
                90, '#32CD32'
            ],
            'fill-opacity': 0.5,
            'fill-outline-color': 'white'
        },
        'source-layer': 'africageojson-2nz7af',
        'layout': {
            'visibility': 'none'  // Set this layer to be hidden initially
        }
    });
    map.addLayer({
        'id': 'compositehydroccs',
        'type': 'fill',
        'source': 'africa-geojson',
        'paint': {
            'fill-color': [
                'step', // STEP expression produces stepped results based on value pairs
                ['get', 'CIHCCS'], // GET expression retrieves property value from 'population' data field
                '#bd0026', // Colour assigned to any values < first step
                2.5, '#9B4D00', // Colours assigned to values >= each step
                5, '#FFA500',
                7.5, '#FFFF00',
                90, '#32CD32'
            ],
            'fill-opacity': 0.5,
            'fill-outline-color': 'white'
        },
        'source-layer': 'africageojson-2nz7af',
        'layout': {
            'visibility': 'none'  // Set this layer to be hidden initially
        }
    });

// Add event listener to handle country filtering
document.getElementById("boundaryfieldset").addEventListener('change', (e) => {
    boundaryvalue = document.getElementById('boundary').value;
    
    if (currentLayer) {
        // Update the map filter based on the country selected
        if (boundaryvalue === 'All') {
            map.setFilter(currentLayer, ['has', 'ADM0_NAME']); // Show data for all countries
        } else {
            map.setFilter(currentLayer, ['==', ['get', 'ADM0_NAME'], boundaryvalue]); // Filter data for the selected country
        }
    }
});

// Listen for changes in the country dropdown to immediately apply the filter
document.getElementById('boundary').addEventListener('change', () => {
    if (currentLayer && boundaryvalue) {
        if (boundaryvalue === 'All') {
            map.setFilter(currentLayer, ['has', 'ADM0_NAME']);
        } else {
            map.setFilter(currentLayer, ['==', ['get', 'ADM0_NAME'], boundaryvalue]);
        }
    }
});
});







    // Add ADM0_NAME layer (for filtering by country or region)
    // map.addLayer({
      //  'id': 'ADM0_NAME', // Layer ID for ADM0_NAME field
      //  'type': 'fill',
      //  'source': 'africa-geojson',
      //  'source-layer': 'africageojson-2nz7af',
      //  'paint': {
      //      'fill-color': '#F2F12D', // Color for the ADM0_NAME layer
      //      'fill-opacity': 0.3,
       //     'fill-outline-color': 'white'
      //  },  
  //  'before': 'SP' // This ensures that the ADM0_NAME layer is placed **below** the SP layer
 //   });



/*--------------------------------------------------------------------
CREATE LEGEND IN JAVASCRIPT
--------------------------------------------------------------------*/
//Declare array variables for labels and colours
const legendlabels = [
    '0-24 Poor ',
    '25-49 Low',
    '50-74 Moderate',
    '75-89 Goood',
    '> 90 Excellent'
];

const legendcolours = [
    '#bd0026',
    '#9B4D00',
    '#FFA500',
    '#FFFF00',
    '#32CD32'
];


//Declare legend variable using legend div tag
const legend = document.getElementById('legend');

//For each layer create a block to put the colour and label in
legendlabels.forEach((label, i) => {
    const colour = legendcolours[i];

    const item = document.createElement('div'); //each layer gets a 'row' - this isn't in the legend yet, we do this later
    const key = document.createElement('span'); //add a 'key' to the row. A key will be the colour circle

    key.className = 'legend-key'; //the key will take on the shape and style properties defined in css
    key.style.backgroundColor = colour; // the background color is retreived from teh layers array

    const value = document.createElement('span'); //add a value variable to the 'row' in the legend
    value.innerHTML = `${label}`; //give the value variable text based on the label

    item.appendChild(key); //add the key (colour cirlce) to the legend row
    item.appendChild(value); //add the value to the legend row

    legend.appendChild(item); //add row to the legend
});


/*--------------------------------------------------------------------
ADD INTERACTIVITY BASED ON HTML EVENT
--------------------------------------------------------------------*/

// 1) Add event listener which returns map view to full screen on button click using flyTo method
document.getElementById('returnbutton').addEventListener('click', () => {
    map.flyTo({
        center: [15, 18],
        zoom: 3,
        essential: true
    });
});


// 2) Change display of legend based on check box
let legendcheck = document.getElementById('legendcheck');

legendcheck.addEventListener('click', () => {
    if (legendcheck.checked) {
        legendcheck.checked = true;
        legend.style.display = 'block';
    }
    else {
        legend.style.display = "none";
        legendcheck.checked = false;
    }
});

   


let currentLayer = null; // Track the current visible layer (keeping this for single-layer logic)

// Toggle the visibility of the given layerId
function toggleLayerVisibility(layerId, visibility) {
    map.setLayoutProperty(layerId, 'visibility', visibility);
}
// Handle the checkbox change
function handleLayerCheckboxChange(e, layerId, checkboxId) {
    const checkbox = document.getElementById(checkboxId);

    // If the checkbox is checked
    if (checkbox.checked) {
        // Hide all layers first
        const layers = ['systemperformance', 'transitionreadiness', 'techspecifichydro', 'techspecificccs', 'compositehydro', 'compositeccs', 'compositehydroccs'];
        layers.forEach(layer => {
            toggleLayerVisibility(layer, 'none');
        });

        // Uncheck all checkboxes
        document.querySelectorAll('.layer-checkbox').forEach((cb) => {
            if (cb.id !== checkboxId) {
                cb.checked = false;
            }
        });

        // Show only the selected layer
        toggleLayerVisibility(layerId, 'visible');
        currentLayer = layerId;
    } else {
        // If unchecked, hide the layer
        toggleLayerVisibility(layerId, 'none');
        currentLayer = null;
    }
}


// Add event listeners for each checkbox (adjust the IDs accordingly)
document.getElementById('layercheckSP').addEventListener('change', (e) => {
    handleLayerCheckboxChange(e, 'systemperformance', 'layercheckSP');
});

document.getElementById('layercheckTR').addEventListener('change', (e) => {
    handleLayerCheckboxChange(e, 'transitionreadiness', 'layercheckTR');
});

document.getElementById('layercheckTSH').addEventListener('change', (e) => {
    handleLayerCheckboxChange(e, 'techspecifichydro', 'layercheckTSH');
});

document.getElementById('layercheckTSCCS').addEventListener('change', (e) => {
    handleLayerCheckboxChange(e, 'techspecificccs', 'layercheckTSCCS');
});

document.getElementById('layercheckCIH').addEventListener('change', (e) => {
    handleLayerCheckboxChange(e, 'compositehydro', 'layercheckCIH');
});

document.getElementById('layercheckCICCS').addEventListener('change', (e) => {
    handleLayerCheckboxChange(e, 'compositeccs', 'layercheckCICCS');
});

document.getElementById('layercheckCIHCCS').addEventListener('change', (e) => {
    handleLayerCheckboxChange(e, 'compositehydroccs', 'layercheckCIHCCS');
});

// Get all checkboxes with the class 'layer-checkbox'
//const checkboxes = document.querySelectorAll('.layer-checkbox');

// Add event listeners to each checkbox
//checkboxes.forEach(checkbox => {
 //   checkbox.addEventListener('change', function() {
 //       // If a checkbox is checked, uncheck all others
  //      checkboxes.forEach(otherCheckbox => {
  //          if (otherCheckbox !== checkbox) {
  //              otherCheckbox.checked = false;
   //         }
   //     });
  //  });
//);








// 4) Filter data layer to show selected Province from dropdown selection
//let boundaryvalue;

//// Enable/Disable the country dropdown based on layer selection
//function toggleCountryFilter(enabled) {
 //   const boundaryDropdown = document.getElementById("boundaryfieldset");
 //   boundaryDropdown.style.display = enabled ? 'block' : 'none';
//}

// Add event listener for the country dropdown
//document.getElementById("boundaryfieldset").addEventListener('change', (e) => {
 //   boundaryvalue = document.getElementById('boundary').value;
    
 //   if (currentLayer) {
  //      // Update the map filter based on the country selected
 //       if (boundaryvalue === 'All') {
  //          map.setFilter(
  //              currentLayer,
  //              ['has', 'ADM0_NAME'] // Show data for all countries
   //         );
   //     } else {
   //         map.setFilter(
   //             currentLayer,
   //             ['==', ['get', 'ADM0_NAME'], boundaryvalue] // Filter data for the selected country
   //         );
   //     }
  //  }
//});

// Optionally, listen for changes in the country dropdown to immediately apply the filter when a country is selected
//document.getElementById('boundary').addEventListener('change', () => {
 //   if (currentLayer && boundaryvalue) {
 //       if (boundaryvalue === 'All') {
  //          map.setFilter(
  //              currentLayer,
  //              ['has', 'ADM0_NAME']
  //          );
   //     } else {
   //         map.setFilter(
   //             currentLayer,
   //             ['==', ['get', 'ADM0_NAME'], boundaryvalue]
   //         );
   //     }
  ///  }
//});
// Reference to the checkbox for toggling layer visibility
const layercheckSP = document.getElementById('layercheckSP'); // Replace with your checkbox ID

// Function to update layer visibility based on checkbox state
layercheckSP.addEventListener('change', function () {
    // Set the visibility based on whether the checkbox is checked
    const visibility = layercheckSP.checked ? 'visible' : 'none'; // If checked, show the layer; else, hide it
    map.setLayoutProperty('systemperformance', 'visibility', visibility);

    // Optionally, log the visibility for debugging
    const currentVisibility = map.getLayoutProperty('systemperformance', 'visibility');
    console.log("Layer visibility:", currentVisibility);
});

// Event listener for clicks on the 'systemperformance' layer
map.on('click', 'systemperformance', (e) => {
    console.log('SystemPerformance layer clicked')
    // Check if the layer is visible
    const currentVisibility = map.getLayoutProperty('systemperformance', 'visibility');

    // If the layer is not visible, do nothing
    if (currentVisibility === 'none') {
        return;  // Prevent the popup from being shown when the layer is hidden
    }

    // Proceed with showing the popup if the layer is visible
    const feature = e.features[0];

    if (feature.properties && feature.properties.SP && feature.properties.ADM0_NAME) {
        const spValue = feature.properties.SP;
        const countryName = feature.properties.ADM0_NAME;

        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(`
                <h4>${countryName}</h4>
                <p>SP Index: ${spValue}</p>
            `)
            .addTo(map);
    }
});
// Event listener for clicks on the 'transitionreadiness' layer
map.on('click', 'transitionreadiness', (e) => {
    console.log('transitionreadiness layer clicked')
    // Check if the layer is visible
    const currentVisibility = map.getLayoutProperty('transitionreadiness', 'visibility');

    // If the layer is not visible, do nothing
    if (currentVisibility === 'none') {
        return;  // Prevent the popup from being shown when the layer is hidden
    }

    // Proceed with showing the popup if the layer is visible
    const feature = e.features[0];

    if (feature.properties && feature.properties.TR && feature.properties.ADM0_NAME) {
        const trValue = feature.properties.TR;
        const countryName = feature.properties.ADM0_NAME;

        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(`
                <h4>${countryName}</h4>
                <p>TR Index: ${trValue}</p>
            `)
            .addTo(map);
    }
});
// Event listener for clicks on the 'techspecifichydro' layer
map.on('click', 'techspecifichydro', (e) => {
    console.log('techspecifichydro layer clicked')
    // Check if the layer is visible
    const currentVisibility = map.getLayoutProperty('techspecifichydro', 'visibility');

    // If the layer is not visible, do nothing
    if (currentVisibility === 'none') {
        return;  // Prevent the popup from being shown when the layer is hidden
    }

    // Proceed with showing the popup if the layer is visible
    const feature = e.features[0];

    if (feature.properties && feature.properties.TSH && feature.properties.ADM0_NAME) {
        const tshValue = feature.properties.TSH;
        const countryName = feature.properties.ADM0_NAME;

        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(`
                <h4>${countryName}</h4>
                <p>TSH Index: ${tshValue}</p>
            `)
            .addTo(map);
    }
});
// Event listener for clicks on the 'techspecificccs' layer
map.on('click', 'techspecificccs', (e) => {
    console.log('techspecificccs layer clicked')
    // Check if the layer is visible
    const currentVisibility = map.getLayoutProperty('techspecificccs', 'visibility');

    // If the layer is not visible, do nothing
    if (currentVisibility === 'none') {
        return;  // Prevent the popup from being shown when the layer is hidden
    }

    // Proceed with showing the popup if the layer is visible
    const feature = e.features[0];

    if (feature.properties && feature.properties.TSCCS && feature.properties.ADM0_NAME) {
        const tsccsValue = feature.properties.TSCCS;
        const countryName = feature.properties.ADM0_NAME;

        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(`
                <h4>${countryName}</h4>
                <p>TSCCS Index: ${tsccsValue}</p>
            `)
            .addTo(map);
    }
});

// Event listener for clicks on the 'compositehydro' layer
map.on('click', 'compositehydro', (e) => {
    console.log('compositehydro layer clicked')
    // Check if the layer is visible
    const currentVisibility = map.getLayoutProperty('compositehydro', 'visibility');

    // If the layer is not visible, do nothing
    if (currentVisibility === 'none') {
        return;  // Prevent the popup from being shown when the layer is hidden
    }

    // Proceed with showing the popup if the layer is visible
    const feature = e.features[0];

    if (feature.properties && feature.properties.CIH && feature.properties.ADM0_NAME) {
        const cihValue = feature.properties.CIH;
        const countryName = feature.properties.ADM0_NAME;

        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(`
                <h4>${countryName}</h4>
                <p>CIH Index: ${cihValue}</p>
            `)
            .addTo(map);
    }
});

// Event listener for clicks on the 'compositeccs' layer
map.on('click', 'compositeccs', (e) => {
    console.log('compositeccs layer clicked')
    // Check if the layer is visible
    const currentVisibility = map.getLayoutProperty('compositeccs', 'visibility');

    // If the layer is not visible, do nothing
    if (currentVisibility === 'none') {
        return;  // Prevent the popup from being shown when the layer is hidden
    }

    // Proceed with showing the popup if the layer is visible
    const feature = e.features[0];

    if (feature.properties && feature.properties.CICCS && feature.properties.ADM0_NAME) {
        const ciccsValue = feature.properties.CICCS;
        const countryName = feature.properties.ADM0_NAME;

        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(`
                <h4>${countryName}</h4>
                <p>CICCS Index: ${ciccsValue}</p>
            `)
            .addTo(map);
    }
});
// Event listener for clicks on the 'compositehydroccs' layer
map.on('click', 'compositehydroccs', (e) => {
    console.log('compositehydroccs layer clicked')
    // Check if the layer is visible
    const currentVisibility = map.getLayoutProperty('compositehydroccs', 'visibility');

    // If the layer is not visible, do nothing
    if (currentVisibility === 'none') {
        return;  // Prevent the popup from being shown when the layer is hidden
    }

    // Proceed with showing the popup if the layer is visible
    const feature = e.features[0];

    if (feature.properties && feature.properties.CIHCCS && feature.properties.ADM0_NAME) {
        const cihccsValue = feature.properties.CIHCCS;
        const countryName = feature.properties.ADM0_NAME;

        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(`
                <h4>${countryName}</h4>
                <p>CIHCCS Index: ${cihccsValue}</p>
            `)
            .addTo(map);
    }
});


// Add event listener for clicks on the map
//map.on('click', 'systemperformance', (e) => {
//    // Get the clicked feature's properties
 //   const feature = e.features[0];
    
 //   // Get the SP value (from the clicked polygon's properties)
  //  const spValue = feature.properties.SP; // Access the 'SP' field from the feature's properties
  //  const countryName = feature.properties.ADM0_NAME; // Assuming 'ADM0_NAME' is the field for country name

   // // Create a popup with the SP field value
   // new mapboxgl.Popup()
   //     .setLngLat(e.lngLat)  // Set the popup position to the clicked coordinates
   //     .setHTML(`
   //         <h4>${countryName}</h4>
   //         <p>SP Index: ${spValue}</p>
   //     `)  // Display the country name and SP value in the popup
   //     .addTo(map);  // Add the popup to the map
//});

// Optionally, add a hover event to change the cursor when hovering over a polygon
//map.on('mouseenter', 'systemperformance', () => {
 //   map.getCanvas().style.cursor = 'pointer'; // Change cursor to pointer when hovering over a polygon
//});

//map.on('mouseleave', 'systemperformance', () => {
  //  map.getCanvas().style.cursor = ''; // Reset cursor when leaving the polygon
//});


// Get the button, popup, and close button elements
const openPopupBtn = document.getElementById("openPopupBtn");
const popup = document.getElementById("popup");
const closePopupBtn = document.getElementById("closePopupBtn");

// Open the popup when the "INSTRUCTIONS" button is clicked
openPopupBtn.addEventListener("click", function() {
    popup.style.display = "flex"; // Show the popup
});

// Close the popup when the "×" close button is clicked
closePopupBtn.addEventListener("click", function() {
    popup.style.display = "none"; // Hide the popup
});