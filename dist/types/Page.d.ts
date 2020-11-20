import React from "react";

export interface IPageProps {
  /**
    * @deprecated This isn't necessary anymore to use Actions on a page.
    */
  hasActions?: boolean

  /**
   * Will be set to the document's `<title>` tag.
   */
  title?: string
}

declare class Page extends React.Component<IPageProps, any> { }
export default Page;