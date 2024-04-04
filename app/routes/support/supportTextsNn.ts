export const FLYT_DESCRIPTION_NN = "Fint Flyt er ei integrasjonsplattform utvikla for å forenkle og redusere talet på integrasjonar mellom fagsystem. " +
    "Behovet for overføring av data mellom fagsystem i fylkeskommunane aukar i takt med digitaliseringa av offentleg sektor. For å møte dette behovet på ein effektiv måte, vart ideen om Fint Flyt til. \n" +
    "Fylkeskommunane handsamar i dag store mengder data med alt frå søknader, løyve, tilvisingar, samtykke, rapportar m.m. I dei fleste tilfelle må desse dataene overførast til andre system som til dømes ulike arkivsystem eller økonomisystem for fakturering og utbetaling. I fylkeskommunane vert det nytta svært mange ulike fagsystem som ikkje nødvendigvis snakkar same språk. ";


export const USER_GUIDE_NN = [
    "Gå til 'Ny' i menyen",
    "Velg kjeldeapplikasjon, integrasjon og destinasjon",
    "Når du trykker 'Opprett', vert integrasjonen oppretta i Flyt, og du vil få moglegheit til å leggje til ei konfigurasjon no, eller seinare ved å finne integrasjonen du nettopp oppretta under 'integrasjonar' i menyen",
    "Fyll ut konfigurasjonsoppsettet etter integrasjonen sine behov. Her kan du nyttja metadata og gjere verdiomvandlingar. Dersom du er klar til å fullføre og aktivere, vel det i avkryssingsruter nedst på sida. Det er ikkje mogleg å aktivere før du har valt fullført. Det er ikkje påkravd å aktivere ei konfigurasjon ved fullføring, men Flyt vil ikkje motta og behandle instansar for ei integrasjon før den har ei aktiv konfigurasjon",
    "Dersom du vil leggje til, endre eller sjå på konfigurasjonane til ei integrasjon, gå til 'Integrasjonar' i menyen, vel integrasjonen du vil sjå på og trykk 'Vis'. Då vil du få oversikt over utkast, ferdigstilte konfigurasjonar, og kva konfigurasjon som eventuelt er aktiv." +
    "Vel 'Rediger' om du vil halde fram arbeidet med ei starta konfigurasjon, eller vel 'Ny' dersom du vil opprette ei heilt ny. Då kan du velje å byrje med ei blank konfigurasjon eller basere deg på ei tidlegare versjon. Merk at du ikkje kan redigere ei ferdigstilt konfigurasjon",
];

export const WORD_LIST_NN = [
    "Integrasjon - Kor data som skal omformast kjem frå, kvar det skal, og kva det vil innehalde.",
    "Konfigurasjon - Korleis dataen skal omformast frå kjelde til destinasjon",
    "Metadata - I fint Flyt er metadata informasjon om innhaldet i data som skal omformast. Metadata beskriv dataen som kjem inn til Flyt, medan konfigurasjonen beskriv korleis utgåande data skal vere.",
    "Instans - Kvar innsending av data for éin integrasjon er ei instans. Innhaldet i instansen blir omforma og vidersendt",
    "Verdikonvertering - Sida Flyt er plattformuavhengig og ikkje 'veit' kva som vert sendt inn eller kva destinasjonen godtek, vil det av og til dukke opp behov for verdikonvertering. Då vil vi setje opp eit regelsett som betyr at for kvar førekomst av ei gitt data/verdi, vil verdien verte omforma eller konvertert til noko anna. Døme på dette er dersom eit arkiv berre godtek visse mediatypar, eller dersom destinasjonen berre godtek format som til dømes stor/liten bokstav.",
    "Kjeldeapplikasjon - Ein kjeldeapplikasjon er fagsystemet der data som treng omforming oppstår.",
    "Destinasjon - Kor data skal sendast etter omforming i Flyt",
    "Eigendefinert felt/verdi - For å nyttja metadata i konfigurasjonen må vi ha felt som tillèt både fri tekst og referansar til metadata. Dette kallast i Flyt eigendefinerte felt."
];

export const FAQ_NN: { header: string, content: string }[] = [
    {
        header: "Korleis brukar eg metadata?",
        content: "Metadata kan nyttast i alle eigendefinerte felt. I utgåande data er det alle tekstfeltene, og i tillegg dei nedtrekksmenyane der du kan velje 'dynamisk verdi'. Dette gjer at brukaren kan byggje opp titlar, personalia eller andre felt med informasjon frå innsendt data."
    },
    {
        header: "Kva tyder symbola som dukkar opp når eg nyttar metadata?",
        content: "Dei eigendefinerte felta tillèt både fri tekst og å nytte data frå skjema. For at ein datamaskin skal kunne skilje fri tekst frå metadata, viser metadata seg på denne forma: '$if{metadata-id}'. På den måten kan systemet gjenkjenne desse referansane og bytte ut innhaldet med data frå innsendt instans. Difor er det viktig å halde forma til metadata-referansar når ein redigerer eller legg til fri tekst i eit eigendefinert felt."
    },
    {
        header: "Kva er ein verdikonvertering og korleis brukar eg den?",
        content: "Verdikonvertering er eit felt som lèt deg bruke ein definert regel for å konvertere kvar førekomst av ein verdi. Verdikonverteringar vert sett opp i menyen for verdikonvertering og brukast på same måte som metadata. Dra inn verdikonverteringa du vil nyttje, etterfylgt av verdien som skal konverterast."
    },
    {
        header: "Kvifor kan ikkje Flyt gi feilmelding når eg set opp ei konfigurasjon med kombinasjon av kodeverk eller verdiar som destinasjonen ikkje tillèt?",
        content: "Flyt vil berre ha moglegheit til å omforme data etter reglar som vert sett opp i konfigurasjonen. Flyt er ikkje kopla til destinasjonen med informasjon om kva som vert akseptert/ikkje akseptert. Flyt mottar data, omformar etter gitt konfigurasjon og sender det vidare. Dersom destinasjonen avviser innsendinga, vil det visast ei feilmelding i instansoversikta."
    }
]
