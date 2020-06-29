import React from "react";

const useDynamicScript = (url) => {
  const [ready, setReady] = React.useState(false);
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    if (!url) {
      return;
    }

    const element = document.createElement("script");
    element.src = url;
    element.type = "text/javascript";
    element.async = true;

    setReady(false);
    setFailed(false);

    element.onload = () => {
      console.log(`Dynamic Script Loaded: ${url}`);
      setReady(true);
    };

    element.onerror = () => {
      console.error(`Dynamic Script Error: ${url}`);
      setReady(false);
      setFailed(true);
    };

    document.head.appendChild(element);

    return () => {
      console.log(`Dynamic Script Removed: ${url}`);
      document.head.removeChild(element);
    };
  }, [url]);

  return {
    ready,
    failed,
  };
};

export default ({ name }) => {
  const { ready, failed } = useDynamicScript(
    "http://localhost:8081/remoteEntry.js"
  );

  if (!ready || failed || !global) {
    return null;
  }

  const scope = "peer";
  const module = "./DogCaption";

  global[scope].init(
    Object.assign(
      {
        react: {
          get: () => Promise.resolve(() => require("react")),
          loaded: true,
        },
      },
      global.__webpack_require__ ? global.__webpack_require__.o : {}
    )
  );

  const Component = React.lazy(() =>
    global[scope].get(module).then((factory) => {
      const Module = factory();
      return Module;
    })
  );

  return (
    <React.Suspense fallback={<div>Loading caption</div>}>
      <Component name={name} />
    </React.Suspense>
  );
};
