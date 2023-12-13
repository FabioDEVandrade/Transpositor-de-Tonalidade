const escalas = {
    'C':{'C/F': 'G', 'F/Bb': 'G', 'Bb/Eb': 'G', 'F/C': 'F', 'Bb/F': 'F', 'Eb/Bb': 'F', 'C/Bb': 'D' , 'F/Eb': 'D', 'Bb/C': 'Bb', 'Eb/F': 'Bb', 'C/Eb': 'A', 'Eb/C': 'Eb'},

    'C#':{'C/F': 'G#', 'F/Bb': 'G#', 'Bb/Eb': 'G#', 'F/C': 'F#', 'Bb/F': 'F#', 'Eb/Bb': 'F#', 'C/Bb': 'D#' , 'F/Eb': 'F#', 'Bb/C': 'B', 'Eb/F': 'B', 'C/Eb': 'A#', 'Eb/C': 'E'},

    'Db':{'C/F': 'Ab', 'F/Bb': 'Ab', 'Bb/Eb': 'Ab', 'F/C': 'Gb', 'Bb/F': 'Gb', 'Eb/Bb': 'Gb', 'C/Bb': 'Eb' , 'F/Eb': 'Eb', 'Bb/C': 'B', 'Eb/F': 'B', 'C/Eb': 'Bb', 'Eb/C': 'E'},

    'D':{'C/F': 'A', 'F/Bb': 'A', 'Bb/Eb': 'A', 'F/C': 'G', 'Bb/F': 'G', 'Eb/Bb': 'G', 'C/Bb': 'E' , 'F/Eb': 'E', 'Bb/C': 'C', 'Eb/F': 'C', 'C/Eb': 'B', 'Eb/C': 'F'},

    'D#':{'C/F': 'A#', 'F/Bb': 'A#', 'Bb/Eb': 'A#', 'F/C': 'G#', 'Bb/F': 'G#', 'Eb/Bb': 'G#', 'C/Bb': 'F' , 'F/Eb': 'F', 'Bb/C': 'C#', 'Eb/F': 'C#', 'C/Eb': 'C', 'Eb/C': 'F#'},

    'Eb':{'C/F': 'Eb', 'F/Bb': 'Eb', 'Bb/Eb': 'Eb', 'F/C': 'Ab', 'Bb/F': 'Ab', 'Eb/Bb': 'Ab', 'C/Bb': 'F' , 'F/Eb': 'F', 'Bb/C': 'Db', 'Eb/F': 'Db', 'C/Eb': 'C', 'Eb/C': 'Gb'},

    'E':{'C/F': 'B', 'F/Bb': 'B', 'Bb/Eb': 'B', 'F/C': 'A', 'Bb/F': 'A', 'Eb/Bb': 'A', 'C/Bb': 'F#' , 'F/Eb': 'F#', 'Bb/C': 'D', 'Eb/F': 'D', 'C/Eb': 'C#', 'Eb/C': 'G'},

    'F':{'C/F': 'C', 'F/Bb': 'C', 'Bb/Eb': 'C', 'F/C': 'Bb', 'Bb/F': 'Bb', 'Eb/Bb': 'Bb', 'C/Bb': 'G' , 'F/Eb': 'G', 'Bb/C': 'Eb', 'Eb/F': 'Eb', 'C/Eb': 'D', 'Eb/C': 'Ab'},

    'F#':{'C/F': 'C#', 'F/Bb': 'C#', 'Bb/Eb': 'C#', 'F/C': 'B', 'Bb/F': 'B', 'Eb/Bb': 'B', 'C/Bb': 'G#' , 'F/Eb': 'G#', 'Bb/C': 'E', 'Eb/F': 'E', 'C/Eb': 'D#', 'Eb/C': 'A'},

    'Gb':{'C/F': 'Db', 'F/Bb': 'Db', 'Bb/Eb': 'Db', 'F/C': 'B', 'Bb/F': 'B', 'Eb/Bb': 'B', 'C/Bb': 'Ab' , 'F/Eb': 'Ab', 'Bb/C': 'E', 'Eb/F': 'E', 'C/Eb': 'Eb', 'Eb/C': 'A'},

    'G':{'C/F': 'D', 'F/Bb': 'D', 'Bb/Eb': 'D', 'F/C': 'C', 'Bb/F': 'C', 'Eb/Bb': 'C', 'C/Bb': 'A' , 'F/Eb': 'A', 'Bb/C': 'F', 'Eb/F': 'F', 'C/Eb': 'E', 'Eb/C': 'Bb'},

    'G#':{'C/F': 'D#', 'F/Bb': 'D#', 'Bb/Eb': 'D#', 'F/C': 'C#', 'Bb/F': 'C#', 'Eb/Bb': 'C#', 'C/Bb': 'A#' , 'F/Eb': 'A#', 'Bb/C': 'F#', 'Eb/F': 'F#', 'C/Eb': 'F', 'Eb/C': 'B'},

    'Ab':{'C/F': 'Eb', 'F/Bb': 'Eb', 'Bb/Eb': 'Eb', 'F/C': 'Db', 'Bb/F': 'Db', 'Eb/Bb': 'Db', 'C/Bb': 'Bb' , 'F/Eb': 'Bb', 'Bb/C': 'Gb', 'Eb/F': 'Gb', 'C/Eb': 'F', 'Eb/C': 'B'},

    'A':{'C/F': 'E', 'F/Bb': 'E', 'Bb/Eb': 'E', 'F/C': 'D', 'Bb/F': 'D', 'Eb/Bb': 'D', 'C/Bb': 'B' , 'F/Eb': 'B', 'Bb/C': 'G', 'Eb/F': 'G', 'C/Eb': 'F#', 'Eb/C': 'C'},

    'A#':{'C/F': 'F', 'F/Bb': 'F', 'Bb/Eb': 'F', 'F/C': 'D#', 'Bb/F': 'D#', 'Eb/Bb': 'D#', 'C/Bb': 'C' , 'F/Eb': 'C', 'Bb/C': 'G#', 'Eb/F': 'G#', 'C/Eb': 'G', 'Eb/C': 'Db'},

    'Bb':{'C/F': 'F', 'F/Bb': 'F', 'Bb/Eb': 'F', 'F/C': 'Eb', 'Bb/F': 'Eb', 'Eb/Bb': 'Eb', 'C/Bb': 'C' , 'F/Eb': 'C', 'Bb/C': 'Ab', 'Eb/F': 'Ab', 'C/Eb': 'G', 'Eb/C': 'Db'},

    'B':{'C/F': 'F#', 'F/Bb': 'F#', 'Bb/Eb': 'F#', 'F/C': 'E', 'Bb/F': 'E', 'Eb/Bb': 'E', 'C/Bb': 'C#' , 'F/Eb': 'C#', 'Bb/C': 'A', 'Eb/F': 'A', 'C/Eb': 'G#', 'Eb/C': 'D'}

}


function Transportar(){
    const notaEscrita = document.getElementById("nota_escrita").value;
    const notaSlcd = document.getElementById("selOpções").value;
    const result = document.getElementById("resultado");

    const noteList = notaEscrita.split(" ");

    if (noteList.length >= 1 && noteList[0] !== ""){
        let resultadoTransposição = "";

        noteList.forEach(nota => {
            const NoteAlo = nota.trim();
            if (escalas[NoteAlo] && escalas[NoteAlo][notaSlcd]){
                resultadoTransposição += `${escalas[NoteAlo][notaSlcd]} `
            }else{
                resultadoTransposição += `Nota "${NoteAlo}" não econtrada`;
            }
        })
        
        resultado.innerHTML = resultadoTransposição.trim();
    }else{
        resultado.innerHTML = "Por favor, insira pelo menos uma nota";
    }

    
}


function limpar(){
    document.getElementById("nota_escrita").value = "";
    resultado.innerHTML = "";
}






