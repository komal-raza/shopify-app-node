import { Page, Layout } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation, Trans } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <Page narrowWidth>
      <Layout>
        <Layout.Section>
          <NavLink to="/product">Explore Products</NavLink>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
