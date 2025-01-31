import React from "react";
import Link from "next/link";

import { Page } from "./Page";
import Sidebar from "../components/Sidebar";

const sidebarData = [
  {
    title: "Getting started",
    slug: "/cli",
    pages: [
      { slug: "#overview", title: "Introduction" },
      { slug: "#installation", title: "Install the Knock CLI" },
      { slug: "#authentication", title: "Authentication" },
      { slug: "#global-flags", title: "Global flags" },
    ],
  },
  {
    title: "Workflows",
    slug: "/cli",
    pages: [
      { slug: "#workflow-list", title: "List workflows" },
      { slug: "#workflow-get", title: "Get workflows" },
      { slug: "#workflow-pull", title: "Pull workflows" },
      { slug: "#workflow-push", title: "Push workflows" },
      { slug: "#workflow-run", title: "Run workflow" },
      { slug: "#workflow-validate", title: "Validate workflow" },
      { slug: "#workflow-activate", title: "Activate workflow" },
    ],
  },

  {
    title: "Email layouts",
    slug: "/cli",
    pages: [
      { slug: "#email-layout-list", title: "List email layouts" },
      { slug: "#email-layout-get", title: "Get email layouts" },
      { slug: "#email-layout-pull", title: "Pull email layouts" },
      { slug: "#email-layout-push", title: "Push email layouts" },
      { slug: "#email-layout-validate", title: "Validate email layouts" },
    ],
  },

  {
    title: "Translations",
    slug: "/cli",
    pages: [
      { slug: "#translation-list", title: "List translations" },
      { slug: "#translation-get", title: "Get translations" },
      { slug: "#translation-pull", title: "Pull translations" },
      { slug: "#translation-push", title: "Push translations" },
      { slug: "#translation-validate", title: "Validate translations" },
    ],
  },

  {
    title: "Commits",
    slug: "/cli",
    pages: [
      { slug: "#commit-list", title: "List commits" },
      { slug: "#commit-get", title: "Get commits" },
      { slug: "#commit-all", title: "Commit changes" },
      { slug: "#commit-promote", title: "Promote changes" },
    ],
  },
];

export const CliReferenceLayout = ({ frontMatter, children }) => (
  <Page
    pageType="CLI"
    sidebar={
      <Sidebar content={sidebarData}>
        <Link
          href="/"
          passHref
          className="text-sm block font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
        >
          &#8592; Back to docs
        </Link>
      </Sidebar>
    }
    metaProps={{
      title: `${frontMatter.title} | Knock`,
      description: frontMatter.description,
    }}
  >
    <div className="w-full max-w-5xl lg:flex mx-auto relative">
      <div className="w-full flex-auto">
        <div className="docs-content api-docs-content">{children}</div>
      </div>
    </div>
  </Page>
);
