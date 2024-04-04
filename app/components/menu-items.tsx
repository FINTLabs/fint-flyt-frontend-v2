import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {Button, Link} from "@navikt/ds-react";
import routes from "./routes";
const MenuItems = () => {
	const { t } = useTranslation("translations", { keyPrefix: "menuItems" });
	const navigate = useNavigate();
	return (
		<>
			{routes
				.filter((route) => route.inNavigationMenu)
				.map((route) => (

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
