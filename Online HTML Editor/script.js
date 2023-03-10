let codeArea = document.getElementById('code_area')

codeArea.addEventListener('keyup', function(){
    let codes = codeArea.innerText
    let output = document.getElementById('code_output')
    output.srcdoc = codes
})

let codeEditor = CodeMirror(codeArea, 
    {
    value:
`<style>
/*Write CSS to compile*/
</style>

<body>
<!--Write HTML code to compile-->
</body>

<script>
//Script language example
</script>`,
    autofocus: true,
    autoCloseBrackets: true,
    autoCloseTags: true

})

let screenSize = screen.width

if(screenSize >= 768){
    codeEditor.setSize(null, '84vh')
} else {
    codeEditor.setSize(null, '40vh')
    let title = document.getElementById('title')
    title.innerHTML = '< HTML Editor />'
}