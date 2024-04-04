export const FLYT_DESCRIPTION_EN = "Fint Flyt is an integrations platform developed to simplify and reduce the number of integrations between systems. " +
    "The need for transferring data between systems in county municipalities is increasing in line with the digitization of the public sector. To meet this need effectively, the idea of Fint Flyt was born. \n" +
    "County municipalities currently process large amounts of data, including applications, permits, referrals, consents, reports, etc. In most cases, this data needs to be transferred to other systems such as various archive systems or financial systems for invoicing and payment. County municipalities use a wide range of systems that may not necessarily \"speak the same language\".";

export const USER_GUIDE_EN = [
    "Go to 'New' in the menu",
    "Select source application, integrations, and destination",
    "When you press 'Create', the integrations will be created in Flyt, and you'll have the option to add a configuration now or later by finding the integrations you just created under 'integrations' in the menu",
    "Fill out the configuration setup according to the integrations's needs. Here, you can use metadata and perform value conversions. If you're ready to finalize and activate, select that in the checkboxes at the bottom of the page. It's not possible to activate until you've chosen to complete. Activating a configuration upon completion is not mandatory, but Flyt will not receive and process instances for an integrations until it has an active configuration.",
    "If you want to add, modify, or view configurations for an integrations, go to 'Integrations' in the menu, select the integrations you want to view, and press 'Show'. You'll then have an overview of drafts, completed configurations, and which configuration might be active." +
    "Select 'Edit' if you want to continue working on a started configuration or choose 'New' if you want to create an entirely integrations_.new one. You'll be able to start with a blank configuration or base it on a previous version. Note that you cannot edit a completed configuration.",
];

export const WORD_LIST_EN = [
    "Integration - Where data to be transformed comes from, where it's going, and what it will contain.",
    "Configuration - How the data is transformed from source to destination",
    "Metadata - In Fint Flyt, metadata is information about the content of data to be transformed. Metadata describes the data coming into Flyt, while the configuration describes how outgoing data should be.",
    "Instance - Each submission of data for one integrations is an types. The content of the types is transformed and forwarded.",
    "Value Conversion - Since Flyt is platform-independent and doesn't 'know' what's being sent in or what the destination accepts, there's sometimes a need for value conversion. In such cases, we set up a rule set that means for each occurrence of a given data/value, the value will be transformed or converted into something else. Examples include when an archive only accepts certain media types or when the destination only accepts formats such as uppercase/lowercase.",
    "Source Application - A source application is the system where data needing transformation originates.",
    "Destination - Where data should be sent after transformation in Flyt",
    "Custom Field/Value - To use metadata in the configuration, we need fields that allow both text and references to metadata. In Flyt, these are called custom fields."
];

export const FAQ_EN: { header: string, content: string }[] = [
    {
        header: "How do I use metadata?",
        content: "Metadata can be used in all custom fields. In outgoing data, it's all the text fields, and additionally, the dropdown menus where you can select 'dynamic value.' This allows the user to build titles, personal information, or other fields with information from submitted data."
    },
    {
        header: "What do the symbols mean when I use metadata?",
        content: "The custom fields allow both free text and using data from the form. For a computer to distinguish free text from metadata, metadata appears in this format: '$if{metadata-id}'. This way, the system can recognize these references and replace the content with data from the submitted types. Therefore, it's important to maintain the format of metadata references when editing or adding free text in a custom field."
    },
    {
        header: "What is value conversion, and how do I use it?",
        content: "Value conversion is a field that allows you to use a defined rule to convert each occurrence of a value. Value conversions are set up in the value conversion menu and used similarly to metadata. Drag in the value conversion you want to use, followed by the value to be converted."
    },
    {
        header: "Why can't Flyt provide an error message when I set up a configuration with a combination of code values that the destination doesn't allow?",
        content: "Flyt will only have the ability to transform data based on rules set up in the configuration. Flyt isn't connected to the destination with information about what is accepted/not accepted. Flyt receives data, transforms it according to the given configuration, and forwards it. If the destination rejects the submission, an error message will be displayed in the types overview."
    }
]