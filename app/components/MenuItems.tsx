import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Button} from "@navikt/ds-react";
// import routes from "./routes";
const MenuItems = () => {
	const { t } = useTranslation("translations", { keyPrefix: "menuItems" });
	const navigate = useNavigate();

	const menuItems = [
		{
			path: "/",
			name: "dashboard",
		},
		{
			path: "/integrations",
			name: "integrations",
		},
		{
			path: "/valueconverting",
			name: "valueConverting",
		},
		{
			path: "/instance",
			name: "instances",
			exact: true,
		},
		{
			path: "/version",
			name: "version",
			// component: Version,
			exact: true,
			inNavigationMenu: true,
		},
	];

	return (
		<>
			{menuItems.map((route) => (

					<Button
						size={"medium"}
						style={{ color: "white" }}
						variant={"tertiary-neutral"}
						onClick={() => {
							navigate(route.path);
						}}
						key={route.name}
						className="underline-none!important"
					>
						{t(route.name)}
					</Button>
				))}
		</>
	);
};
export default MenuItems;
