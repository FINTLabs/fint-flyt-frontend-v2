// import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {Button, Link} from "@navikt/ds-react";
import routes from "./routes";
const MenuItems = () => {
	const { t } = useTranslation("translations", { keyPrefix: "menuItems" });
	// const history = useHistory();
	return (
		<>
			{routes
				.filter((route) => route.inNavigationMenu)
				.map((route) => (

					<Button
						size={"medium"}
						style={{ color: "white" }}
						variant={"tertiary-neutral"}
						// onClick={() => {
						// 	history.push(route.path);
						// }}
						key={route.name}
						as={Link}
						href={route.path}
						className="underline-none!important"
					>
						{t(route.name)}
					</Button>
				))}
		</>
	);
};
export default MenuItems;
