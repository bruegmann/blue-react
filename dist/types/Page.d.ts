import React from "react";

export interface IPageProps {
    /**
      * Muss auf "true" gesetzt werden, wenn Actions verwendet wird
      */
     hasActions?: boolean;
}

declare class Page extends React.Component<IPageProps, any> { }
export default Page;