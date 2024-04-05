export const ABOUT_VERSIONS =
	"FLYT er under kontinuerlig utvikling og det blir stadig lagt til ny funksjonalitet samt forbedret brukeropplevelse basert på brukernes innspill - Denne siden beskriver  " +
	"større endringer og feilrettinger i FLYT";

export const VERSION_DATA: { heading: string; updates: string[] }[] = [
	{
		heading: "Versjon 3.2 - Februar 2024",
		updates: [
			"3.2 Navneendring i konfigurasjonsoppsett, \"dynamisk verdi\" heter nå \"egendefinert verdi\"",
		],
	},
	{
		heading: "Januar 2024",
		updates: [
            "20.1 Lagt til mulighet for å velge å vise flere instanser og integrasjoner per side i tabellene",
            "11.1 Fjernet menyvalget for \"NY\" og opprettet knapp for ny integrasjon på integrasjonssiden",
            "5.1 Oppdatert/nytt design på sidene for ny integrasjon og konfigurasjonsoppsett, språkvalg på menybar",
            "5.1 Nytt utsende på Dashbord - Innhold fra supportsiden ligger nå her",
		],
	},
	{
		heading: "Desember 2023",
		updates: [
			"11.12 Lagt til støtte for engelsk språk i Flyt",
			"12.12 Nytt design av integrasjonsoversikten",
			"11.12 Lagt til støtte for nynorsk språk i Flyt",
			"8.12 Forbedret visning av verdikonvertering med flere verdier. Nytt design av instanssiden hvor all informasjon er samlet på én flate.",
			"1.12 La til ny side med visning av versjoner og hva som er nytt i Flyt",
		],
	},
	{
		heading: "November 2023",
		updates: [
			"30.11  Nytt design av vertikonvertering siden og oppdaterete feilmeldinger for instans som feilet ved innsending",
			"27.11  Nytt design av support siden",
			"23.11  Diverse feilrettinger og noe endring av brukergrensesnittet",
		],
	},
];

export const ABOUT_VERSIONS_NN =
	"FLYT er under kontinuerleg utvikling og det blir stadig lagt til ny funksjonalitet og forbetra brukaroppleving basert på innspel frå brukarar. Denne sida beskriv større endringar og feilrettingar i FLYT";

export const VERSION_DATA_NN: { heading: string; updates: string[] }[] = [
	{
		heading: "Versjon 3.2 - Februar 2024",
		updates: [
			"3.2 Navneendring i konfigurasjonsoppsett, \"dynamisk verdi\" heiter nå \"eigendefinert verdi\"",
		],
	},
	{
		heading: "Januar 2024",
		updates: [
			"20.1 Lagt til moglegheit for å velja å visa fleire instansar og integrasjonar per side i tabellane",
			"11.1 Fjerna menyvalet for \"NY\" og oppretta knapp for ny integrasjon på integrasjonssidaa",
			"5.1 Oppdatert/nytt design på sidene for ny integrasjon og konfigurasjonsoppsett, språkval på menybar",
            "5.1 Nytt utseende på Dashbordet - Innhald frå supportsida ligg no her",
		],
	},
	{
		heading: "Desember 2023",
		updates: [
			"27.12 Lagt til støtte for engelsk språk i Flyt",
			"12.12 Nytt design av integrasjonsoversikta",
			"11.12 Lagt til støtte for nynorsk språk i Flyt",
			"8.12 Forbetra visning av verdikonvertering med fleire verdiar. Nytt design av instanssida der all informasjon er samla på éi flate.",
			"1.12 La til ny side med visning av versjonar og kva som er nytt i Flyt",
		],
	},
	{
		heading: "November 2023",
		updates: [
			"30.11  Nytt design av vertikonverteringsida og oppdaterte feilmeldingar for instans som feila ved innsending",
			"27.11  Nytt design av supportsida",
			"23.11  Diverse feilrettingar og noko endring av brukargrensesnittet",
		],
	},
];

export const ABOUT_VERSIONS_EN =
	"FLYT is under continuous development, with new functionality being added regularly and improvements to user experience based on user feedback. This page describes major changes and bug fixes in FLYT.";

export const VERSION_DATA_EN: { heading: string; updates: string[] }[] = [
	{
		heading: "Version 3.2 - February 2024",
		updates: [
			"3.2 Name change in configuration view, \"dynamic value/field\" changed to \"custom value/field\"",
		],
	},
	{
		heading: "Vanuary 2024",
		updates: [
			"20.1 Added option to choose to show multiple instances and integrations per page in the data tables",
			"11.1 Removed menu option for \"New\" and created button for new integration in the integrations page",
			"5.1 New/updated design of the new integration and configuration pages, language selection on the menu bar",
            "5.1 New look on the Dashboard - Content from the support page is now here",
		],
	},
	{
		heading: "December 2023",
		updates: [
			"27.12 Added support for English language in Flyt",
			"12.12 New design of the integration overview",
			"11.12 Added support for Nynorsk language in Flyt",
			"8.12 Improved display of value conversion with multiple values. New design of the instance page where all information is consolidated on one surface.",
			"1.12 Added a new page displaying versions and what's new in Flyt",
		],
	},
	{
		heading: "November 2023",
		updates: [
			"30.11 New design of the value conversion page and updated error messages for instances that failed upon submission",
			"27.11 New design of the support page",
			"23.11 Various bug fixes and some changes to the user interface",
		],
	},
];

export function getAboutByLanguage(lang: string): string {
	if (lang === "no") {
		return ABOUT_VERSIONS;
	} else if (lang === "en") {
		return ABOUT_VERSIONS_EN;
	} else {
		return ABOUT_VERSIONS_NN;
	}
}

export function getVersionDataByLanguage(
	lang: string
): { heading: string; updates: string[] }[] {
	if (lang === "no") {
		return VERSION_DATA;
	} else if (lang === "en") {
		return VERSION_DATA_EN;
	} else {
		return VERSION_DATA_NN;
	}
}
