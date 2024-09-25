document.addEventListener("DOMContentLoaded", function() {
    const box = document.getElementById("box");
    const marginSlider = document.getElementById("margin");
    const paddingSlider = document.getElementById("padding");
    const borderSlider = document.getElementById("border");
    const widthSlider = document.getElementById("width");
    const heightSlider = document.getElementById("height");
    
    const marginValue = document.getElementById("marginValue");
    const paddingValue = document.getElementById("paddingValue");
    const borderValue = document.getElementById("borderValue");
    const widthValue = document.getElementById("widthValue");
    const heightValue = document.getElementById("heightValue");
    
    function updateBox() {
        box.style.margin = `${marginSlider.value}px`;
        box.style.padding = `${paddingSlider.value}px`;
        box.style.borderWidth = `${borderSlider.value}px`;
        box.style.width = `${widthSlider.value}px`;
        box.style.height = `${heightSlider.value}px`;
        
        marginValue.textContent = marginSlider.value;
        paddingValue.textContent = paddingSlider.value;
        borderValue.textContent = borderSlider.value;
        widthValue.textContent = widthSlider.value;
        heightValue.textContent = heightSlider.value;
    }
    
    marginSlider.addEventListener("input", updateBox);
    paddingSlider.addEventListener("input", updateBox);
    borderSlider.addEventListener("input", updateBox);
    widthSlider.addEventListener("input", updateBox);
    heightSlider.addEventListener("input", updateBox);
    
    // Inicializar valores
    updateBox();
});
