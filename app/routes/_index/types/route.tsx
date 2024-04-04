export default interface IRoute {
    exact: boolean;
    name: string;
    path: string;
    // component: RouteComponent;
    inNavigationMenu?: boolean;
}