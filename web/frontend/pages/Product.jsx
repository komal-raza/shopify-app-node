import { TitleBar } from "@shopify/app-bridge-react";
import { Layout, Page } from "@shopify/polaris";
import React from "react";
import { useTranslation } from "react-i18next";
import { ProductComponent } from "../components";
const Product = () => {
  const { t } = useTranslation();
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <h3>This is a Product Page</h3>
          <ProductComponent />
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default Product;
