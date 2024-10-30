

const textElement = document.getElementById('text'); 
const underlineCheckbox = document.getElementById('underline'); 
const boldCheckbox = document.getElementById('bold'); 
const italicCheckbox = document.getElementById('italic'); 
 
underlineCheckbox.addEventListener('change', updateTextStyle);

boldCheckbox.addEventListener('change', updateTextStyle); 
italicCheckbox.addEventListener('change', updateTextStyle); 
 
function updateTextStyle() { 
    let textDecoration = underlineCheckbox.checked ? 'underline' : 'none'; 
    
    let fontWeight = boldCheckbox.checked ? 'bold' : 'normal';
    
    let fontStyle = italicCheckbox.checked ? 'italic' : 'normal'; 
 
    textElement.style.textDecoration = textDecoration;  
    textElement.style.fontWeight = fontWeight;  
    textElement.style.fontStyle = fontStyle; 
};
const textElement1 = document.getElementById('text'); const alignmentOptions = document.querySelectorAll('input[name="alignment"]'); 
 
alignmentOptions.forEach(option => {     option.addEventListener('change', () => {         textElement1.style.textAlign = option.value; 
    }); 
}); 




const container1 = document.querySelector('.container1');
const bgColorOptions = document.querySelectorAll('input[name="BGCOLOR"]');


bgColorOptions.forEach(option => {
    option.addEventListener('change', updateBackgroundColor);
});

// Function to update the background color
function updateBackgroundColor() {
    const selectedColor = document.querySelector('input[name="BGCOLOR"]:checked').value;

    if (selectedColor === 'Nocolor') {
        container1.style.backgroundColor = 'transparent';
    } else if (selectedColor === 'bgpink') {
        container1.style.backgroundColor = 'pink';
    } else if (selectedColor === 'bgyellow') {
        container1.style.backgroundColor = 'yellow';
    }
}