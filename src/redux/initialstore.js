import purpleLight from '../assets/musicPdf/Purple_ligth.pdf'
import parasolya from '../assets/musicPdf/Parasolya.pdf'
import oldCastle from '../assets/musicPdf/OlD_Castle.pdf'
import soulShadows from '../assets/musicPdf/Soul_Shadows.pdf'

export const initialStore = {
    pdf : [
        {id: 1 , path: purpleLight, title: "Purple Light" },
        {id: 2 , path: parasolya, title: "Parasolya" },
        {id: 3 , path: oldCastle, title: "Old-Castle" },
        {id: 4 , path: soulShadows, title: "Soul Shadows" },
    ],
    lyrics: []
}