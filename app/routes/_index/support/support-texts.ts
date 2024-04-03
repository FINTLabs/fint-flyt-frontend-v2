export const FLYT_DESCRIPTION = "Fint Flyt er en integrasjonsplattform utviklet for å forenkle og redusere antall integrasjoner mellom fagsystemer. " +
    "Behovet for overføring av data mellom fagsystemer i fylkeskommunene øker i takt med digitaliseringen av offentlig sektor. For å møte dette behovet på en effektiv måte, ble idéen om Fint Flyt til. \n" +
    "Fylkeskommunene behandler i dag store mengder data med alt fra søknader, tillatelser, henvisninger, samtykke, rapporter m.m. I de fleste tilfeller må disse dataene overføres til andre systemer som f.eks ulike  arkivsystem eller økonomisystem for fakturering og utbetaling. I fylkeskommunene brukes det svært mange forskjellige fagsystemer som ikke nødvendigvis snakker samme språk. "

export const USER_GUIDE = [
    "Gå til 'Ny' i menyen",
    "Velg kildeapplikasjon, integrasjon og destinasjon",
    "Når du trykker 'Opprett', blir integrasjonen opprettet i Flyt, og du vil få mulighet til å legge til en konfigurasjon nå, eller senere ved å finne integrasjonen du nettopp opprettet i 'integrasjoner' i menyen",
    "Fyll ut konfigurasjonsoppsettet etter integrasjonens behov, her kan du benytte metadata og gjøre verdikonverteringer. Dersom du skal ferdigstille og aktivere velger du det i sjekkboksene nederst på siden. Det er ikke mulig å aktivere før du har valgt fullført. Det er ikke påkrevd å aktivere en konfigurasjon ved ferdigstilling, men Flyt vil ikke motta og behandle instanser for en intagrasjon, før den har en aktiv konfigurasjon",
    "Dersom du vil legge til, endre eller se på konfigurasjonene til en integrasjon, gå til 'Integrasjoner' i menyen, velg integrasjonen du vil se på og trykk 'Vis'. Da vil du få oversikt over utkast, ferdigstilte og hvilken konfigurasjon som er eventuelt er aktiv." +
    "Velg rediger om du vil fortesette arbeidet med en påbegynt konfigurasjon eller velg ny dersom du vil opprette en helt ny. Da vil du kunne velge å begynne med en blank konfigurasjon eller basere deg på en tidligere versjon. Merk at du ikke kan redigere en ferdigstilt konfigurasjon",
]

export const WORD_LIST = [
    "Integrasjon - Hvor data som skal omformes kommer fra, hvor den skal og hva den vil inneholde.",
    "Konfigurasjon - Hvordan dataen skal omformes fra kilde til destinasjon",
    "Metadata - I fint Flyt er metadata informasjon om innholdet i data som skal omformes. Metadata beskriver dataen som kommer inn til Flyt, mens konfigurasjonen beskriver hvordan utgående data skal være ",
    "Instans - Hver innsending av data for én integrasjon er en instans. Innholdet i innstansen blir omformet og videresent",
    "Verdikonvertering - Siden Flyt er platformuavhengig og ikke 'vet' hva som blir sendt inn eller hva destinsjonen godtar, vil det av og til dukke opp behov for verdikonvertering. Da vil vi sette opp et regelsett som betyr at for hver forekomst av en gitt data/verdi, vil verdien bli omformet eller konvertert til noe annet. Eksempler på dette er dersom et arkiv kun godtar enkelte mediatyper, eller dersom destinasjon kun godtar format som for eksempel stor/liten bokstav.",
    "Kildeapplikasjon - En kildeapplikasjon er fagsystemet hvor data som trenger omforming oppstår.",
    "Destinasjon - Hvor data skal sendes etter omforming i Flyt",
    "Egendefinert felt/verdi - For å benytte metadata i konfigurasjonen må vi ha felter som tillatter både fritekst og referanser til metadata. Dette kalles i Flyt egendefinerte felter. "
]

export const FAQ: { header: string, content: string }[] = [
    {
        header: "Hvordan bruker jeg metadata?",
        content: "Metadata kan brukes i alle egendefinerte felt. I utgående data er det alle tekstfeltene, og i tillegg de nedtrekksmenyene hvor du kan velge 'egendefinert verdi'. Dette gjør at bruker kan bygge opp titler, personalia eller andre felter med informasjon fra innsendt data"
    },
    {
        header: "Hva betyr symbolene som dukker opp når jeg bruker metadata?",
        content: "De egendefinerte feltene tillater både fri tekst og å benytte data fra skjema. For at en datamaskin skal kunne skille fritekst fra metadata vises metadata på dette formatet: '$if{metadata-id}. På den måten kan systemet gjenkjenne disse referansene og bytte ut innholdet med data fra innsendt instans. Det er derfor viktig at man beholder formatet til metadata-referanser når man redigerer eller legger til fritekst i et egendefinert felt"
    },
    {
        header: "Hva er en verdikonvertering og hvordan bruker jeg den?",
        content: "Verdikonvertering er et felt som lar deg bruke en definert regel for å konvertere hver forekomst av en verdi. Verdikonverteringer settes opp i menyen for verdikonvertering og brukes på samme måte som metadata, dra inn verdikonverteringen du ønsker å benytte, etterfulgt av verdien som skal konverteres"
    },
    {
        header: "Hvorfor kan ikke Flyt gi feilmelding når jeg setter opp en konfigurasjon med kombinasjon av kodeverk eller verdier som destinasjon ikke tillater?",
        content: "Flyt vil kun ha mulighet til å omforme data etter regler som settes opp i konfigurajonen. Flyt er ikke koblet på destinasjon med informasjon om hva som godtas/godtas ikke. Flyt mottar data, omformer etter gitt konfigurajon og sender den videre. Dersom destinasjonen avviser innsendingen vil det vises feilmelding i instansoversikten."
    }
]