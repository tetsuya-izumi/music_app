'use strict';

{
    const keyC = document.getElementById('keyC');
    const keyG = document.getElementById('keyG');
    const keyD = document.getElementById('keyD');
    const keyE = document.getElementById('keyE');
    const keyA = document.getElementById('keyA');
    const CDiatonic = ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bmdim','E7', 'Fm' ];
    const GDiatonic = ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F#dim','B7', 'Cm' ];
    const DDiatonic = ['D', 'Em', 'F#m', 'G', 'A', 'Bm', 'C#dim','F#7', 'Gm' ];
    const EDiatonic = ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#dim','G#7', 'Am' ];
    const ADiatonic = ['A', 'Bm', 'C#m', 'D', 'E', 'F#m', 'G#dim','C#7', 'Dm' ];

    keyC.addEventListener('click', () => {
        const n1 = Math.floor(Math.random () * 9);
        item1.textContent = CDiatonic[n1];
        
        const n2 = Math.floor(Math.random () * 9);
        item2.textContent = CDiatonic[n2];

        const n3 = Math.floor(Math.random () * 9);
        item3.textContent = CDiatonic[n3];

        const n4 = Math.floor(Math.random () * 9);
        item4.textContent = CDiatonic[n4];

        const n5 = Math.floor(Math.random () * 9);
        item5.textContent = CDiatonic[n5];

        const n6 = Math.floor(Math.random () * 9);
        item6.textContent = CDiatonic[n6];

        const n7 = Math.floor(Math.random () * 9);
        item7.textContent = CDiatonic[n7];

        const n8 = Math.floor(Math.random () * 9);
        item8.textContent = CDiatonic[n8];
    });

    keyG.addEventListener('click', () => {
        const n1 = Math.floor(Math.random () * 9);
        item1.textContent = GDiatonic[n1];
        
        const n2 = Math.floor(Math.random () * 9);
        item2.textContent = GDiatonic[n2];

        const n3 = Math.floor(Math.random () * 9);
        item3.textContent = GDiatonic[n3];

        const n4 = Math.floor(Math.random () * 9);
        item4.textContent = GDiatonic[n4];

        const n5 = Math.floor(Math.random () * 9);
        item5.textContent = GDiatonic[n5];

        const n6 = Math.floor(Math.random () * 9);
        item6.textContent = GDiatonic[n6];

        const n7 = Math.floor(Math.random () * 9);
        item7.textContent = GDiatonic[n7];

        const n8 = Math.floor(Math.random () * 9);
        item8.textContent = GDiatonic[n8];
    });
    keyD.addEventListener('click', () => {
        const n1 = Math.floor(Math.random () * 9);
        item1.textContent = DDiatonic[n1];
        
        const n2 = Math.floor(Math.random () * 9);
        item2.textContent = DDiatonic[n2];

        const n3 = Math.floor(Math.random () * 9);
        item3.textContent = DDiatonic[n3];

        const n4 = Math.floor(Math.random () * 9);
        item4.textContent = DDiatonic[n4];

        const n5 = Math.floor(Math.random () * 9);
        item5.textContent = DDiatonic[n5];

        const n6 = Math.floor(Math.random () * 9);
        item6.textContent = DDiatonic[n6];

        const n7 = Math.floor(Math.random () * 9);
        item7.textContent = DDiatonic[n7];

        const n8 = Math.floor(Math.random () * 9);
        item8.textContent = DDiatonic[n8];
    });
    keyE.addEventListener('click', () => {
        const n1 = Math.floor(Math.random () * 9);
        item1.textContent = EDiatonic[n1];
        
        const n2 = Math.floor(Math.random () * 9);
        item2.textContent = EDiatonic[n2];

        const n3 = Math.floor(Math.random () * 9);
        item3.textContent = EDiatonic[n3];

        const n4 = Math.floor(Math.random () * 9);
        item4.textContent = EDiatonic[n4];

        const n5 = Math.floor(Math.random () * 9);
        item5.textContent = EDiatonic[n5];

        const n6 = Math.floor(Math.random () * 9);
        item6.textContent = EDiatonic[n6];

        const n7 = Math.floor(Math.random () * 9);
        item7.textContent = EDiatonic[n7];

        const n8 = Math.floor(Math.random () * 9);
        item8.textContent = EDiatonic[n8];
    });
    keyA.addEventListener('click', () => {
        const n1 = Math.floor(Math.random () * 9);
        item1.textContent = ADiatonic[n1];
        
        const n2 = Math.floor(Math.random () * 9);
        item2.textContent = ADiatonic[n2];

        const n3 = Math.floor(Math.random () * 9);
        item3.textContent = ADiatonic[n3];

        const n4 = Math.floor(Math.random () * 9);
        item4.textContent = ADiatonic[n4];

        const n5 = Math.floor(Math.random () * 9);
        item5.textContent = ADiatonic[n5];

        const n6 = Math.floor(Math.random () * 9);
        item6.textContent = ADiatonic[n6];

        const n7 = Math.floor(Math.random () * 9);
        item7.textContent = ADiatonic[n7];

        const n8 = Math.floor(Math.random () * 9);
        item8.textContent = ADiatonic[n8];
    });
    // for?
    // const keyG = document.getElementById('keyG');
    // const n = Math.floor(Math.random () * 24);
    // const degreeG = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'D♭', 'D', 'E♭', 'E', 'F', 'G♭', 'G', 'A♭', 'A', 'B♭', 'B', ];
    
    // keyG.addEventListener('click', () =>{
    //     for ( let i = 0; i < 7; i++){
    //         item1.textContent = degreeG[n];
    //         item2.textContent = degreeG[n];
    //         item3.textContent = degreeG[n];
    //         item4.textContent = degreeG[n];
    //         item5.textContent = degreeG[n];
    //         item6.textContent = degreeG[n];
    //         item7.textContent = degreeG[n];
    //         item8.textContent = degreeG[n];
    //     };
    // });

}