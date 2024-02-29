import React from 'react';
// styles.d.ts
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
// custom.d.ts
declare module '*.png' {
  const value: string;
  export default value;
}

// custom.d.ts
declare module '*.svg' {
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
