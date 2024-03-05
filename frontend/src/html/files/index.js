function printFiles(e) {  
    const files = e.target.files
    for (file of files) {
        const reader = new FileReader();  
        reader.onload = (function(fileData) {
            return function(){
                // создаем элемент div
                const fileItem = document.createElement("div");
                fileItem.className = "fileItem";
 
                // создаем заголовок для добавляемого файла 
                const fileHeader = document.createElement("h3");
                fileHeader.textContent = fileData.name;
                fileItem.appendChild(fileHeader);
 
                // создаем элемент img для отображения файла
                const img = document.createElement("img");   
                img.src = reader.result;
                img.className = "image";       
                fileItem.appendChild(img); 
                document.getElementById("fileList").appendChild(fileItem);  
            };
        })(file);
        reader.readAsDataURL(file); 
    }
}
document.getElementById("files").addEventListener("change", printFiles);
