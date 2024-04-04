
// import Dashboard from "../components/pages/Dashboard";
// import IntegrationForm from "../features/integrations/IntegrationForm";
// import Configuration from "../components/pages/Configuration";
// import UserGuide from "../features/support/components/UserGuide";
// import Version from "../components/pages/Version";
// import ValueConverting from "../components/pages/ValueConverting";
// import Instances from "../components/pages/Instances";
// import Integrations from "../components/pages/Integrations";

import IRoute from "~/routes/_index/types/route";

const routes: IRoute[] = [
	{
		path: "/",
		name: "dashboard",
		// component: Dashboard,
		exact: true,
		inNavigationMenu: true,
	},
	{
		path: "/integrations/integrations/new",
		name: "integration",
		// component: IntegrationForm,
		exact: true,
	},
	{
		path: "/integrations/configuration/integrations/new",
		name: "integration",
		// component: Configuration,
		exact: true,
	},
	{
		path: "/integrations/configuration/edit",
		name: "editIntegration",
		// component: Configuration,
		exact: true,
	},
	{
		path: "configuration/integrations_.new-configuration",
		name: "editIntegration",
		// component: Configuration,
		exact: true,
	},
	{
		// path: "/integrations/list",
		path: "/integrations/",
		name: "integrations",
		// component: Integrations,
		exact: true,
		inNavigationMenu: true,
	},
	{
		path: "/integrations/panel",
		name: "integrationPanel",
		// component: Integrations,
		exact: true,
	},
	{
		// path: "/integrations/types/list",
		path: "instance",
		name: "instances",
		// component: Instances,
		exact: true,
		inNavigationMenu: true,
	},
	{
		path: "/types/",
		name: "instancePanel",
		// component: Instances,
		exact: true,
	},
	{
		path: "/valueconverting",
		name: "valueConverting",
		// component: ValueConverting,
		exact: true,
		inNavigationMenu: true,
	},
	{
		path: "/version",
		name: "version",
		// component: Version,
		exact: true,
		inNavigationMenu: true,
	},
	{
		path: "/support/guide",
		name: "guide",
		// component: UserGuide,
		exact: true,
		inNavigationMenu: false,
	},
];

export default routes;
