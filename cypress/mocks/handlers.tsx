import { http, HttpResponse } from 'msw';
// import contacts from '../fixtures/contacts.json';
// import organizations from '../fixtures/organizations.json';
// import components from '../fixtures/components.json';

const API_URL = process.env.API_URL;

export const handlers = [
    // http.get(`${API_URL}/api/contacts`, () => {
    //     return HttpResponse.json(contacts);
    // }),
    //
    // http.post(`${API_URL}/api/contacts`, () => {
    //     return HttpResponse.json( { status: 201 })
    // }),
    //
    // http.put(`${API_URL}/api/contacts/:contactId`, () => {
    //     // const { contactId } = req.params;
    //     return new HttpResponse(null, { status: 200 })
    // }),
    //
    // http.get('http://localhost:8081/api/me', () => {
    //     return HttpResponse.json({
    //         fullName: 'Mocked User'
    //     } );
    // }),
    //
    // http.post('http://localhost:3001/ping', () => {
    //     return HttpResponse.json({ message: 'pong' });
    // }),
    //
    // http.get(`${API_URL}/api/organisations`, () => {
    //     return HttpResponse.json(organizations);
    // }),
    //
    // http.get(`${API_URL}/api/components`, () => {
    //     return HttpResponse.json(components);
    // }),
    //
    // http.get(`${API_URL}/api/components/:componentName`, (req) => {
    //     const  componentName  = req.params.componentName;
    //     let foundComponents: string | any[];
    //     if (typeof componentName === "string") {
    //         foundComponents = components.filter(component => component.name.includes(componentName));
    //         return HttpResponse.json(foundComponents[0]);
    //     }
    //     return HttpResponse.json({ message: 'Not Found' }, { status: 404 });
    // }),
    //
    // http.put(`${API_URL}/api/components/:componentName`, () => {
    //     return new HttpResponse(null, { status: 200 })
    // }),
    //
    // http.post(`${API_URL}/api/components`, () => {
    //     // const { name, description, basePath, dn } = req.body;
    //     return new HttpResponse(null, { status: 200 })
    // }),
    //
    // http.delete(`${API_URL}/api/components/:componentName`, () => {
    //     return new HttpResponse(null, { status: 200 })
    // }),
    //
    // http.post(`${API_URL}/api/organisations`, () => {
    //     return new HttpResponse(null, { status: 201 })
    // }),
    //
    // http.put(`${API_URL}/api/organisations/:orgNumber`, () => {
    //     return new HttpResponse(null, { status: 200 })
    // }),
    //
    // http.get(`${API_URL}/api/organisations/Rebel%20Alliance/contacts/legal`, () => {
    //     return HttpResponse.json(contacts[0]);
    // }),
];