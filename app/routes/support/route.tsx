import { Box, Label, List, VStack } from "@navikt/ds-react";
import { Link } from "@remix-run/react";
import { getUserGuideByLanguage, getWordListByLanguage } from "./support-util";
import { useTranslation } from "react-i18next";
import { RouteComponent } from "@remix-run/react/dist/routeModules";

const Guide: RouteComponent = () => {
	const { t } = useTranslation("translations", { keyPrefix: "pages.support" });
	const { i18n } = useTranslation();

	return (
			<VStack gap={"6"}>
				<Box
					background={"surface-default"}
					padding="6"
					paddingBlock={"8 4"}
					borderRadius={"large"}
					borderWidth="2"
					borderColor={"border-subtle"}
				>
					<Label>{t("userGuide")}</Label>
					<List as="ul" id={"guide-list"}>
						{getUserGuideByLanguage(i18n.language).map((item, index) => {
							return <List.Item key={index}>{item}</List.Item>;
						})}
					</List>
					<Label>{t("wordList")}</Label>
					<List as="ul" id={"guide-dictionary"}>
						{getWordListByLanguage(i18n.language).map((item, index) => {
							return <List.Item key={index}>{item}</List.Item>;
						})}
					</List>
					<Link to={"/"} id={"back-link"}>
						{t("back")}
					</Link>
				</Box>
			</VStack>
	);
};

export default Guide;